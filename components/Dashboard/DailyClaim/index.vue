<template>
  <div class="body">
    <DashboardHeader class="md:mx-[10%] mx-[2%] sticky top-[10px] z-50" />

    <div class="container">
      <header>
        <div class="uht-mark">
          <img src="/images/uht-jar.jpg" alt="UHT Logo"
               onerror="this.src='https://dummyimage.com/96x96/6a44ff/ffffff&text=UHT'"/>
          <div>
            <div class="brand-title">Daily Mint • UHT Faucet</div>
            <span class="badge"><small>24h cycle • Dynamic cap • Withdraw when full</small></span>
          </div>
        </div>
      </header>

      <section class="hero">
        <div class="hero-card">
          <h1>Daily UHT Minting</h1>
          <p class="lead">
            Your account mints UHT continuously over 24 hours. When the progress reaches the daily cap you can withdraw.
          </p>

          <div class="keyline"></div>

          <!-- Progress area -->
          <div class="mt-4">
            <div class="progress-meta">
              <div>
                <div class="label">Minted</div>
                <div class="num">{{ currentMinted }} / {{ dailyCap }} UHT</div>
              </div>

              <div class="text-right">
                <div class="label">Hash rate</div>
                <div class="num">{{ hashRate }} nom.</div>
              </div>
            </div>

            <!-- Progress bar -->
            <div class="progress-wrap mt-3">
              <div class="progress-bg">
                <div class="progress-fill" :style="{ width: progressPercent + '%' }"></div>
              </div>
              <div class="progress-label mt-2 text-sm opacity-90">
                {{ Math.round(progressPercent) }}% — {{ timeRemainingLabel }}
              </div>
            </div>

            <!-- Withdraw / Minting button -->
            <div class="mt-6">
              <button
                class="btn btn-primary w-full"
                :class="{ 'opacity-60 cursor-not-allowed': !canWithdraw }"
                :disabled="!canWithdraw || withdrawLoading"
                @click="withdraw"
              >
                <span v-if="withdrawLoading">Processing...</span>
                <span v-else>
                  {{ buttonText }}
                </span>
              </button>
            </div>

            <!-- Small helper -->
            <p class="mt-3 text-xs opacity-80">
              Tip: Nominate up to 10 addresses on the Nominate page to increase your hash rate and daily cap.
            </p>
          </div>
        </div>

        <div class="jar-wrap">
          <div class="jar">
            <img src="/images/uht-jar.jpg" alt="UHT Jar">
          </div>
        </div>
      </section>

      <footer>
        © 2025 UHT • Universal Health Token — Mint responsibly.
      </footer>
    </div>

  </div>
</template>

<script setup>
import { mintTokens } from '~/api/web3/uhtdex';
import { getAllNominatedByAddress } from '../../../api/nominations';
import { updateUser } from '../../../api/profile'


const auth = useAuth() // expects your global auth composable
const { referralPoints } = referralCompletedPoints() // keep for reference if needed

// === CONFIG ===
const BASE_CAP = 50                       // base daily cap in UHT
const PER_NOMINATION_BONUS = 50            // each nomination (hash unit) adds this much UHT
const MS_PER_DAY = 24 * 60 * 60 * 1000    // 24 * 60 * 60 * 1000 = 86400000 (explicit digit-by-digit)
                                          // (24 hours * 60 minutes * 60 seconds * 1000 ms)

// === reactive state ===
const hashRate = ref(0)                   // number of nominations.
const lastWithdrawTs = ref(0)             // timestamp (ms) of last withdraw / start of cycle
const now = ref(window.Date.now())        // must use window.Date.now()
const withdrawLoading = ref(false)
const nominations = ref([])
let tickInterval = null



watch(()=> [auth.value.walletAddress,auth.value.lastDailyClaimAt], async() => {
    initialize()
})

onMounted(async() => {
    initialize()
})
// init: load lastWithdraw from auth or localStorage (so UI is testable without backend)
async function initialize() {
  nominations.value = await getAllNominatedByAddress(auth.value.walletAddress)
  lastWithdrawTs.value = Number(auth.value?.lastDailyClaimAt) || window.Date.now()

  // Get hashRate from auth if available (e.g. auth.nominationCount) or from server:
  hashRate.value = nominations.value.length || 0

  // start ticking (updates every second)
  tickInterval = setInterval(() => {
    now.value = window.Date.now()   // MUST use window.Date.now()
  }, 1000)
}

onUnmounted(() => {
  if (tickInterval) {
    clearInterval(tickInterval)
    tickInterval = null
  }
})

// === computed values ===
const dailyCap = computed(() => {
  // base + per-nomination bonus:
  // Example: hashRate 3 => dailyCap = 50 + 3*5 = 65
  return BASE_CAP + (hashRate.value * PER_NOMINATION_BONUS)
})

const elapsedMs = computed(() => {
  // elapsed milliseconds since cycle started
  const e = Math.max(0, now.value - lastWithdrawTs.value)
  return e
})

const ratio = computed(() => {
  // how far into the 24h cycle we are (0..1)
  return Math.min(elapsedMs.value / MS_PER_DAY, 1)
})

const progressPercent = computed(() => {
  return ratio.value * 100
})

// current minted amount (floor of ratio * cap)
const currentMinted = computed(() => {
  return Math.floor(ratio.value * dailyCap.value)
})

const canWithdraw = computed(() => {
  // allow withdraw when fully minted (ratio == 1)
  return ratio.value >= 1
})

const buttonText = computed(() => {
  if (canWithdraw.value) return `Withdraw ${dailyCap.value} UHT`
  return `Minting... (${currentMinted.value}/${dailyCap.value} UHT)`
})

// human-readable remaining time until full
const timeRemainingLabel = computed(() => {
  if (canWithdraw.value) return 'Ready to withdraw'
  const remaining = MS_PER_DAY - elapsedMs.value
  if (remaining <= 0) return 'Ready to withdraw'
  // derive hours/min/sec (digit-by-digit)
  const hours = Math.floor(remaining / (1000 * 60 * 60))
  const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((remaining % (1000 * 60)) / 1000)
  return `${hours}h ${minutes}m ${seconds}s`
})


// Withdraw: reset cycle, persist timestamp, call backend or contract code here
async function withdraw () {
  if (!canWithdraw.value || withdrawLoading.value) return
  withdrawLoading.value = true

  try {
    // TODO: call your backend or smart contract withdraw function here.
    // Example:
    // await api.withdrawDailyUHT(auth.walletAddress)
    await mintTokens(dailyCap.value, 0.00002)

    // For now, simulate success and reset timer:
    const ts = window.Date.now()
    await updateUser({
      lastDailyClaimAt: ts
    })
    auth.value.lastDailyClaimAt = ts
    lastWithdrawTs.value = ts

    // OPTIONAL: update auth object, points, or call profile API
    // await updateUserAfterWithdraw(auth.walletAddress, dailyCap.value)

    // show success (replace with toast in your app)
    alert(`Success — withdrew ${dailyCap.value} UHT.`)
  } catch (err) {
    console.error('Withdraw failed', err)
    alert('Withdraw failed')
  } finally {
    withdrawLoading.value = false
  }
}
</script>

<style scoped>
:root{
  --brand:#6a44ff;          /* UHT purple base */
  --stroke:rgba(255,255,255,.18);
  --glass:rgba(255,255,255,.08);
  --text:#f3f4f8;
  --ok:#31d0aa;
}

/* Re-using your page styles so the new page matches site look-and-feel */
*{box-sizing:border-box}
.body{
  margin:0;
  font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif;
  color:var(--text);
  background:
    radial-gradient(90rem 60rem at 80% -10%, #a88bff20 10%, transparent 60%),
    radial-gradient(80rem 60rem at -10% 100%, #5436ff33 5%, transparent 60%),
    linear-gradient(180deg, #5b32ff 0%, #6a44ff 50%, #5a3df6 100%);
  min-height:100svh;
  color: white;
}
.container{max-width:1100px;margin:0 auto;padding:24px}
header{display:flex;align-items:center;gap:14px;margin-bottom:18px}
.uht-mark{display:flex;align-items:center;gap:12px}
.uht-mark img{width:56px;height:56px;object-fit:contain;filter: drop-shadow(0 6px 12px rgba(0,0,0,.25))}
.brand-title{font-weight:800;font-size:clamp(20px,3vw,28px)}
.badge{display:inline-flex;align-items:center;gap:8px;padding:6px 10px;border-radius:999px;background:rgba(255,255,255,.12);border:1px solid var(--stroke);backdrop-filter: blur(6px)}
.badge small{opacity:.9}

/* hero & card */
.hero{display:grid;grid-template-columns:1.1fr .9fr;gap:28px;align-items:start;margin-top:8px}
@media (max-width:900px){.hero{grid-template-columns:1fr}}
.hero-card{background:var(--glass);border:1px solid var(--stroke);border-radius:22px;padding:28px;backdrop-filter: blur(8px);box-shadow:0 20px 50px rgba(0,0,0,.25)}
h1{margin:0 0 10px;font-size:clamp(26px,4vw,36px);line-height:1.02}
.lead{font-size:clamp(14px,2vw,16px);opacity:.95}
.keyline{height:1px;background:linear-gradient(90deg,transparent,rgba(255,255,255,.3),transparent);margin:18px 0}

/* progress meta */
.progress-meta{display:flex;justify-content:space-between;align-items:center;gap:10px}
.progress-meta .label{opacity:.8;font-size:12px}
.progress-meta .num{font-weight:800;font-size:22px}

/* progress bar */
.progress-wrap{width:100%}
.progress-bg{width:100%;height:14px;background:rgba(255,255,255,.06);border-radius:999px;overflow:hidden;border:1px solid var(--stroke)}
.progress-fill{height:100%;background:linear-gradient(90deg,#ffd6ff,#d9e0ff);transition:width 0.4s cubic-bezier(.2,.8,.2,1)}

/* button */
.btn{appearance:none;cursor:pointer;padding:12px 18px;border-radius:14px;font-weight:700;letter-spacing:.2px;transition:transform .08s ease, box-shadow .2s ease, background .2s ease}
.btn-primary{background:#fff;color:#3e2cff;box-shadow:0 10px 20px rgba(0,0,0,.20), 0 0 0 2px rgba(255,255,255,.12) inset}
.btn-primary:disabled{opacity:.6;cursor:not-allowed}

/* jar */
.jar-wrap{display:flex;justify-content:center;align-items:center}
.jar{width:min(360px, 88%);aspect-ratio:1/1;border-radius:24px;background:linear-gradient(180deg,#8d6bff22 0%, #ffffff10 100%);display:grid;place-items:center;padding:18px;border:1px solid var(--stroke)}
.jar img{width:100%;height:100%;object-fit:contain}

/* footer */
footer{opacity:.8;margin:28px 0 10px;font-size:12px;text-align:center}
</style>