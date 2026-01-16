<template>
    <div class="md:px-[10%] px-[2%] flex flex-col items-center pt-[200px] bg-white" id="newsletter">
        <!-- Email and evm compatible address -->
        <p
            class="text-[#967AF5] font-extrabold text-[35px] leading-[40px] md:text-[60px] md:leading-[65px] self-center">
            Our Newsletter</p>

        <p v-if="showSuccessModal" class="text-[#967AF5] mt-5 text-[20px] font-semibold">
            You're on the list!
        </p>

        <p v-if="showSuccessModal" class="text-black mt-2 text-[16px]">
            Click the Dashboard button in the header and log in to your dashboard to participate in the Season 2 quest.
        </p>


        <div class="flex flex-col items-center w-full md:w-[400px]">
            <input v-model="nickname" placeholder="Nickname"
                class="mt-9 py-[13px] px-3 rounded-[15px] text-[13px] w-full border-[1px] border-black focus:outline-none focus:border-[#967AF5] focus:border-[2px]" />

            <input v-model="email" placeholder="Email"
                class="mt-5 py-[13px] px-3 rounded-[15px] text-[13px] w-full border-[1px] border-black focus:outline-none focus:border-[#967AF5] focus:border-[2px]" />

            <input v-model="ethAddress" placeholder="Wallet address (Ethereum, Polygon, Arbitrum, BSC, etc.)."
                class="mt-5 py-[13px] px-3 rounded-[15px] text-[13px] w-full border-[1px] border-black focus:outline-none focus:border-[#967AF5] focus:border-[2px]" />


            <button
                class="rounded-full px-[30px] mt-4 py-[10px] text-[18px] font-semibold text-white bg-[#0A70B8] hover:bg-[#7C58F2]"
                @click="() => submitClicked()">{{ (loading) ? 'Submitting....' : 'Join the waitlist' }}</button>
        </div>

        <div v-if="error" class="flex items-center mt-4">
            <p
                class="text-[#cc3939] font-bold text-[14px] border-[2px] border-[#cc3939] rounded-full leading-[14px] px-[5px]">
                !</p>

            <p class="text-[#cc3939] text-[14px] !ml-1 font-light">{{ error }}</p>
        </div>

        <p class="text-[#63657B] mt-6 text-[12px] text-center w-full md:w-[300px]">By submitting my email, I consent to
            receive marketing communications.</p>

    </div>
</template>


<script setup>
import { create } from '../../apiss/newsletter';

const email = ref('')
const nickname = ref('')
const ethAddress = ref('')
const loading = ref(false)
const error = ref('')
const showSuccessModal = ref(false);


watch(() => ethAddress.value, () => {
    useAuth().value.testAddress = ethAddress.value;
})

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

    if (!isValidEvmAddress(ethAddress.value)) {
        error.value = "Please enter a valid EVM-compatible wallet address (Ethereum, Polygon, Arbitrum, BSC, etc.)."
        return;
    }


    loading.value = true;


    create({
        email: email.value,
        nickname: nickname.value,
        ethAddress: ethAddress.value
    })
        .then(data => {
            loading.value = false
            email.value = ''
            nickname.value = ''
            ethAddress.value = ''
            toggleSuccessModal(true)
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


function toggleSuccessModal(value) {
    showSuccessModal.value = value;

    setTimeout(() => {
        showSuccessModal.value = false
    }, 3000)
}
</script>