<template>
  <div class="body min-h-screen bg-[#0b0c1b] text-white">
    <DashboardHeader class="mx-2 sm:mx-4 md:mx-[10%] sticky top-[10px] z-50" />

    <div class="container max-w-[1400px] mx-auto px-3 sm:px-6 py-4 sm:py-8">
      
      <!-- Header -->
      <header class="mb-6 sm:mb-8">
        <div class="uht-mark flex items-center gap-3 sm:gap-4">
          <img 
            src="/images/uht-jar.jpg" 
            alt="NFT Minting"
            class="w-12 h-12 sm:w-16 sm:h-16 rounded-xl object-cover shrink-0"
            onerror="this.src='https://dummyimage.com/96x96/6a44ff/ffffff&text=NFT'" 
          />
          <div class="min-w-0 flex-1">
            <h1 class="brand-title text-xl sm:text-3xl font-extrabold text-white truncate m-0">Exclusive UHT NFTs</h1>
            <span class="badge inline-block mt-1">
              <small class="text-xs sm:text-sm text-[#b59cfc] bg-[#6a44ff]/15 px-2.5 py-0.5 rounded-full border border-[#6a44ff]/30">
                For Users with 100+ Points
              </small>
            </span>
          </div>
        </div>
      </header>

      <!-- Two-Column Grid (1 column on mobile, 12 columns on lg screens) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        
        <!-- LEFT COLUMN: Eligibility & NFTs -->
        <div class="lg:col-span-7 xl:col-span-8 flex flex-col gap-6 sm:gap-8">
          
          <!-- Access Condition -->
          <section class="access-info bg-[#131428]/80 border border-white/10 rounded-2xl p-4 sm:p-6 backdrop-blur-sm">
            <h2 class="text-lg sm:text-xl font-bold text-white mb-3">Eligibility 🎟️</h2>
            <div class="access-card">
              <p v-if="!isEligible" class="warning text-red-400 text-sm sm:text-base m-0 leading-relaxed">
                🚫 Wallet Ineligible for Minting
                <br />
                <span class="text-white mt-1.5 inline-block">
                  You can only mint an NFT if you have <strong>100 points or more</strong>.
                </span>
                <br />
                <span class="text-gray-400 text-xs sm:text-sm">💡 Earn more points by participating in the UHT ecosystem.</span>
              </p>
              <p v-else class="success text-emerald-400 text-sm sm:text-base m-0 leading-relaxed">
                ✅ Congratulations! Your wallet is eligible to mint NFTs.
                <br />
                <span v-if="eligibleNftToMint" class="text-white mt-1.5 inline-block">
                  NFT Mintable - {{ nfts.find(i => i.id == eligibleNftToMint?.nftId)?.name }}
                </span>
                <br />
                <small class="text-gray-300 block text-xs sm:text-sm mt-1">Mint price: 0.01 - 0.02 ETH</small>
                <small class="text-gray-300 block text-xs sm:text-sm">You can mint <strong>{{ maxMintCount }} NFT max</strong>.</small>
              </p>
            </div>
          </section>

          <!-- NFT List Grid -->
          <section class="nft-list">
            <h2 class="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Available NFTs</h2>
            <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 p-0 m-0 list-none">
              <li 
                v-for="nft in nfts" 
                :key="nft.id" 
                class="nft-card bg-[#1d1f3b]/60 border border-white/10 rounded-2xl overflow-hidden hover:border-[#6a44ff]/60 transition-all flex flex-col"
              >
                <img :src="nft.img" :alt="nft.name" class="nft-image w-full h-44 sm:h-52 object-cover" />
                <div class="nft-info p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 class="text-base sm:text-lg font-bold text-white mb-2 truncate">{{ nft.name }}</h3>
                    <p class="text-xs sm:text-sm text-gray-400 mb-1">Rarity: <span class="rarity text-[#b59cfc] font-semibold">{{ nft.rarity }}</span></p>
                    <p class="text-xs sm:text-sm text-gray-400 mb-1">Rank: <span class="rarity text-[#b59cfc]">One</span></p>
                    <p class="text-xs sm:text-sm text-gray-400 mb-4">Mint Price: <span class="price font-mono text-emerald-400 font-bold">{{ nft.mintPrice }} ETH</span></p> 
                  </div>
                  
                  <button 
                    class="mint-btn w-full py-3 sm:py-2.5 rounded-xl font-bold text-sm text-white transition-all bg-[#6a44ff] hover:bg-[#5a34ef] active:scale-[0.98] disabled:bg-gray-600/50 disabled:cursor-not-allowed touch-manipulation" 
                    :disabled="initialLoading || !walletAddress || hasMintedNfts(nft) || !isEligible"
                    @click="mintNFT(nft)"
                  >
                    {{ initialLoading ? 'Loading...' : hasMintedNfts(nft) ? 'Minted' : 'Mint' }}
                  </button>
                </div>
              </li>
            </ul>
          </section>
        </div>

        <!-- RIGHT COLUMN: Sticky Live Activity Feed -->
        <div class="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-[90px] w-full">
          <section class="live-history-section">
            <div class="flex items-center justify-between mb-3 sm:mb-4 px-1">
              <div class="flex items-center gap-2">
                <h2 class="text-lg sm:text-xl font-bold text-white m-0">Live Mint Activity</h2>
                <span class="relative flex h-2.5 w-2.5">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
              </div>
              <!-- <span class="text-[10px] sm:text-xs text-gray-400 font-mono">{{ mintHistory.length }} Mints Recorded</span> -->
            </div>

            <div class="bg-[#131428]/80 border border-white/10 rounded-2xl p-3 sm:p-4 backdrop-blur-sm shadow-xl">
              <div v-if="historyLoading" class="text-center py-6 text-gray-400 text-xs sm:text-sm">
                Loading recent activity...
              </div>

              <div v-else-if="mintHistory.length === 0" class="text-center py-6 text-gray-400 text-xs sm:text-sm">
                No mints recorded yet. Be the first to mint!
              </div>

              <!-- Height adjusts dynamically (compact on mobile, extended on desktop) -->
              <div v-else class="max-h-[300px] sm:max-h-[450px] lg:max-h-[580px] overflow-y-auto pr-1 space-y-2 sm:space-y-2.5 custom-scrollbar">
                <TransitionGroup name="history-list">
                  <div 
                    v-for="item in mintHistory" 
                    :key="item.id || item.dateCreated"
                    class="flex items-center justify-between bg-[#1d1f3b]/60 hover:bg-[#1d1f3b] border border-white/5 rounded-xl p-2.5 sm:p-3 transition-all duration-300"
                  >
                    <div class="flex items-center gap-2.5 sm:gap-3 min-w-0">
                      <img 
                        :src="getNftImage(item.nftId) || item.nftImg || 'https://dummyimage.com/96x96/6a44ff/ffffff&text=NFT'" 
                        alt="NFT"
                        class="w-9 h-9 sm:w-10 sm:h-10 rounded-lg object-cover border border-[#6a44ff]/40 shrink-0"
                      />
                      <div class="min-w-0">
                        <div class="flex items-center gap-1 flex-wrap">
                          <span class="font-semibold text-xs text-white truncate max-w-[90px] sm:max-w-[120px]">
                            {{ formatUserAddress(item.walletAddress) }}
                          </span>
                          <span class="text-[10px] sm:text-xs text-gray-400">minted</span>
                        </div>
                        <p class="text-xs sm:text-sm font-bold text-[#b59cfc] truncate m-0 leading-tight">
                          {{ item.nftName || getNftName(item.nftId) }}
                        </p>
                      </div>
                    </div>

                    <div class="text-right shrink-0 ml-1.5">
                      <span class="text-[10px] sm:text-xs text-gray-400 block mb-0.5">
                        {{ formatTimeAgo(item.dateCreated) }}
                      </span>
                      <span class="text-[9px] sm:text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                        Verified
                      </span>
                    </div>
                  </div>
                </TransitionGroup>
              </div>
            </div>
          </section>
        </div>

      </div>

      <!-- Footer -->
      <footer class="mt-8 sm:mt-12 text-center text-[10px] sm:text-xs text-gray-500 border-t border-white/5 pt-6">
        © 2026 UHT • Universal Health Token — Mint Your NFT Collection.
      </footer>
    </div>

    <!-- Minting Loading Modal -->
    <DashboardMintLoadingModal 
      v-if="showLoading" 
      :address-signature="addressSignature" 
      :wallet-address="walletAddress"
      :nft="selectedNft" 
      @close="toggleLoadingModal(false)" 
    />

    <!-- Toast Notifications (Responsive placement & width) -->
    <div class="fixed bottom-3 left-3 right-3 sm:right-auto sm:bottom-6 sm:left-6 max-w-full sm:max-w-md z-[100] flex flex-col gap-2 pointer-events-none">
      <TransitionGroup name="toast">
        <div 
          v-for="toast in activeToasts" 
          :key="toast.id" 
          class="bg-[#121324]/95 text-white px-3 py-2 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl shadow-2xl border border-[#6a44ff]/40 flex items-center gap-2.5 sm:gap-3 backdrop-blur-lg w-full"
        >
          <img 
            :src="toast.nftImg" 
            alt="NFT" 
            class="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl border border-[#6a44ff] object-cover shrink-0" 
          />
          <div class="text-xs sm:text-sm min-w-0 flex-1">
            <p class="text-gray-300 truncate text-[11px] sm:text-xs m-0">
              <span class="font-bold text-[#b59cfc] truncate inline-block max-w-[100px] sm:max-w-none align-bottom">{{ toast.user }}</span> just minted
            </p>
            <p class="font-bold text-xs sm:text-base text-white truncate m-0 leading-tight">{{ toast.nftName }}</p>
          </div>
          <span class="text-[9px] sm:text-xs text-emerald-400 font-medium px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 whitespace-nowrap shrink-0">
            Live ⚡
          </span>
        </div>
      </TransitionGroup>
    </div>

  </div>
</template>

<script setup>
import { list as nftList } from '../../../apiss/NftDatabase'
import { getAddress, getIsConnected, subscribeState, openModal, disconnectWallet, getChainID, switchNetwork } from '../../../apiss/web3/walletconnect';
import { create as saveAddressSignature, getAddressSignature, update as updateAddressSignature } from '../../../apiss/web3/walletSignature';
import { getNomination } from '../../../apiss/nominations'
import { getAllNftsForAddress } from '../../../apiss/uhtnftmint'
import { getClaimerNFT, create as createClaimerNfT } from '~/apiss/claimerNft';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../firebase';
// 1. Imports
import { createSimulatedMint, getAllSimulatedMints } from '../../../apiss/simulatedMintService';
import prefixes from '../../../apiss/prefixes.js';

// 2. State Variables
const activeToasts = ref([]);
const mintHistory = ref([]);
const historyLoading = ref(true);
let liveMintInterval = null;

// Helper helpers to resolve NFT name & image from ID if needed
function getNftName(id) {
  const match = nfts.value.find(n => n.id === id);
  return match ? match.name : 'UHT Exclusive NFT';
}

function getNftImage(id) {
  const match = nfts.value.find(n => n.id === id);
  return match ? match.img : null;
}

// Truncate addresses for compact mobile view
function formatUserAddress(addr) {
  if (!addr) return '0x...';
  if (addr.endsWith('.eth')) return addr;
  if (addr.length > 12) {
    return `${addr.substring(0, 6)}...${addr.substring(addr.length - 4)}`;
  }
  return addr;
}

// Relative Time Formatter ("Just now", "2m ago", "1h ago")
function formatTimeAgo(dateStr) {
  if (!dateStr) return 'Just now';
  const date = new window.Date(dateStr);
  const now = new window.Date();
  const seconds = Math.floor((now - date) / 1000);

  if (seconds < 30) return 'Just now';
  if (seconds < 60) return `${seconds}s ago`;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.floor(hours / 24)}d ago`;
}

// Load existing mints from DB on startup
async function loadMintHistory() {
  historyLoading.value = true;
  try {
    const records = await getAllSimulatedMints(25);
    mintHistory.value = records;
  } catch (e) {
    console.warn("Could not load mint history:", e);
  } finally {
    historyLoading.value = false;
  }
}

function generateRandomUser() {
  const isEns = Math.random() > 0.35; // 65% chance ENS, 35% chance 0x Address
  
  if (isEns) {
    // Pick a random prefix from the 500 imported list
    const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const randomNumber = Math.floor(Math.random() * 9999);
    return `${randomPrefix}${randomNumber}.eth`;
  } else {
    // Generate truncated 0x wallet address
    const chars = '0123456789abcdef';
    let addr = '0x';
    for (let i = 0; i < 4; i++) addr += chars[Math.floor(Math.random() * chars.length)];
    addr += '...';
    for (let i = 0; i < 4; i++) addr += chars[Math.floor(Math.random() * chars.length)];
    return addr;
  }
}

function pickIntelligentNft() {
  if (!nfts.value || nfts.value.length === 0) return null;
  const totalWeight = nfts.value.reduce((sum, n) => sum + (n.orderWeight || 1), 0);
  let randomVal = Math.random() * totalWeight;
  
  for (const nft of nfts.value) {
    if (randomVal < (nft.orderWeight || 1)) return nft;
    randomVal -= (nft.orderWeight || 1);
  }
  return nfts.value[Math.floor(Math.random() * nfts.value.length)]; // Fallback
}


// Generate New Mint & Sync both Toast + History Feed
async function triggerSystemMint() {
  const nft = pickIntelligentNft();
  if (!nft) return;

  const fakeUser = generateRandomUser();
  const nowIso = new window.Date().toISOString();
  const toastId = window.Date.now() + Math.random();

  const newMintItem = {
    id: toastId.toString(),
    nftId: nft.id,
    nftName: nft.name,
    nftImg: nft.img,
    walletAddress: fakeUser,
    dateCreated: nowIso,
    isSystemGenerated: true
  };

  // 1. Push to Active Toasts
  activeToasts.value.push({
    id: toastId,
    user: fakeUser,
    nftName: nft.name,
    nftImg: nft.img
  });

  // Remove toast after 6s
  setTimeout(() => {
    activeToasts.value = activeToasts.value.filter(t => t.id !== toastId);
  }, 6000);

  // 2. Prepend to History Feed immediately
  mintHistory.value.unshift(newMintItem);
  if (mintHistory.value.length > 30) {
    mintHistory.value.pop(); // Keep list size under control
  }

  // 3. Save to Firestore in background
  createSimulatedMint(newMintItem).catch(e => console.warn("Firestore save error:", e));
}

// 3. Mounted Hook Integration
onMounted(async () => {
  isWalletConnected.value = getIsConnected();
  walletAddress.value = getAddress();

  listenToWalletStateChange();
  await loadVotes();
  startVoteSimulation();
  startAvailabilityReduction();

  // Load history from DB
  await loadMintHistory();

  // Trigger initial simulated buys on load
  setTimeout(() => {
    const buysOnLoad = Math.floor(Math.random() * 2) + 1;
    for (let i = 0; i < buysOnLoad; i++) {
      setTimeout(() => triggerSystemMint(), i * 2000);
    }
  }, 2000);

  // Interval for periodic background buys
  liveMintInterval = setInterval(() => {
    if (Math.random() > 0.4) {
      triggerSystemMint();
    }
  }, 42000);
});

const showLoading = ref(false)

const auth = useAuth()
const walletAddress = ref('');
const addressSignature = ref(null)
const isWalletConnected = ref(false);
const selectedNft = ref(null)
const nomination = ref(null)
const userNfts = ref([]);
const maxMintCount = ref(1);
const eligibleNftToMint = ref(null)
const walletAddressLoading = ref(true)
const claimedPointsLoading = ref(true)
const nfts = ref([]);

// ---- CONFIG ----
const now = ref(new Date());
const votingEnded = ref(false);
const START_VOTES = 18000;
const TARGET_VOTES = 264831;
const TOTAL_SUPPLY = 431; // available supply
const VOTE_START_DATE = new Date("2025-11-15T20:00:00Z");
const VOTE_END_DATE = new Date("2025-11-25T01:00:00Z");
const AVAILABILITY_START = new Date("2025-11-15T12:00:00Z");
const AVAILABILITY_END = new Date("2025-11-25T20:00:00Z");

// 🎯 DEFINE FINAL ORDER (by nft.id)
const FINISH_ORDER = [
  "nft8", // 🥇
  "nft5", // 🥈
  "nft4", // 🥉
  "nft10",
  "nft6",
  "nft11",
  "nft3",
  "nft7",
  "nft2",
  "nft1"
];

// 🏆 RANK WEIGHTS FOR LARGE GAPS (first ~9, second ~8, last ~1)
const RANK_WEIGHTS = [10, 8, 7, 5, 4, 3, 3, 2, 1, 1];

// 💰 MINT PRICES ALIGNED WITH RANKS (Less items are expensive, more are cheaper)
const MINT_PRICES = [
  0.020, // 🥇 Highly special
  0.018, // 🥈 Very special
  0.016, // 🥉 Special
  0.014,
  0.012,
  0.011,
  0.010, // Bulk of NFTs sit at the lower end
  0.010,
  0.010,
  0.010
];

let availabilityInterval = null;

onMounted(async () => {
  isWalletConnected.value = getIsConnected();
  walletAddress.value = getAddress();

  listenToWalletStateChange();
  await loadVotes();
  startVoteSimulation();
  startAvailabilityReduction();
})

onUnmounted(() => {
  clearInterval(voteInterval);
  if (availabilityInterval) clearInterval(availabilityInterval);
});

async function loadVotes() {
  nfts.value = FINISH_ORDER.map((id, idx) => {
    const nftData = nftList.find(n => n.id === id) || { id, name: `NFT ${id}`, img: "" };
    const votes = Math.floor(Math.random() * 3000 + 500);
    const available = nftData.available;
    const mintPrice = MINT_PRICES[idx] || 0.010;

    return {
      ...nftData,
      votes,
      available,
      initialAvailable: available,
      mintPrice, 
      orderWeight: RANK_WEIGHTS[idx]
    }
  });
}

let voteInterval;
function easeOutQuad(t) { return t < 0 ? 0 : t > 1 ? 1 : 1 - (1 - t) * (1 - t); }

function startVoteSimulation() {
  updateVotes()
  voteInterval = setInterval(() => updateVotes(), 5000);
}

function updateVotes() {
  const nowDate = new Date();
  if (nowDate < VOTE_START_DATE) return;
  if (nowDate >= VOTE_END_DATE) {
    clearInterval(voteInterval);
    finalizeVoting();
    return;
  }

  const totalDuration = VOTE_END_DATE - VOTE_START_DATE;
  const elapsed = nowDate - VOTE_START_DATE;
  const progress = Math.min(elapsed / totalDuration, 1);
  const expectedVotes = START_VOTES + (TARGET_VOTES - START_VOTES) * easeOutQuad(progress);

  const currentTotal = totalVotes.value;
  const toAdd = Math.max(0, Math.round(expectedVotes - currentTotal));
  if (toAdd <= 0) return;

  const weightTotal = nfts.value.reduce((s, n) => s + (n.orderWeight || 1), 0);
  nfts.value.forEach(n => {
    const add = Math.round(toAdd * ((n.orderWeight || 1) / weightTotal) * (0.9 + Math.random() * 0.2));
    n.votes += add;
  });
}

// --- COMPUTED ---
const totalVotes = computed(() => {
  const sum = nfts.value.reduce((s, n) => s + (Number(n.votes) || 0), 0);
  return isNaN(sum) ? 0 : sum;
});

// --- FINALIZATION ---
async function finalizeVoting() {
  clearInterval(voteInterval);
  votingEnded.value = true;

  const sorted = [...nfts.value].sort((a, b) => b.votes - a.votes);
  const top3 = sorted.slice(0, 3);

  try {
    const resultsRef = doc(db, "uht_results", "final_2026");
    await updateDoc(resultsRef, {
      finalizedAt: new Date().toISOString(),
      top3: top3.map(t => ({ id: t.id, name: t.name, votes: t.votes }))
    });
  } catch (e) { console.warn("Could not write final results", e); }
}

function listenToWalletStateChange() {
  subscribeState()?.on('STATE_CHANGED', events => {
    isWalletConnected.value = getIsConnected();
    walletAddress.value = getAddress();
  });
}

function hasMintedNfts(nft) {
  if (!userNfts.value || userNfts.value.length === 0) return false;
  return userNfts.value.some(userNft => userNft.nft.id === nft.id);
}

watch(() => walletAddress.value, async () => {
  if (!walletAddress.value) return;

  nomination.value = await getNomination(walletAddress.value);
  addressSignature.value = await getAddressSignature(walletAddress.value);
  userNfts.value = await getAllNftsForAddress(walletAddress.value);

  walletAddressLoading.value = false
  if (getChainID() != 1) {
    if (window.ethereum) await switchNetwork(1);
    else {
      await disconnectWallet();
      isWalletConnected.value = false;
      walletAddress.value = "";
      alert("Switch to Ethereum Mainnet Network");
    }
    return;
  }
})

const initialLoading = computed(() => {
  return claimedPointsLoading.value || walletAddressLoading.value
})

onMounted(() => {
  initializeHasClaimmedPoints()
})

watch(() => [auth.value.hasClaimedPoints, auth.value.walletAddress], async () => {
  initializeHasClaimmedPoints()
})

async function initializeHasClaimmedPoints() {
  const hasClaimedPoints = auth.value.hasClaimedPoints;

  if (!hasClaimedPoints) {
    claimedPointsLoading.value = false
    return
  }

  eligibleNftToMint.value = await getClaimerNFT(auth.value.walletAddress);
  if (!eligibleNftToMint.value) {
    const randomNumber = Math.floor(Math.random() * nfts.length);

    eligibleNftToMint.value = await createClaimerNfT(auth.value.walletAddress, {
      nftId: nfts[randomNumber].id,
      address: auth.value.walletAddress
    })
  }

  claimedPointsLoading.value = false
}

function scrollUp() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

async function toggleLoadingModal(state, nft) {
  if (state) scrollUp()
  selectedNft.value = nft
  showLoading.value = state;
  if (!state) {
    selectedNft.value = null
    userNfts.value = await getAllNftsForAddress(walletAddress.value);
  }
}

async function mintNFT(nft) {
  toggleLoadingModal(true, nft)
}

// 🟢 Enforcing Eligibility Criteria (100+ points & under max Mint Count)
const isEligible = computed(() => {
  // Checks if the user's logged points is >= 100
  const userHasEnoughPoints = auth.value?.points >= 100;
  
  return userHasEnoughPoints && userNfts.value.length < maxMintCount.value;
})

function startAvailabilityReduction() {
  if (availabilityInterval) clearInterval(availabilityInterval);
  updateAvailability();
  availabilityInterval = setInterval(() => updateAvailability(), 5000);
}

function updateAvailability() {
  const nowDate = new Date();
  if (nowDate < AVAILABILITY_START) return;
  if (nowDate >= AVAILABILITY_END) {
    if (availabilityInterval) clearInterval(availabilityInterval);
    nfts.value.forEach(n => n.available = Math.max(0, Math.floor(n.available)));
    return;
  }

  const totalDuration = AVAILABILITY_END - AVAILABILITY_START;
  const elapsed = nowDate - AVAILABILITY_START;
  const progress = Math.min(elapsed / totalDuration, 1);
  const eased = 1 - Math.pow(1 - progress, 2);

  nfts.value.forEach(n => {
    const reduced = Math.round((n.initialAvailable || 0) * (1 - eased));
    n.available = Math.max(0, reduced);
  });
}
</script>

<style scoped>
.body {
  font-family: Inter, sans-serif;
  color: white;
  background: linear-gradient(180deg, #5b32ff 0%, #6a44ff 50%, #5a3df6 100%);
  min-height: 100vh;
}


/* Toast Animations */
.toast-enter-active,
.toast-leave-active {
  transition: all 0.6s cubic-bezier(0.25, 1, 0.5, 1);
}
.toast-enter-from {
  opacity: 0;
  transform: translateX(-50px) scale(0.9);
}
.toast-leave-to {
  opacity: 0;
  transform: translateY(-20px) scale(0.9);
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
  border-radius: 14px;
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

.access-info h1,
.nft-list h1 {
  font-size: 22px;
  margin-bottom: 14px;
}

.access-card {
  background: rgba(255, 255, 255, .08);
  border: 1px solid rgba(255, 255, 255, .18);
  border-radius: 14px;
  padding: 16px 20px;
  margin-bottom: 24px;
}

.access-card p {
  margin: 8px 0;
}

.warning {
  color: #ff6b6b;
  font-weight: 600;
}

.success {
  color: #4ade80;
  font-weight: 600;
}

.nft-list ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

.nft-card {
  background: rgba(255, 255, 255, .08);
  border: 1px solid rgba(255, 255, 255, .18);
  border-radius: 14px;
  padding: 14px;
  text-align: center;
  transition: transform .1s ease;
}

.nft-card:hover {
  transform: scale(1.03);
}

.nft-image {
  width: 100%;
  border-radius: 10px;
  margin-bottom: 10px;
}

.nft-info h2 {
  font-size: 18px;
  margin-bottom: 6px;
}

.rarity {
  font-weight: 700;
}

.price {
  font-weight: 700;
  color: #ffd700;
}

.mint-btn {
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  border-radius: 10px;
  background: #6a44ff;
  border: none;
  color: white;
  font-weight: 700;
  cursor: pointer;
  transition: background .2s ease;
}

.mint-btn:disabled {
  background: gray;
  cursor: not-allowed;
}

.mint-btn:hover:not(:disabled) {
  background: #4e28d4;
}

footer {
  margin-top: 40px;
  font-size: 13px;
  opacity: .8;
  text-align: center;
}
</style>