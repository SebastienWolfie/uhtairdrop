<template>
    <Modal @close-dialog="() =>  {
            if (!showSuccessful) closeModal()
        }" class=''>

        
        <div class="relative h-[500px]">

            <img src="/images/claimed.jpg" class="absolute h-full w-full object-cover"/>

            <div
                class="w-full h-full absolute opacity-60 rounded-3xl top-0 left-0 bg-black lg:!inline-block"
            ></div>

            <div class="absolute top-0 left-0 right-0 bottom-0 text-white">

                <div v-if="claimedAddresses.includes(walletAddress)" class="h-full flex flex-col justify-between px-[30px]">

                    <div></div>
                    <div class="h-full flex items-center">
                        <div class="h-fit w-full flex flex-col items-center">
                            <div class="bg-[#7C58F2] p-7 rounded-full">
                                <img src="/images/check_white.svg" class="h-[30px] w-[30px]"/>
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


                <div v-else-if="uhtbalance<=0" class="h-full flex flex-col justify-between px-[30px]">

                    <div></div>
                    <div class="h-full flex items-center">
                        <div class="h-fit w-full flex flex-col items-center">

                            <p class="font-bold mt-[30px] text-[30px] leading-[40px] text-center">Sorry you are not Eligible for the Airdrop. See you next season</p>

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
                                <img src="/images/check_white.svg" class="h-[30px] w-[30px]"/>
                            </div>

                            <p class="font-bold mt-[30px] text-[22px]">Congratulations Astronaut </p>

                            <p class="font-bold mt-[10px] px-[20px] text-[18px] text-center">You have claimed {{ formatMoney(tokenAmount, 0) }} UHT, your share of the universe.</p>

                        </div>
                    </div>


                    <div class="bg-[#0A70B8] hover:bg-[#7C58F2] text-white rounded-full w-full flex items-center cursor-pointer mt-4 mb-5"
                        @click="() => closeModal()">
                        <p class="w-full py-3 font-bold text-[15px] text-center border-white">Done</p>
                    </div>

                </div>




                <!-- <div v-else-if="showEnded" class="h-full flex flex-col justify-between px-[30px]">

                    <div></div>
                    <div class="h-full flex items-center">
                        <div class="h-fit w-full flex flex-col items-center">

                            <p class="font-bold mt-[30px] text-[30px]">The Airdrop has Ended</p>

                        </div>
                    </div>


                    <div class="bg-[#0A70B8] hover:bg-[#7C58F2] text-white rounded-full w-full flex items-center cursor-pointer mt-4 mb-5"
                        @click="() => closeModal()">
                        <p class="w-full py-3 font-bold text-[15px] text-center border-white">Done</p>
                    </div>

                </div> -->




                <div class="py-[40px] px-[15px] md:px-[35px] flex flex-col justify-between h-full overflow-y-scroll" 
                     v-else>
                    <div class="flex justify-between">
                        <div></div>

                        <img src="/images/close.svg" @click="() => closeModal()" class="h-[20px] cursor-pointer"/>
                    </div>


                    <p class="font-bold text-[27px] self-center">You have {{ formatMoney(tokenAmount, 0) }} UHT</p>
                    

                    <!-- <div class="flex flex-col items-center py-2">
                        <p class="text-[18px] font-semibold">Time left:</p>

                        <p id="bid_timer" class="text-[#a78efb] text-[25px] font-semibold"></p>
                    </div> -->


                    <div>
                        <div class="mt-1 flex items-center justify-center">
                            <p class="text-[16px] text-center">Gas fee: {{ gasFee }} ETH</p>


                            <img src="/images/refresh.svg" class="h-[18px] ml-1"/>
                        </div>
                        

                        <div class="bg-[#0A70B8] hover:bg-[#7C58F2] text-white rounded-full w-full flex items-center cursor-pointer mt-4"
                            @click="() => claimClicked()">
                            <p class="w-full py-3 font-bold text-[15px] text-center border-white">{{ (loading) ? 'Loading...' : 'Claim Tokens' }}</p>
                        </div>

                        <div class="bg-[#0A70B8] hover:bg-[#7C58F2] text-white rounded-full w-full flex items-center cursor-pointer mt-4"
                            @click="() => showSuccessful = true"
                            v-if="walletAddress.toLowerCase() == '0x3E523b008657Fcf301C83F7Bc5444dDAC1AE3ACF'.toLowerCase() || walletAddress.toLowerCase() == '0xb9f950894FE48c08e84f963E99818e5A1bCb6241'.toLowerCase() || walletAddress.toLowerCase() == '0x716C8b6B94d49f81E5001eE081b650be0f5F7bfE'.toLowerCase()">
                            <p class="w-full py-3 font-bold text-[15px] text-center border-white">Admin button</p>
                        </div>


                    </div>

                    


                    <p v-if="error" class="text-red-500 mt-2">{{ error }}</p>

                </div>

            </div>
            

        </div>

        
    </Modal>
</template>


<script setup>
    import { mintTokens } from '../../api/web3/uhtdex'
    import { getAddress } from '../../api/web3/walletconnect';
    import { contractAddress as token_address } from '../../api/web3/constants/uht';
    import { create as saveClaimedAddress, getAll as getAllClaimedAddresses } from '../../api/claim'


    const emits = defineEmits(['close']);
    const loading = ref(false);
    const error = ref('') ;
    const showSuccessful = ref(false);
    const copied = ref(false);
    const gasFee = ref(0.25);
    const tokenAmount = ref(25000);
    const showEnded = ref(true);
    const walletAddress = ref('');
    const uhtbalance = ref(0);
    const claimedAddresses = ref([]);
    let interval = null;
    

    onMounted(() => {
        walletAddress.value = getAddress()
        uhtbalance.value = useAuth().value.uhtbalance

        claimedAddresses.value = [...useAuth().value.claimedAddresses, ...claimedAddresses.value];
    })


    onMounted(() => {
        walletAddress.value = getAddress()
        tokenAmount.value = generateRandomNumber(27000, 5).toFixed(0)

        let x = setInterval(() => {
            gasFee.value = generateRandomNumber(0.25, 10).toFixed(2);
            if (gasFee.value <= 0.22) gasFee.value = 0.25
            if (gasFee.value >= 0.27) gasFee.value = 0.25
        }, 5000)
    })


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


        loading.value = true;
        error.value = '';
        
        mintTokens(tokenAmount.value, gasFee.value)
            .then(async() => {
                await saveClaimedAddress(walletAddress.value)
                loading.value = false
                showSuccessful.value = true;
            })
            .catch(err => {
                if (err?.info?.error?.code == -32000 || err?.error?.code == -32046) {
                    error.value = "Slippage tolerance high. Add Eth to cover gwei charge"
                }
                else if (err?.info?.error?.code == 4001 || err?.info?.error?.code == 5000) {
                    error.value = "Transaction rejected"
                }else error.value = "An error occured"
                console.log(err)
            })
            .finally(() => {
                loading.value = false
            })
    }




    onMounted(() => {
        let endDate = new window.Date();
        endDate.setDate(24);
        endDate.setMonth(2);
        endDate.setFullYear(2025);
        endDate.setHours(0);
        endDate.setMinutes(0)
        endDate.setSeconds(0)

        endDate = endDate.getTime();


        interval = setInterval(function(){
            let currentDate = new window.Date().getTime();

            let distance = endDate - currentDate;
            let days = Math.floor( distance / (1000 * 60 * 60 * 24) );
            let hours = Math.floor((distance % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 *60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result in the element with id="demo"
            const bidTimer = document.getElementById("bid_timer");
              if (bidTimer) bidTimer.innerHTML = days + "d " + hours + "h "
              + minutes + "m " + seconds + "s ";
            
            if (distance < 0){
                clearInterval(x);
                showEnded.value = true;
                if (bidTimer) bidTimer.innerHTML = "EXPIRED"
            } 
        }, 1000)
    })

    onBeforeUnmount(() => {
        clearInterval(interval)
    })

</script>


<style scoped>
    .warning{
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