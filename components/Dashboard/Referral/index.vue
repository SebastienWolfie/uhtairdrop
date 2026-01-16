<template>
  <div class="body">
    <DashboardHeader class="md:mx-[10%] mx-[2%] sticky top-[10px] z-50" />

    <div class="container">
      <!-- Header -->
      <header>
        <div class="uht-mark">
          <img src="/images/uht-jar.jpg" alt="Referral Logo"
            onerror="this.src='https://dummyimage.com/96x96/6a44ff/ffffff&text=UHT'" />
          <div>
            <div class="brand-title">Referral Program</div>
            <span class="badge"><small>Invite friends • Earn Health Points</small></span>
          </div>
        </div>
      </header>

      <!-- Hero -->
      <section class="hero">
        <!-- Left card -->
        <div class="hero-card">
          <h1>Invite & Earn</h1>
          <p class="lead">
            Share your referral link with friends. Every friend that joins using your link
            earns you <strong>bonus Health Points</strong>!
          </p>
          <div class="keyline"></div>

          <!-- Stats -->
          <div class="stats">
            <div class="stat">
              <div class="label">Your Points</div>
              <div class="num">{{ auth?.points + referralPoints || 0 }}</div>
            </div>
            <div class="stat">
              <div class="label">Referrals</div>
              <div class="num">{{ auth?.referrals.length || 0 }}</div>
            </div>
          </div>

          <!-- Referral Link -->
          <div class="mt-6">
            <p class="mb-2 font-semibold">Your referral link:</p>
            <div class="flex gap-2 items-center">
              <input type="text"
                class="flex-1 bg-white/20 border border-white/30 rounded-lg px-3 py-2 text-sm text-white backdrop-blur-sm"
                :value="referralLink" readonly>
              <button class="btn btn-primary" @click="copyReferral">{{ (copied) ? 'Copied' : 'Copy' }}</button>
            </div>
          </div>

          <!-- Referral Leaderboard -->
          <section v-if="sortedReferrals.length" class="mt-10">
            <h2 class="text-xl font-bold mb-1">Your Referrals</h2>
            <p class="mb-2"># of Eligible referrals to mint nft ({{ eligibleAmount }}/{{ sortedReferrals.length }})</p>
            <p class="mb-4" v-if="showTimer">Time expires in <span class="text-red-300 font-bold text-[20px]"
                id="referral_claim_bid_timer"></span></p>
            <div class="referral-list">
              <div class="referral-row header">
                <span>#</span>
                <span>Address</span>
                <span v-if="true">Eligiblity</span>
                <!-- <span>Points</span> -->
                <!-- <span class="text-end">Current Allocation</span>
                <span class="text-end">New Allocation</span> -->
              </div>

              <div v-for="(ref, i) in sortedReferrals" :key="ref.address" class="referral-row">
                <span>{{ i + 1 }}</span>
                <span class="truncate max-w-[150px]">{{ ref.address }}</span>

                <div v-if="true">
                  <p class="px-4 py-2 rounded-md text-white font-semibold bg-green-600" v-if="ref?.hasClaimedPoints">
                    ✅ Eligible
                  </p>
                  <!-- <p class="px-4 py-2 rounded-md text-white font-semibold bg-green-600" v-else-if="ref?.isAirdropEligible">
                    ✅ Eligible
                  </p> -->

                  <p class="px-4 py-2 rounded-md text-white font-semibold bg-red-700" v-else>
                    ⚠️ Not Eligible
                  </p>
                </div>


                <!-- <span class="text-end"><span class="md:!hidden !inline-block">Allocation:</span> {{ ref.points || 0 }}</span> -->
                <!-- <span class="text-end"><span class="md:!hidden !inline-block">Current Allocation:</span> {{ ref.allocation || 0 }}</span>
                <span class="text-end"><span class="md:!hidden !inline-block">New Allocation:</span> {{ ref.points*0.32 || 0 }}</span> -->
              </div>
            </div>
          </section>

        </div>

        <!-- Right jar image -->
        <div class="jar-wrap">
          <div class="jar">
            <img src="/images/uht-jar.jpg" alt="Referral Jar">
          </div>
        </div>
      </section>

      <footer>
        © 2025 UHT • Universal Health Token — Invite friends, earn rewards.
      </footer>
    </div>
    <DashboardProfileModal v-if="!auth.email" @close="() => toggleProfileModal(false)" />

  </div>
</template>

<script setup>
import { updateAddressProfile, getUser } from '../../../apiss/profile';


const auth = useAuth()
const copied = ref(false)
const showTimer = ref(true)
const referralLink = ref("")
let timerInterval = null;
const { referralPoints } = referralCompletedPoints()

watch(() => auth.value.walletAddress, () => {
  referralLink.value = `${window.location.origin}/signup/${auth.value.walletAddress}`
})

onMounted(() => {
  referralLink.value = `${window.location.origin}/signup/${auth.value.walletAddress}`
})

const sortedReferrals = computed(() => {
  return (auth.value?.referrals || []).slice().sort((a, b) => (b.points || 0) - (a.points || 0))
})



onMounted(() => {
  let endDate = new window.Date();
  endDate.setDate(12);
  endDate.setMonth(8);
  endDate.setFullYear(2025);
  endDate.setHours(1);
  endDate.setMinutes(59)
  endDate.setSeconds(59)

  endDate = endDate.getTime();

  timerInterval = setInterval(function () {
    let currentDate = new window.Date().getTime();


    let distance = endDate - currentDate;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    const bidTimer = document.getElementById("referral_claim_bid_timer");
    if (bidTimer) bidTimer.innerHTML = hours + "h "
      + minutes + "m " + seconds + "s ";

    if (distance < 0) {
      clearInterval(timerInterval);
      showTimer.value = false
    }
  }, 1000)
})

onUnmounted(() => {
  clearInterval(timerInterval)
  timerInterval = null
})

onMounted(async () => {
  // await updateAddressProfile('0xe9D27A21839827921C7c4C40ecE9a9a5E5B119b9', {
  //   isAirdropEligible: true
  // })
  // console.log('updated isAirdropEligible to true', await getUser('0x1Ba7cc4F9240083eB86c1460DCcB7D4269bea863'))
})

const eligibleAmount = computed(() => {
  return auth.value.referrals.filter(i => i.hasClaimedPoints).length || 0
})

function copyReferral() {
  navigator.clipboard.writeText(referralLink.value);
  copied.value = true;
  setTimeout(() => {
    copied.value = false
  }, 2000)
}
</script>


<style scoped>
:root {
  --brand: #6a44ff;
  --stroke: rgba(255, 255, 255, .18);
  --glass: rgba(255, 255, 255, .08);
  --text: #f3f4f8;
}

.body {
  margin: 0;
  font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  color: white;
  background:
    radial-gradient(90rem 60rem at 80% -10%, #a88bff20 10%, transparent 60%),
    radial-gradient(80rem 60rem at -10% 100%, #5436ff33 5%, transparent 60%),
    linear-gradient(180deg, #5b32ff 0%, #6a44ff 50%, #5a3df6 100%);
  min-height: 100vh;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 24px;
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
  width: 56px;
  height: 56px;
  object-fit: contain;
  filter: drop-shadow(0 6px 12px rgba(0, 0, 0, .25));
}

.brand-title {
  font-weight: 800;
  font-size: clamp(24px, 3vw, 32px);
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, .12);
  border: 1px solid var(--stroke);
  backdrop-filter: blur(6px);
}

.badge small {
  opacity: .9;
}

.hero {
  display: grid;
  grid-template-columns: 1.1fr .9fr;
  gap: 28px;
  align-items: start;
  margin-top: 8px;
}

@media (max-width: 900px) {
  .hero {
    grid-template-columns: 1fr;
  }

  .jar-wrap {
    margin-top: 24px;
  }
}

.hero-card {
  background: var(--glass);
  border: 1px solid var(--stroke);
  border-radius: 22px;
  padding: 28px;
  backdrop-filter: blur(8px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, .25);
}

h1 {
  margin: 0 0 10px;
  font-size: clamp(34px, 6vw, 56px);
  line-height: 1.02;
}

.lead {
  font-size: clamp(16px, 2.2vw, 18px);
  opacity: .95;
}

.keyline {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, .3), transparent);
  margin: 18px 0;
}

.stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
  margin-top: 16px;
}

.stat {
  background: rgba(255, 255, 255, .09);
  border: 1px solid var(--stroke);
  border-radius: 16px;
  padding: 16px;
}

.stat .label {
  opacity: .8;
  font-size: 12px;
}

.stat .num {
  font-weight: 800;
  font-size: 28px;
}

.btn {
  appearance: none;
  cursor: pointer;
  padding: 12px 18px;
  border-radius: 14px;
  font-weight: 700;
  transition: transform .08s ease, box-shadow .2s ease, background .2s ease;
}

.btn-primary {
  background: #fff;
  color: #3e2cff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, .20);
}

.btn-primary:hover {
  transform: translateY(-1px);
}

.jar-wrap {
  display: flex;
  justify-content: center;
}

.jar {
  width: min(350px, 88%);
  aspect-ratio: 1/1;
  border-radius: 24px;
  background: linear-gradient(180deg, #8d6bff22 0%, #ffffff10 100%);
  display: grid;
  place-items: center;
  padding: 18px;
  border: 1px solid var(--stroke);
}

.jar img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

footer {
  opacity: .8;
  margin: 28px 0 10px;
  font-size: 12px;
  text-align: center;
}

.referral-list {
  border: 1px solid var(--stroke);
  border-radius: 16px;
  background: rgba(255, 255, 255, .08);
  overflow: hidden;
}

.referral-row {
  display: grid;
  grid-template-columns: 40px 1fr auto;
  /* grid-template-columns: 40px 1fr auto 70px 70px; */
  /* grid-template-columns: 40px 1fr auto; */
  gap: 20px;
  align-items: center;
  padding: 12px 16px;
  font-size: 14px;
  border-bottom: 1px solid rgba(255, 255, 255, .1);
}

.referral-row:last-child {
  border-bottom: none;
}

.referral-row.header {
  font-weight: 700;
  background: rgba(255, 255, 255, .12);
}

/* ---------------- MOBILE ENHANCEMENTS ---------------- */
@media (max-width: 768px) {
  .referral-row {
    grid-template-columns: 1fr;
    gap: 8px;
    text-align: left;
    font-size: 13px;
    padding: 10px 12px;
  }

  .referral-row span:first-child {
    display: none;
    /* hide # column */
  }

  .referral-row.header {
    display: none;
    /* hide table header */
  }
}

@media (max-width: 600px) {
  .stats {
    grid-template-columns: 1fr;
  }

  .flex.gap-2.items-center {
    flex-direction: column;
    align-items: stretch;
  }

  .btn {
    width: 100%;
    text-align: center;
  }

  input[type="text"] {
    width: 100%;
  }
}
</style>
