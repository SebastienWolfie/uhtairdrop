<template>
  <Modal @close-dialog="closeModal">
    <div class="relative h-[420px] rounded-3xl overflow-hidden">

      <!-- Background -->
      <img
        src="/images/claimed.jpg"
        class="absolute inset-0 h-full w-full object-cover"
      />
      <div class="absolute inset-0 bg-black/70"></div>

      <!-- Content -->
      <div class="relative h-full text-white flex flex-col justify-between px-6 py-8">

        <!-- CLOSE -->
        <div class="flex justify-end">
          <img
            src="/images/close.svg"
            class="h-[18px] cursor-pointer opacity-80 hover:opacity-100"
            @click="closeModal"
          />
        </div>

        <!-- SUCCESS STATE -->
        <div v-if="showSuccessful" class="flex flex-col items-center justify-center flex-1 text-center">

          <div class="bg-[#7C58F2] p-6 rounded-full mb-6">
            <img src="/images/check_white.svg" class="h-7 w-7" />
          </div>

          <p class="font-bold text-2xl mb-2">Welcome aboard 🚀</p>
          <p class="text-lg text-gray-200">
            You’ve received <span class="text-[#A78BFA] font-bold">200 Points</span>
          </p>

        </div>

        <!-- DEFAULT STATE -->
        <div v-else class="flex flex-col items-center justify-center flex-1 text-center">

          <div class="bg-[#7C58F2] text-[30px] p-3 px-5 rounded-full mb-6">
            🎁
          </div>

          <p class="font-bold text-3xl mb-3">
            Welcome Bonus
          </p>

          <p class="text-gray-300 text-[17px] leading-relaxed max-w-[260px]">
            As a new astronaut, you get
            <span class="text-white font-semibold">200 free points</span>
            to start exploring the platform.
          </p>

        </div>

        <!-- ACTION BUTTON -->
        <div>
          <button
            class="w-full rounded-full py-3 font-bold text-[15px]
                   bg-[#0A70B8] hover:bg-[#7C58F2] transition"
            :disabled="loading"
            @click="claimWelcomePoints"
          >
            {{ loading ? 'Claiming...' : showSuccessful ? 'Done' : 'Claim 200 Points' }}
          </button>
        </div>

      </div>
    </div>


    <DashboardPointsModalLoadingModal v-if="showLoading" 
            @close="() => showLoading = false"
            @successful="() => {
                showLoading = false
                loading = false
                showSuccessful = true
        }" />

  </Modal>
</template>



<script setup>
import { getAddress, getIsConnected, subscribeState, openModal, disconnectWallet, getChainID, switchNetwork } from '../../../apiss/web3/walletconnect';
import { contractAddress as token_address } from '../../../apiss/web3/constants/uht';
import { addUserPoints } from '../../../apiss/profile'

const auth = useAuth()
const emits = defineEmits(['close']);
const loading = ref(false);
const error = ref('');
const showSuccessful = ref(false);
const walletAddress = ref('');
const showLoading = ref(false)


onMounted(() => {
    walletAddress.value = auth.value.walletAddress
})




function closeModal() {
    if (loading.value) return;
    emits('close');
}



async function claimWelcomePoints() {
    if (showSuccessful.value) {
        emits('close');
        return
    }
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

    showLoading.value = true
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