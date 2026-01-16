<template>
    <Modal>


        <div class="relative h-[500px]">

            <!-- <img src="/images/claimed.jpg" class="absolute h-full w-full object-cover"/> -->

            <div class="w-full h-full absolute opacity-60 rounded-3xl top-0 left-0 lg:!inline-block"></div>

            <div class="absolute top-0 left-0 right-0 bottom-0 ">


                <div class="py-[40px] px-[15px] md:px-[35px] flex flex-col justify-between h-full overflow-y-scroll">
                    <!-- <div class="flex justify-between">
                        <div></div>

                        <img src="/images/close_black.svg" @click="() => closeModal()" class="h-[20px] cursor-pointer"/>
                    </div> -->

                    <p class="text-[#967AF5] font-extrabold text-[35px] leading-[40px] self-center">Complete Your
                        Profile</p>

                    <p class="text-sm text-center text-gray-600 mb-4">
                        Please update your profile with a username and email to verify you are human.
                        This helps us prevent bots as part of our KYC program.
                    </p>

                    <div class="flex flex-col items-center w-full text-black">
                        <input v-model="nickname" placeholder="Nickname"
                            class="py-[13px] px-3 rounded-[15px] text-[13px] w-full border-[1px] border-black focus:outline-none focus:border-[#967AF5] focus:border-[2px]" />

                        <input v-model="email" placeholder="Email"
                            class="mt-5 py-[13px] px-3 rounded-[15px] text-[13px] w-full border-[1px] border-black focus:outline-none focus:border-[#967AF5] focus:border-[2px]" />

                        <input v-model="auth.walletAddress"
                            placeholder="Wallet address (Ethereum, Polygon, Arbitrum, BSC, etc.)." disabled
                            class="mt-5 py-[13px] px-3 rounded-[15px] text-[13px] w-full border-[1px] border-black focus:outline-none focus:border-[#967AF5] focus:border-[2px]" />


                    </div>


                    <button
                        class="rounded-full px-[30px] mt-4 py-[10px] text-[18px] font-semibold text-white bg-[#0A70B8] hover:bg-[#7C58F2]"
                        @click="() => submitClicked()">{{ (loading) ? 'Updating....' : 'Update Profile' }}</button>


                    <p v-if="error" class="text-red-500 mt-2">{{ error }}</p>

                </div>

            </div>


        </div>


    </Modal>
</template>


<script setup>
import { updateUser } from '../../../apiss/profile'
const auth = useAuth()
const email = ref('')
const nickname = ref('')
const loading = ref(false)
const error = ref('')
const showSuccessModal = ref(false);


function submitClicked() {
    if (loading.value) return;

    error.value = '';

    if (!nickname.value) {
        error.value = "Please enter your nickname";
        return;
    }

    if (!email.value) {
        error.value = "Please enter your Email";
        return;
    }
    if (!isValidEmail(email.value)) {
        error.value = "Please enter a valid email address.";
        return;
    }

    loading.value = true;


    updateUser({
        email: email.value,
        nickname: nickname.value
    })
        .then(data => {
            loading.value = false
            email.value = ''
            nickname.value = ''
            error.value = false
        })
        .catch(err => {
            console.log(err)
            switch (err.code) {
                case 'auth/network-request-failed':
                    error.value = "There seems to be a network error"
                    break

                default:
                    error.value = "An error occured"
            }
            loading.value = false;
        })
}


const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

const isValidEvmAddress = (address) => {
    const regex = /^0x[a-fA-F0-9]{40}$/;
    return regex.test(address);
};

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