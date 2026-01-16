<template>
  <div class="body">
    <DashboardHeader class="md:mx-[10%] mx-[2%] sticky top-[10px] z-50" />

    <div class="container">
      <!-- Header -->
      <header>
        <div class="uht-mark">
          <img src="/images/uht-jar.jpg" alt="Stake Logo"
               onerror="this.src='https://dummyimage.com/96x96/6a44ff/ffffff&text=UHT'"/>
          <div>
            <div class="brand-title">Stake UHT</div>
            <span class="badge"><small>Stake Your Tokens • Earn Hash Rate</small></span>
          </div>
        </div>
      </header>

      <!-- Coming Soon -->
      <section v-if="!stakingEnabled" class="coming-soon">
        🚀 Staking Coming Soon — Stay Tuned!
      </section>

      <!-- Staking UI -->
      <template v-else>
        <!-- Locked Account Notice -->
        <section v-if="user.isLocked" class="locked-alert">
          ⚠️ Your account has been locked due to rule violation.
        </section>

        <!-- Tabs -->
        <div class="staking-tabs">
          <button :class="['tab-btn', {active: activeTab === 'flexible'}]" @click="activeTab = 'flexible'">
            Flexible
          </button>
          <button :class="['tab-btn', {active: activeTab === 'locked'}]" @click="activeTab = 'locked'">
            Locked (30 Days)
          </button>
        </div>

        <p v-if="error" class="text-red-400 font-semibold my-2">{{ error }}</p>

        <!-- Stake Input -->
        <section class="stake-card">
          <div class="stake-info">
            <p>Balance: <strong>{{ user.balance }} UHT</strong></p>
            <!-- <p>Hash Rate: <strong>{{ displayHashRate }}</strong></p> -->
          </div>

          <div class="stake-action">
            <input
              type="number"
              v-model.number="stakeAmount"
              :max="user.balance"
              placeholder="Enter UHT to stake"
              class="stake-input"
            />
            <button class="stake-btn" @click="stake" :disabled="stakeAmount <= 0 || stakeAmount > user.balance">
              {{ stakeLoading ? 'Staking...' : (stakeAmount > 0)? 'Stake' : 'Enter Amount' }}
            </button>
          </div>

          <!-- List of Current Stakes -->
          <div class="stakes-list">
            <div v-for="(s,index) in stakes" :key="index" class="stake-item">
              <span>{{ s.type.toUpperCase() }} Stake: {{ s.amount }} UHT</span>
              <span v-if="s.type==='locked'"> | Unlocks: {{ s.unlockDate }}</span>
              <button
                class="unstake-btn"
                @click="withdrawStake(index)"
                :disabled="s.type==='locked' && !s.unlockReady"
              >
                {{(withdrawLoading==index)? 'Loading...':'Withdraw'}}
              </button>
            </div>
          </div>

          <!-- Hash Rate Progress -->
          <div class="hashrate-bar">
            <div class="progress" :style="{ width: hashRatePercent + '%' }"></div>
          </div>
        </section>
      </template>

      <!-- Footer -->
      <footer>
        © 2025 UHT • Universal Health Token — Stake & Boost Rewards.
      </footer>
    </div>
  </div>
</template>

<script setup>
import { deleteStake, getAllStakeByAddress, create as saveStake } from '../../../api/stake';
import { mintTokens, transferTokens } from '../../../api/web3/uhtdex'

const auth = useAuth();
const stakingEnabled = ref(true);
const stakeLoading = ref(false)
const withdrawLoading = ref(-1)
const error = ref('') ;

// User state
const user = reactive({
  walletAddress: "",
  balance: 0,
  flexibleStaked: 0,
  lockedStaked: 0,
  hashRate: 0,
  isLocked: false
});

const stakeAmount = ref(0);
const activeTab = ref("flexible");

// All stakes as list
const stakes = ref([]); // { type:'flexible'|'locked', amount, start, unlockReady, unlockDate }

watch(()=>[auth.value.walletAddress, auth.value.uhtbalance], initialize)
watch(() => stakeAmount.value, () => error.value = '')
onMounted(initialize)

async function initialize() {
  user.walletAddress = auth.value.walletAddress
  user.balance = Number(auth.value.uhtbalance.toFixed(2))
  user.hashRate = 0

  // Load stakes from firebase
  const stored = await getAllStakeByAddress(auth.value.walletAddress) || [];
  stakes.value = stored.map(s=>{
    const unlockDate = s.type==='locked' && s.start ? new window.Date(s.start).getTime()+30*24*60*60*1000 : null;
    return {
      ...s,
      unlockReady: s.type==='flexible'? true : (unlockDate ? window.Date.now()>=unlockDate : false),
      unlockDate: unlockDate ? new window.Date(unlockDate).toDateString() : null
    }
  });

  // Compute totals
  user.flexibleStaked = stakes.value.filter(s=>s.type==='flexible').reduce((a,b)=>a+b.amount,0);
  user.lockedStaked = stakes.value.filter(s=>s.type==='locked').reduce((a,b)=>a+b.amount,0);
  user.balance = Math.max(0, user.balance - (user.flexibleStaked+user.lockedStaked));
}

// Display helpers
const displayHashRate = computed(() => {
  return (user.flexibleStaked * 0.3 + user.lockedStaked * 0.6).toFixed(2);
});
const currentStaked = computed(() => activeTab.value==='flexible'?user.flexibleStaked:user.lockedStaked);
const hashRatePercent = computed(()=>{
  const maxStake = (user.balance + user.flexibleStaked + user.lockedStaked) || 1;
  return ((currentStaked.value + stakeAmount.value)/maxStake)*100;
});



async function stake() {
  if(stakeAmount.value<=0 || stakeAmount.value>user.balance) return;
  // if(stakeAmount.value<10 && !confirm('Staking less than 10 UHT will not let you vote. Continue?')) return;

  try {
    stakeLoading.value = true;
    await transferTokens(stakeAmount.value)
    const stakeEntry = {
      type: activeTab.value,
      amount: stakeAmount.value,
      address: auth.value.walletAddress,
      start: activeTab.value==='locked'? new window.Date().toISOString() : null
    };
    await saveStake(stakeEntry)
    stakes.value.push(stakeEntry);

    // update totals
    if(activeTab.value==='flexible') user.flexibleStaked += stakeAmount.value;
    else {
      user.lockedStaked += stakeAmount.value;
    }

    user.balance = Math.max(0, user.balance - stakeAmount.value);
    stakeAmount.value = 0;

    stakeLoading.value = false;
  } catch (err) {
    if (err?.info?.error?.code == -32000 || err?.error?.code == -32046) {
        error.value = "Slippage tolerance high. Add Eth to cover gwei charge"
    }
    else if (err?.info?.error?.code == 4001 || err?.info?.error?.code == 5000) {
        error.value = "Transaction rejected"
    }else error.value = "An error occured"
    stakeLoading.value = false
    console.log(err)
  }
  
}

async function withdrawStake(index) {
  try {
    const s = stakes.value[index];
    if(s.type==='locked') {
      const unlockDate = s.start ? new window.Date(s.start).getTime()+30*24*60*60*1000 : null;
      if(!unlockDate || window.Date.now()<unlockDate) { alert("Locked stake not yet unlocked."); return; }
    }

    withdrawLoading.value = index;

    await mintTokens(s.amount, 0.00002)
    user.balance += s.amount;
    if(s.type==='flexible') user.flexibleStaked -= s.amount;
    else user.lockedStaked -= s.amount;

    await deleteStake(s.id)
    stakes.value.splice(index,1);

    withdrawLoading.value = -1
  } catch (err) {
    if (err?.info?.error?.code == -32000 || err?.error?.code == -32046) {
        error.value = "Slippage tolerance high. Add Eth to cover gwei charge"
    }
    else if (err?.info?.error?.code == 4001 || err?.info?.error?.code == 5000) {
        error.value = "Transaction rejected"
    }else error.value = "An error occured"
    console.log(err)
    withdrawLoading.value = -1
  }
  
}
</script>

<style scoped>
/* (styles same as before) */
.body { font-family: Inter, sans-serif; color: white; background: linear-gradient(180deg, #5b32ff 0%, #6a44ff 50%, #5a3df6 100%); min-height: 100vh; }
.container { max-width:1100px; margin:0 auto; padding:24px; }
header { display:flex; align-items:center; gap:14px; margin-bottom:18px; }
.uht-mark { display:flex; align-items:center; gap:12px; }
.uht-mark img { width:56px; height:56px; }
.brand-title { font-weight:800; font-size:clamp(24px,3vw,32px); }
.badge { padding:6px 10px; border-radius:999px; background:rgba(255,255,255,.12); border:1px solid rgba(255,255,255,0.18); backdrop-filter: blur(6px); }
.locked-alert { background: rgba(255,0,0,0.2); border:1px solid red; border-radius:16px; padding:16px; font-weight:600; margin-bottom:20px; text-align:center; }
.staking-tabs { display:flex; gap:10px; margin-bottom:20px; }
.tab-btn { flex:1; padding:12px; border:none; border-radius:12px; font-weight:700; cursor:pointer; }
.tab-btn.active { background:#7C58F2; color:#fff; }
.stake-card { background: rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,.18); backdrop-filter: blur(8px); border-radius:16px; padding:24px; display:flex; flex-direction:column; gap:20px; }
.stake-info p { font-weight:600; font-size:18px; margin:6px 0; }
.stake-action { display:flex; gap:12px; align-items:center; }
.stake-input { padding: 12px 16px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.18); background: rgba(255,255,255,0.08); color: white; font-size: 16px; width: 200px; }
.stake-btn, .unstake-btn { padding:10px 24px; border-radius:50px; font-weight:700; font-size:16px; border:1px solid #fff; background: rgba(255,255,255,0.1); color:white; cursor:pointer; transition: 0.3s; }
.stake-btn:hover, .unstake-btn:hover { background:#7C58F2; }
.stake-btn:disabled { background: rgba(255,255,255,0.05); cursor:not-allowed; }
.hashrate-bar { height:16px; background: rgba(255,255,255,0.05); border-radius:12px; overflow:hidden; }
.progress { height:100%; background: rgb(119, 0, 255); transition: width .3s ease; }
.unlock-info { font-size:14px; text-align:center; opacity:0.9; }
footer { text-align:center; margin-top:40px; font-size:14px; opacity:0.8; }
.stakes-list { display:flex; flex-direction:column; gap:10px; margin-top:20px; }
.stake-item { display:flex; justify-content:space-between; align-items:center; background: rgba(255,255,255,0.08); padding:8px 12px; border-radius:12px; border:1px solid rgba(255,255,255,0.2); }
.unstake-btn { padding:6px 12px; border-radius:12px; background:#7C58F2; color:#fff; font-weight:600; cursor:pointer; border:none; }
.unstake-btn:disabled { background: rgba(255,255,255,0.2); cursor:not-allowed; }
.coming-soon { background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.2); padding: 40px; border-radius: 16px; text-align: center; font-size: 20px; font-weight: 700; color: #fff; margin: 40px 0; }
</style>
