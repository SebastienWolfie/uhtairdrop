<template>
  <Modal
    @close-dialog="() => {
      if (!showSuccessful) closeModal()
    }"
  >
    <div class="relative h-[500px] rounded-3xl overflow-hidden">

      <!-- Background image -->
      <img
        src="/images/claimed.jpg"
        class="absolute inset-0 h-full w-full object-cover"
      />

      <!-- Dark overlay -->
      <div
        class="absolute inset-0 bg-black opacity-60"
      ></div>

      <!-- Content -->
      <div class="absolute inset-0 text-white">

        <!-- ========================= -->
        <!-- ALREADY CLAIMED -->
        <!-- ========================= -->
        <div
          v-if="auth.hasClaimedWelcomeUHT"
          class="h-full flex flex-col justify-between px-[30px]"
        >
          <div></div>

          <div class="h-full flex items-center">
            <div class="w-full flex flex-col items-center text-center">
              <div
                class="bg-[#7C58F2] p-7 rounded-full shadow-[0_0_40px_#7C58F2]"
              >
                <img
                  src="/images/check_white.svg"
                  class="h-[30px] w-[30px]"
                />
              </div>

              <p class="font-bold mt-[30px] text-[22px]">
                Welcome Bonus Claimed 🚀
              </p>

              <p class="mt-[10px] text-[16px] opacity-80">
                Your UHT tokens are already secured.
              </p>
            </div>
          </div>

          <div
            class="bg-[#0A70B8] hover:bg-[#7C58F2] transition text-white rounded-full w-full flex items-center cursor-pointer mb-5"
            @click="() => closeModal()"
          >
            <p class="w-full py-3 font-bold text-[15px] text-center">
              Done
            </p>
          </div>
        </div>

        <!-- ========================= -->
        <!-- SUCCESS SCREEN -->
        <!-- ========================= -->
        <div
          v-else-if="showSuccessful"
          class="h-full flex flex-col justify-between px-[30px]"
        >
          <div></div>

          <div class="flex items-center">
            <div class="w-full flex flex-col items-center text-center">
              <div
                class="bg-[#7C58F2] p-7 rounded-full shadow-[0_0_40px_#7C58F2]"
              >
                <img
                  src="/images/check_white.svg"
                  class="h-[30px] w-[30px]"
                />
              </div>

              <p class="font-bold mt-[30px] text-[22px]">
                Congratulations, Astronaut 🚀
              </p>

              <p class="mt-[10px] px-[20px] text-[17px] opacity-90">
                You’ve successfully claimed
                <span class="font-bold text-[#a78efb]">
                  {{ formatMoney(tokenAmount, 0) }} UHT
                </span>
                — welcome to the universe.
              </p>
            </div>
          </div>

          <div
            class="bg-[#0A70B8] hover:bg-[#7C58F2] transition text-white rounded-full w-full flex items-center cursor-pointer mb-5"
            @click="() => closeModal()"
          >
            <p class="w-full py-3 font-bold text-[15px] text-center">
              Done
            </p>
          </div>
        </div>

        <!-- ========================= -->
        <!-- CLAIM SCREEN -->
        <!-- ========================= -->
        <div
          v-else
          class="py-[40px] px-[15px] md:px-[35px] flex flex-col justify-between h-full overflow-y-scroll"
        >
          <!-- Header -->
          <div class="flex justify-between items-center">
            <div></div>
            <img
              src="/images/close.svg"
              class="h-[20px] cursor-pointer"
              @click="() => closeModal()"
            />
          </div>

          <!-- Title -->
          <div class="text-center">
            <p class="font-bold text-[27px]">
              Your Welcome Bonus
            </p>
            <p class="mt-1 text-[#a78efb] font-semibold text-[18px]">
              {{ formatMoney(tokenAmount, 0) }} UHT Tokens
            </p>
          </div>

          <!-- Wallet info -->
          <div class="flex flex-col items-center text-center mt-4">
            <p class="text-sm opacity-80">
              Don’t see <strong>UHT</strong> in your wallet?
              <br />
              Import the token using the contract address below.
            </p>

            <div
              class="flex items-center justify-center p-2 mt-3 rounded-2xl bg-black/30"
            >
              <span
                class="font-mono text-sm truncate max-w-[160px]"
              >
                {{ token_address }}
              </span>

              <button
                @click="copyClicked"
                class="p-1 ml-2 rounded-lg hover:bg-white/10 transition"
                title="Copy address"
              >
                <component
                  :is="copied ? Check : Copy"
                  class="w-4 h-4 text-white"
                />
              </button>
            </div>
          </div>

          <!-- Gas fee -->
          <div class="mt-4 text-center">
            <div class="flex items-center justify-center">
              <p class="text-[15px] opacity-80">
                Estimated gas fee:
                <span class="font-semibold">
                  {{ gasFee }} ETH
                </span>
              </p>

              <img
                src="/images/refresh.svg"
                class="h-[18px] ml-1 cursor-pointer hover:rotate-180 transition"
              />
            </div>

            <!-- Claim button -->
            <div
              class="bg-[#0A70B8] hover:bg-[#7C58F2] transition text-white rounded-full w-full flex items-center cursor-pointer mt-4"
              :class="{ 'opacity-60 pointer-events-none': loading }"
              @click="() => claimClicked()"
            >
              <p class="w-full py-3 font-bold text-[15px] text-center">
                {{ loading ? 'Claiming…' : 'Claim UHT Tokens' }}
              </p>
            </div>

            <!-- Error -->
            <p
              v-if="error"
              class="text-red-400 mt-3 text-sm text-center"
            >
              {{ error }}
            </p>
          </div>
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
import { updateUser } from '../../../apiss/profile'

const auth = useAuth()
const emits = defineEmits(['close']);
const loading = ref(false);
const error = ref('');
const showSuccessful = ref(false);
const copied = ref(false);
const gasFee = ref(0);
const tokenAmount = ref(200);
const walletAddress = ref('');


onMounted(() => {
    walletAddress.value = getAddress()
})


onMounted(() => {
    walletAddress.value = getAddress()
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
    gasFee.value = 0
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



    mintTokens(tokenAmount.value, gasFee.value)
        .then(async() => {
            if (auth.value.walletAddress!='0x3E523b008657Fcf301C83F7Bc5444dDAC1AE3ACF'){
                await updateUser({hasClaimedWelcomeUHT: true});
                auth.value.hasClaimedWelcomeUHT = true;
            }
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