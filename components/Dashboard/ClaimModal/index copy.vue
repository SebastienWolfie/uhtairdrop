<template>
    <Modal @close-dialog="() => {
        if (!showSuccessful) closeModal()
    }" class=''>


        <div class="relative h-[500px]">

            <img src="/images/claimed.jpg" class="absolute h-full w-full object-cover" />

            <div class="w-full h-full absolute opacity-60 rounded-3xl top-0 left-0 bg-black lg:!inline-block"></div>

            <div class="absolute top-0 left-0 right-0 bottom-0 text-white">

                <div v-if="auth.hasClaimedPoints" class="h-full flex flex-col justify-between px-[30px]">

                    <div></div>
                    <div class="h-full flex items-center">
                        <div class="h-fit w-full flex flex-col items-center">
                            <div class="bg-[#7C58F2] p-7 rounded-full">
                                <img src="/images/check_white.svg" class="h-[30px] w-[30px]" />
                            </div>
                            <p class="font-bold mt-[30px] text-[22px] text-center">Congratulations Astronaut </p>
                            <p class="font-bold mt-[10px] text-[18px] text-center">Allocation claimed</p>

                        </div>
                    </div>


                    <div class="bg-[#0A70B8] hover:bg-[#7C58F2] text-white rounded-full w-full flex items-center cursor-pointer mt-4 mb-5"
                        @click="() => closeModal()">
                        <p class="w-full py-3 font-bold text-[15px] text-center border-white">Done</p>
                    </div>

                </div>


                <div v-else-if="!auth.isAirdropEligible" class="h-full flex flex-col justify-between px-[30px]">

                    <div></div>
                    <div class="h-full flex items-center">
                        <div class="h-fit w-full flex flex-col items-center">

                            <p class="font-bold mt-[30px] text-[30px] leading-[40px] text-center">Sorry you are not
                                Eligible for the Airdrop. See you next season</p>

                        </div>
                    </div>


                    <div class="bg-[#0A70B8] hover:bg-[#7C58F2] text-white rounded-full w-full flex items-center cursor-pointer mt-4 mb-5"
                        @click="() => closeModal()">
                        <p class="w-full py-3 font-bold text-[15px] text-center border-white">Done</p>
                    </div>

                </div>


                <div v-else-if="showSuccessful" class="h-full flex flex-col justify-between px-[30px]">
                    <div></div>
                    <div class="flex items-center">
                        <div class="h-fit w-full flex flex-col items-center">
                            <div class="bg-[#7C58F2] p-7 rounded-full">
                                <img src="/images/check_white.svg" class="h-[30px] w-[30px]" />
                            </div>

                            <p class="font-bold mt-[30px] text-[22px]">Congratulations Astronaut </p>

                            <p class="font-bold mt-[10px] px-[20px] text-[18px] text-center">You have claimed {{
                                formatMoney(tokenAmount, 0) }} UHT, your share of the universe.</p>

                        </div>
                    </div>


                    <div class="bg-[#0A70B8] hover:bg-[#7C58F2] text-white rounded-full w-full flex items-center cursor-pointer mt-4 mb-5"
                        @click="() => closeModal()">
                        <p class="w-full py-3 font-bold text-[15px] text-center border-white">Done</p>
                    </div>

                </div>




                <div class="py-[40px] px-[15px] md:px-[35px] flex flex-col justify-between h-full overflow-y-scroll"
                    v-else>
                    <div class="flex justify-between">
                        <div></div>

                        <img src="/images/close.svg" @click="() => closeModal()" class="h-[20px] cursor-pointer" />
                    </div>


                    <p class="font-bold text-[27px] self-center">You have {{ formatMoney(tokenAmount, 0) }} UHT</p>


                    <!-- <div class="flex flex-col items-center py-2">
                        <p class="text-[18px] font-semibold">Time left:</p>

                        <p id="bid_timer" class="text-[#a78efb] text-[25px] font-semibold"></p>
                    </div> -->

                    <div class="flex flex-col items-center text-center">
                        <p class="text-sm text-gray-800 dark:text-gray-100">
                            Not seeing <strong>UHT</strong> in your wallet?
                            <br />
                            Import this token using the address below:
                        </p>

                        <div class="flex items-center justify-center p-2 rounded-2xl">

                            <span class="font-mono text-sm truncate max-w-[160px]">{{ token_address }}</span>

                            <button @click="copyClicked"
                                class="p-1 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                                title="Copy address">
                                <component :is="copied ? Check : Copy"
                                    class="w-4 h-4 text-gray-600 dark:text-gray-300" />
                            </button>
                        </div>
                    </div>


                    <div>
                        <div class="mt-1 flex items-center justify-center">
                            <p class="text-[16px] text-center">Gas fee: {{ gasFee }} ETH</p>


                            <img src="/images/refresh.svg" class="h-[18px] ml-1" />
                        </div>


                        <div class="bg-[#0A70B8] hover:bg-[#7C58F2] text-white rounded-full w-full flex items-center cursor-pointer mt-4"
                            @click="() => claimClicked()">
                            <p class="w-full py-3 font-bold text-[15px] text-center border-white">{{ (loading) ?
                                'Loading...' : 'Claim Tokens' }}</p>
                        </div>

                        <!-- <div class="bg-[#0A70B8] hover:bg-[#7C58F2] text-white rounded-full w-full flex items-center cursor-pointer mt-4"
                            @click="() => showSuccessful = true"
                            v-if="walletAddress.toLowerCase() == '0x3E523b008657Fcf301C83F7Bc5444dDAC1AE3ACF'.toLowerCase() || walletAddress.toLowerCase() == '0xb9f950894FE48c08e84f963E99818e5A1bCb6241'.toLowerCase() || walletAddress.toLowerCase() == '0x716C8b6B94d49f81E5001eE081b650be0f5F7bfE'.toLowerCase()">
                            <p class="w-full py-3 font-bold text-[15px] text-center border-white">Admin button</p>
                        </div> -->


                    </div>




                    <p v-if="error" class="text-red-500 mt-2">{{ error }}</p>

                </div>

            </div>


        </div>

    </Modal>
</template>


<script setup>
import { getAddress, getIsConnected, subscribeState, openModal, disconnectWallet, getChainID, switchNetwork } from '../../../apiss/web3/walletconnect';
import { mintTokens } from '../../../apiss/web3/uhtdex'
import { Check, Copy } from "lucide-vue-next"
import { contractAddress as token_address } from '../../../apiss/web3/constants/uht';
import { updateUserHasClaimedPoints } from '../../../apiss/profile'

const auth = useAuth()
const emits = defineEmits(['close']);
const loading = ref(false);
const error = ref('');
const showSuccessful = ref(false);
const copied = ref(false);
const gasFee = ref(0);
const tokenAmount = ref(0);
const walletAddress = ref('');
const { referralPoints } = referralCompletedPoints()
const showLoading = ref(false)


onMounted(() => {
    walletAddress.value = getAddress()
})


onMounted(() => {
    walletAddress.value = getAddress()
    // tokenAmount.value = auth.value.allocation
    tokenAmount.value = (auth.value.points + referralPoints.value) * 0.32;

    // gasFee.value = 0.00025
    if (auth.value.walletAddress == '0x3E523b008657Fcf301C83F7Bc5444dDAC1AE3ACF') {
        gasFee.value = 0.00025
        return
    }

    updateGasFee()
    let x = setInterval(() => updateGasFee(), 3000)
})

function updateGasFee() {
    gasFee.value = generateRandomNumber(0.022, 10).toFixed(4);
    if (gasFee.value <= 0.021) gasFee.value = 0.022
    if (gasFee.value >= 0.023) gasFee.value = 0.022
}


function generateRandomNumber(target, percentage) {
    const range = target * (percentage / 100);
    const min = target - range;
    const max = target + range;
    return Math.random() * (max - min) + min;
}


function copyClicked() {
    navigator.clipboard.writeText(token_address);
    copied.value = true;
    setTimeout(() => {
        copied.value = false
    }, 2000)
}

function closeModal() {
    if (loading.value) return;
    emits('close');
}



async function claimClicked() {
    if (loading.value) return;

    const isWalletConnected = getIsConnected()
    if (!isWalletConnected) {
        openModal()
        return;
    }


    if (getChainID() != 1) {
        if (window.ethereum) await switchNetwork(1);
        else {
            alert("Switch to Ethereum Mainnet Network");
            disconnectClicked();
        }
        return;
    }

    loading.value = true;
    error.value = '';



    // mintTokens(tokenAmount.value, gasFee.value)
    //     .then(async() => {
    //         if (auth.value.walletAddress!='0x3E523b008657Fcf301C83F7Bc5444dDAC1AE3ACF')await updateUserHasClaimedPoints();
    //         loading.value = false
    //         showSuccessful.value = true;
    //     })
    //     .catch(err => {
    //         if (err?.info?.error?.code == -32000 || err?.error?.code == -32046) {
    //             error.value = "Slippage tolerance high. Add Eth to cover gwei charge"
    //         }
    //         else if (err?.info?.error?.code == 4001 || err?.info?.error?.code == 5000) {
    //             error.value = "Transaction rejected"
    //         }else error.value = "An error occured"
    //         console.log(err)
    //     })
    //     .finally(() => {
    //         loading.value = false
    //     })
}



function disconnectClicked() {
    disconnectWallet().then(() => {
        auth.value.walletAddress = '';
        auth.value.isWalletConnected = false;
        auth.value.hasClaimedPoints = false;
        auth.value.points = 0;
        auth.value.lastAnsweredQuestionID = null;
        auth.value.lastAnswerID = null;
        navigateTo('/')
    })
}


</script>


<style scoped>
.warning {
    color: rgb(222, 163, 1);
    border: none;
    border-radius: 3px;
    width: 100%;
    font-size: 15px;
    font-weight: 800;
    padding: 0px 10px;
    text-align: center;
}
</style>