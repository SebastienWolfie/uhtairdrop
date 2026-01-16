<template>
  <div class="body">
    <DashboardHeader class="md:mx-[10%] mx-[2%] sticky top-[10px] z-50" />
    <div class="container">
      <!-- Header -->
      <header>
        <div class="uht-mark">
          <img src="/images/uht-jar.jpg" alt="Nominate Logo"
               onerror="this.src='https://dummyimage.com/96x96/6a44ff/ffffff&text=UHT'"/>
          <div>
            <div class="brand-title">Nominate Wallets</div>
            <span class="badge"><small>Boost Hash Rate • More UHT Daily</small></span>
          </div>
        </div>
      </header>

      <!-- Hash Power Section -->
      <section class="stats">
        <h1>Your Hash Power ⚡</h1>
        <div class="stats-card">
          <div class="stat">
            <span class="label">Hash Rate</span>
            <span class="value">{{ hashRate }}</span>
          </div>
          <div class="stat">
            <span class="label">Daily Cap</span>
            <span class="value">{{ dailyCap }} UHT</span>
          </div>
          <div class="stat">
            <span class="label">Available Slots</span>
            <span class="value">{{ availableSlots - nominations.length }}</span>
          </div>
        </div>
      </section>

      <!-- Nomination List -->
      <section class="nominations">
        <h1>Your Nominations</h1>
        <ul>
          <li v-for="(nom, i) in nominations" :key="i">
            <div class="nominee w-full flex justify-between items-center">
              <span class="wallet">{{ truncateWallet(nom.address) }}</span>

              <button 
                class="copy-btn"
                @click="copyLink(nom.link, i)"
              >
                {{ copiedIndex === i ? "✅ Copied!" : "📋 Copy Link" }}
              </button>
            </div>
          </li>
        </ul>

        <button
          class="add-btn"
          :disabled="nominations.length >= availableSlots"
          @click="openModal"
        >
          + Add Nominee ({{ nominations.length }}/{{ availableSlots }})
        </button>
      </section>

      <footer>
        © 2025 UHT • Universal Health Token — Nominate & Earn More.
      </footer>
    </div>

    <!-- Modal Component -->
    <DashboardNominateNewModal
      :show="showModal"
      @close="closeModal"
      @confirm="handleConfirm"
    />
  </div>
</template>

<script setup>
import { create as saveNomination, getAllNominatedByAddress } from '../../../api/nominations'

const auth = useAuth();
const baseCap = 50
const availableSlots = ref(0)

const nominations = ref([]) 
const showModal = ref(false)
const copiedIndex = ref(null)

const hashRate = computed(() => nominations.value.length)
const dailyCap = computed(() => baseCap + hashRate.value * 50)


watch(()=> auth.value.nominationCountSlot, async() => {
    availableSlots.value = auth.value.nominationCountSlot
    if (availableSlots.value) nominations.value = await getAllNominatedByAddress(auth.value.walletAddress)
})

onMounted(async() => {
    availableSlots.value = auth.value.nominationCountSlot
    if (availableSlots.value) nominations.value = await getAllNominatedByAddress(auth.value.walletAddress)
})

function openModal() {
  showModal.value = true
}
function closeModal() {
  showModal.value = false
}

async function handleConfirm(address) {
  const nominee = {
    owner: auth.value.walletAddress,
    address,
    link: `${window.location.origin}/signup/${auth.value.walletAddress}`
  }
  await saveNomination(nominee)
  nominations.value.push(nominee)
  closeModal()
}

function truncateWallet(address) {
  return address ? address.slice(0, 6) + "..." + address.slice(-4) : ""
}

function copyLink(link, index) {
  navigator.clipboard.writeText(link).then(() => {
    copiedIndex.value = index
    setTimeout(() => {
      copiedIndex.value = null
    }, 2000)
  }).catch(err => {
    console.error("Failed to copy: ", err)
  })
}
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
.uht-mark img { width:56px; height:56px; border-radius:14px; }
.brand-title { font-weight:800; font-size:clamp(24px,3vw,32px); }
.badge {
  padding:6px 10px; border-radius:999px;
  background:rgba(255,255,255,.12);
  border:1px solid rgba(255,255,255,.18);
  backdrop-filter: blur(6px);
}

.stats h1, .nominations h1 { font-size:22px; margin-bottom:14px; }

.stats-card {
  display:flex; justify-content:space-between; gap:20px;
  background:rgba(255,255,255,.08);
  border:1px solid rgba(255,255,255,.18);
  border-radius:14px;
  padding:16px 20px;
  font-weight:600;
}
.stat { display:flex; flex-direction:column; gap:4px; }
.label { font-size:14px; opacity:.8; }
.value { font-size:18px; font-weight:700; }

.nominations ul { list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:10px; }

.nominations li {
  display:flex; align-items:center; justify-content:space-between;
  background:rgba(255,255,255,.08);
  border:1px solid rgba(255,255,255,.18);
  border-radius:14px;
  padding:10px 14px;
}

.wallet {
  font-weight:600;
}

.copy-btn {
  background: rgba(255,255,255,.12);
  border: 1px solid rgba(255,255,255,.18);
  padding: 6px 12px;
  border-radius: 8px;
  cursor: pointer;
  color: white;
  font-size: 14px;
  font-weight: 600;
  transition: background 0.2s;
}
.copy-btn:hover {
  background: rgba(255,255,255,.25);
}

.add-btn {
  width:100%;
  margin-top:14px;
  padding:12px 16px;
  border-radius:14px;
  background:var(--brand, #6a44ff);
  font-weight:700;
  color:white;
  border:none;
  cursor:pointer;
}
.add-btn:disabled {
  background:gray;
  cursor:not-allowed;
}
.add-btn:hover:not(:disabled) { background:#4e28d4; }

footer { margin-top:40px; font-size:13px; opacity:.8; text-align:center; }
</style>
