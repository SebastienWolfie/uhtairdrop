<template>
  <div class="body">
    <DashboardHeader class="md:mx-[10%] mx-[2%] sticky top-[10px] z-50" />

    <div class="container">
      <!-- Header -->
      <header>
        <div class="uht-mark">
          <img src="/images/uht-jar.jpg" alt="Leaderboard Logo"
            onerror="this.src='https://dummyimage.com/96x96/6a44ff/ffffff&text=UHT'" />
          <div>
            <div class="brand-title">Leaderboard</div>
            <span class="badge"><small>Top Referrers • Earn Points • Win Rewards</small></span>
          </div>
        </div>
      </header>

      <!-- Leaderboard List -->
      <section class="leaderboard">
        <h1>Top 50 Health Achievers 🎯</h1>

        <ul>
          <li v-for="(user, index) in formatList" :key="user.walletAddress" :class="rankClass(index)">
            <div class="rank">
              <span v-if="index === 0" class="medal gold">🥇</span>
              <span v-else-if="index === 1" class="medal silver">🥈</span>
              <span v-else-if="index === 2" class="medal bronze">🥉</span>
              <span v-else>{{ index + 1 }}</span>
            </div>
            <div class="user">
              <span class="username">{{ user.username || truncateWallet(user.walletAddress) }}</span>
            </div>
            <div class="points">{{ user.points }} pts</div>
          </li>
        </ul>
      </section>

      <!-- Current User Rank -->
      <section class="your-rank"
        v-if="auth.walletAddress?.toLowerCase() != '0xb2e85090cBb09C9F508D39Db55f996F364281c62'.toLowerCase()">
        <h2>Your Position</h2>
        <div class="your-card">
          <div class="rank">{{ simulateRank || '—' }}</div>
          <div class="user">{{ auth.username || truncateWallet(auth.walletAddress) }}</div>
          <!-- Use the new computed total here -->
          <div class="points">{{ currentUserTotalPoints }} pts</div>
        </div>
      </section>

      <footer>
        © 2026 UHT • Universal Health Token — Compete & Earn Rewards.
      </footer>
    </div>
  </div>
</template>
 
<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { getAll } from '../../../apiss/leaderboard'

const auth = useAuth()
const { referralPoints } = referralCompletedPoints()
const top50 = ref([])

// Use a reactive time reference. Starting at 0 prevents Nuxt SSR errors.
const currentTime = ref(0)
let pointsInterval = null

onMounted(async () => {
  // Set the real time only on the client
  currentTime.value = window.Date.now()

  // Update the time every 60 seconds so points roll over live if they cross a day boundary
  pointsInterval = setInterval(() => {
    currentTime.value = window.Date.now()
  }, 60000)

  top50.value = await getAll() || []

  if (top50.value.length > 50) {
    top50.value = top50.value.slice(0, 50);
  }
})

onUnmounted(() => {
  if (pointsInterval) clearInterval(pointsInterval)
})

watch(() => auth.value.points, () => {
  console.log("leaderboard updated", formatList.value)
})

// Calculate extra points per user based on their specific dateCreated
const formatList = computed(() => {
  const now = currentTime.value;

  return top50.value.map(user => {
    let extraPoints = 0;
    
    // Only calculate if we are on the client (now > 0) and the user has a date
    if (now > 0 && user.dateCreated) {
      const createdTime = new window.Date(user.dateCreated).getTime();
      
      // Calculate total elapsed days (1000ms * 60s * 60m * 24h)
      const elapsedDays = Math.max(0, now - createdTime) / (1000 * 60 * 60 * 24);
      
      // Floor the days so it jumps purely in multiples of 50 per full day
      extraPoints = Math.floor(elapsedDays) * 50;
    }

    return {
      ...user,
      points: Number.parseInt(user.points || 0) + extraPoints 
    }
  }).sort((a, b) => b.points - a.points);
})

// Calculate the current logged-in user's total points similarly
const currentUserTotalPoints = computed(() => {
  let extraPoints = 0;
  const now = currentTime.value;

  // Assuming auth.value has dateCreated. If not, they get 0 extra time points.
  if (now > 0 && auth.value.dateCreated) {
    const createdTime = new window.Date(auth.value.dateCreated).getTime();
    const elapsedDays = Math.max(0, now - createdTime) / (1000 * 60 * 60 * 24);
    extraPoints = Math.floor(elapsedDays) * 50;
  }

  const basePoints = Number.parseInt(auth.value.points || 0);
  const refPoints = Number.parseInt(referralPoints.value || 0);

  return basePoints + refPoints + extraPoints;
})

function truncateWallet(address) {
  return address ? address.slice(0, 6) + "..." + address.slice(-4) : ""
}

function rankClass(index) {
  if (index === 0) return 'first'
  if (index === 1) return 'second'
  if (index === 2) return 'third'
  return ''
}

const simulateRank = computed(() => {
  const maxPoints = formatList.value[0]?.points || 0;
  const baseRank = 384; 

  const progress = Math.min(currentUserTotalPoints.value / (maxPoints || 1), 1);

  const simulatedRank = Math.round(baseRank - (baseRank - 51) * progress);

  return simulatedRank;
})
</script>

<style scoped>
.body {
  font-family: Inter, sans-serif;
  color: white;
  background: linear-gradient(180deg, #5b32ff 0%, #6a44ff 50%, #5a3df6 100%);
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
}

.brand-title {
  font-weight: 800;
  font-size: clamp(24px, 3vw, 32px);
}

.badge {
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, .12);
  border: 1px solid rgba(255, 255, 255, .18);
  backdrop-filter: blur(6px);
}

.leaderboard h1 {
  font-size: 28px;
  margin-bottom: 16px;
}

.leaderboard ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.leaderboard li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, .08);
  border: 1px solid rgba(255, 255, 255, .18);
  border-radius: 14px;
  padding: 12px 18px;
  font-weight: 600;
  transition: transform .1s ease;
}

.leaderboard li:hover {
  transform: scale(1.02);
}

.rank {
  font-size: 18px;
  font-weight: 700;
  width: 40px;
  text-align: center;
}

.user {
  flex: 1;
  text-align: left;
  padding-left: 12px;
}

.points {
  font-weight: 800;
}

.medal {
  font-size: 22px;
}

.gold {
  color: gold;
  text-shadow: 0 0 8px gold;
}

.silver {
  color: silver;
  text-shadow: 0 0 8px silver;
}

.bronze {
  color: #cd7f32;
  text-shadow: 0 0 8px #cd7f32;
}

.first {
  background: linear-gradient(90deg, #ffd70033, #fff20022);
}

.second {
  background: linear-gradient(90deg, #c0c0c033, #e0e0e022);
}

.third {
  background: linear-gradient(90deg, #cd7f3233, #ffb34722);
}

.your-rank {
  margin-top: 40px;
}

.your-rank h2 {
  font-size: 22px;
  margin-bottom: 12px;
}

.your-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, .12);
  border: 1px solid rgba(255, 255, 255, .18);
  border-radius: 16px;
  padding: 14px 20px;
}
</style>