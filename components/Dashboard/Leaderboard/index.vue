<template>
  <div class="body">
    <DashboardHeader class="md:mx-[10%] mx-[2%] sticky top-[10px] z-50" />

    <div class="container">
      <!-- Header -->
      <header>
        <div class="uht-mark">
          <img src="/images/uht-jar.jpg" alt="Leaderboard Logo"
               onerror="this.src='https://dummyimage.com/96x96/6a44ff/ffffff&text=UHT'"/>
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
          <li v-for="(user, index) in formatList" :key="user.walletAddress"
              :class="rankClass(index)">
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
      <section class="your-rank" v-if="auth.walletAddress.toLowerCase()!='0xb2e85090cBb09C9F508D39Db55f996F364281c62'.toLowerCase()">
        <h2>Your Position</h2>
        <div class="your-card">
          <div class="rank">{{ simulateRank || '—' }}</div>
          <div class="user">{{ auth.username || truncateWallet(auth.walletAddress) }}</div>
          <div class="points">{{ auth.points + referralPoints || 0 }} pts</div>
        </div>
      </section>

      <footer>
        © 2025 UHT • Universal Health Token — Compete & Earn Rewards.
      </footer>
    </div>
  </div>
</template>

<script setup>
import { getAll } from '../../../api/leaderboard'
const auth = useAuth()
const top50 = ref([])
 const { referralPoints } = referralCompletedPoints()


onMounted(async() => {
  top50.value = await getAll() || []
    
  if (top50.value.length > 50) {
    top50.value = top50.value.slice(0, 50);
  }
})

watch(() => auth.value.points, () => {

    console.log("leaderboard", formatList.value)


    // const leatRank = formatList.value[formatList.value.length-1];
    // if (auth.value.points> leatRank.points) top50.value.push({
    //   points: auth.value.points,
    //   username: auth.value.username,
    //   walletAddress: auth.value.walletAddress
    // })
})

const formatList = computed(() => {
    return top50.value.sort((a, b) => b.points - a.points);
})

const currentUserRank = ref(null)

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
  const minPoints = formatList.value[formatList.value.length]?.points || 0;
  const baseRank = 384; // starting simulated rank for low points

  // Normalize points to [0,1]
  const progress = Math.min((auth.value.points+referralPoints.value) / maxPoints, 1);
  
  // Calculate rank: more points -> closer to top 50
  const simulatedRank = Math.round(baseRank - (baseRank - 51) * progress);
  
  console.log("simulatedRank", simulatedRank)
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

.container { max-width:1100px; margin:0 auto; padding:24px; }

header { display:flex; align-items:center; gap:14px; margin-bottom:18px; }
.uht-mark { display:flex; align-items:center; gap:12px; }
.uht-mark img { width:56px; height:56px; }
.brand-title { font-weight:800; font-size:clamp(24px,3vw,32px); }
.badge { padding:6px 10px; border-radius:999px;
  background:rgba(255,255,255,.12); border:1px solid rgba(255,255,255,.18);
  backdrop-filter: blur(6px); }

.leaderboard h1 { font-size:28px; margin-bottom:16px; }

.leaderboard ul { list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:10px; }

.leaderboard li {
  display:flex; justify-content:space-between; align-items:center;
  background:rgba(255,255,255,.08); border:1px solid rgba(255,255,255,.18);
  border-radius:14px; padding:12px 18px; font-weight:600;
  transition: transform .1s ease;
}
.leaderboard li:hover { transform: scale(1.02); }

.rank { font-size:18px; font-weight:700; width:40px; text-align:center; }
.user { flex:1; text-align:left; padding-left:12px; }
.points { font-weight:800; }

.medal { font-size:22px; }
.gold { color: gold; text-shadow:0 0 8px gold; }
.silver { color: silver; text-shadow:0 0 8px silver; }
.bronze { color: #cd7f32; text-shadow:0 0 8px #cd7f32; }

.first { background:linear-gradient(90deg,#ffd70033,#fff20022); }
.second { background:linear-gradient(90deg,#c0c0c033,#e0e0e022); }
.third { background:linear-gradient(90deg,#cd7f3233,#ffb34722); }

.your-rank { margin-top:40px; }
.your-rank h2 { font-size:22px; margin-bottom:12px; }
.your-card {
  display:flex; justify-content:space-between; align-items:center;
  background:rgba(255,255,255,.12); border:1px solid rgba(255,255,255,.18);
  border-radius:16px; padding:14px 20px;
}
</style>
