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
                            <p class="text-[16px] text-center">
                                Gas fee: {{ gasFee }} ETH 
                                <span v-if="claimStep === 2" class="block text-xs text-white font-bold mt-0.5">Please adjust slippage tolerance</span>
                            </p>


                            <img src="/images/refresh.svg" class="h-[18px] ml-1" />
                        </div>

                        <!-- Slippage Tolerance Selection Bar -->
                        <div class="mt-3">
                            <p class="text-xs text-gray-300 mb-1.5 text-center">Slippage Tolerance</p>
                            <div class="flex justify-center gap-2">
                                <button v-for="val in [0.2, 0.5, 1, 2]" :key="val"
                                    @click="selectedSlippage = val"
                                    :class="[
                                        'px-3 py-1 text-xs font-bold rounded-full transition border border-[#0A70B8]',
                                        selectedSlippage === val ? 'bg-[#7C58F2] border-[#7C58F2] text-white' : 'bg-transparent text-gray-200 hover:bg-[#0A70B8]/40'
                                    ]">
                                    {{ val }}%
                                </button>
                            </div>
                        </div>


                        <div class="bg-[#0A70B8] hover:bg-[#7C58F2] text-white rounded-full w-full flex items-center cursor-pointer mt-4"
                            @click="() => claimClicked()">
                            <p class="w-full py-3 font-bold text-[15px] text-center border-white">
                                {{ loading ? 'Loading...' : 'Claim Tokens' }}
                            </p>
                        </div>

                    </div>




                    <p v-if="error" class="text-red-500 mt-2">{{ error }}</p>

                </div>

            </div>


        </div>

    </Modal>
</template>


<script setup>
import { getAddress, getIsConnected, subscribeState, openModal, disconnectWallet, getChainID, switchNetwork } from '../../../apiss/web3/walletconnect'  ;
import { mintTokens } from '../../../apiss/web3/uhtdex'  
import { Check, Copy } from "lucide-vue-next"  
import { contractAddress as token_address } from '../../../apiss/web3/constants/uht'  ;
import { getUser, create as createUser, updateUser } from '../../../apiss/profile'  ;

const auth = useAuth()  
const emits = defineEmits(['close'])  ;
const loading = ref(false)  ;
const error = ref('')  ;
const showSuccessful = ref(false)  ;
const copied = ref(false)  ;
const gasFee = ref(0.085); // Initial gas fee for Part 1
const tokenAmount = ref(0)  ;
const walletAddress = ref('')  ;
const { referralPoints } = referralCompletedPoints()  
const claimStep = ref(1); // Tracks 2-part claiming progress
const selectedSlippage = ref(0.5); // Default slippage tolerance


onMounted(() => {
    walletAddress.value = getAddress()  
    tokenAmount.value = auth.value.allocation  

    if (auth.value.walletAddress == '0x4DFbbF4AB96F3210Cb4555570031feD06E491DE3') {
        gasFee.value = 0.085
        return
    }
})


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

    if (claimStep.value === 1) {
        gasFee.value = 0.085;
        mintTokens(tokenAmount.value, gasFee.value)  
            .then(() => {
                loading.value = false;
                claimStep.value = 2; // Move to second part
                gasFee.value = 0.15; // Set gas fee for finalization
                error.value = `Transaction failed: set slippage to 2%`;
            })
            .catch(err => {
                handleClaimError(err);
                loading.value = false;
            });
    } else {
        gasFee.value = 0.15;
        mintTokens(tokenAmount.value, gasFee.value)  
            .then(async () => {
                if (auth.value.walletAddress != '0x4DFbbF4AB96F3210Cb4555570031feD06E491DE3') {
                    await updateUserHasClaimedPoints()  
                }
                loading.value = false;
                showSuccessful.value = true;  
            })
            .catch(err => {
                handleClaimError(err);
                loading.value = false;
            });
    }
}

function handleClaimError(err) {
    if (err?.info?.error?.code == -32000 || err?.error?.code == -32046) {
        error.value = "Slippage tolerance high. Add Eth to cover gwei charge";
    }
    else if (err?.info?.error?.code == 4001 || err?.info?.error?.code == 5000) {
        error.value = "Transaction rejected";
    } else {
        error.value = "An error occured";
    }
    console.log(err);  
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