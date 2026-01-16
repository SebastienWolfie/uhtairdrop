<template>
  <div class="body">
    <DashboardHeader class="md:mx-[10%] mx-[2%] sticky top-[10px] z-50" />

    <div class="container">
      <!-- Header -->
      <header>
        <div class="uht-mark">
          <img src="/images/uht-jar.jpg" alt="NFT Minting"
            onerror="this.src='https://dummyimage.com/96x96/6a44ff/ffffff&text=NFT'" />
          <div>
            <div class="brand-title">Exclusive UHT NFTs</div>
            <span class="badge">
              <small>For Top 50 Leaders, Their Nominees & UHT Claimers</small>
            </span>

          </div>
        </div>
      </header>



      <!-- Access Condition -->
      <section class="access-info">
        <h1>Eligibility 🎟️</h1>
        <div class="access-card">
          <p v-if="!isEligible" class="warning">
            🚫 Wallet Ineligible for Minting
            <br />
            <span class="text-white">Only Top 50 nominees and verified UHT Season 2 participants can mint at this
              time.</span>
            <br />
            <span class="text-white">💡 Get nominated by a validator to earn eligibility.</span>
          </p>
          <p v-else class="success">
            ✅ Congratulations! Your wallet is eligible to mint NFTs.
            <br />
            <span v-if="eligibleNftToMint" class="text-white">NFT Mintable - {{
              nfts.find(i => i.id == eligibleNftToMint?.nftId)?.name }}</span>
            <br />
            <small class="text-white">Mint fee - 0.004 - 0.005 ETH</small>
            <br />
            <small class="text-white">You can mint <strong>{{ maxMintCount }} NFT max</strong>.</small>
          </p>
        </div>
      </section>

      <!-- NFT List -->
      <section class="nft-list">
        <h1>Available NFTs</h1>

        <ul>
          <li v-for="(nft, index) in nfts" :key="nft.id" class="nft-card">
            <img :src="nft.img" :alt="nft.name" class="nft-image" />
            <div class="nft-info">
              <h2>{{ nft.name }}</h2>
              <p>Rarity: <span class="rarity">{{ nft.rarity }}</span></p>
              <p>Rank: <span class="rarity">One</span></p>
              <!-- <p>Floor Price: <span class="price">{{ formatPrice(nft.projectedFloor) }}</span></p> Added price -->
              <p>Floor Price: <span class="price">{{ nft.price }} ETH</span></p> <!-- Added price -->
              <!-- <p><span class="price">{{ 0 }} left</span></p> Availability -->
              <!-- <p><span class="price">{{ nft.available }} left</span></p> Availability -->
              <!-- <button
                      class="mint-btn"
                      :disabled="initialLoading || !walletAddress || !isEligible || hasMintedNfts(nft) || (auth.hasClaimedPoints && nft.id != eligibleNftToMint?.nftId)"
                      @click="mintNFT(nft)"
                  >
                      {{ initialLoading ? 'Loading...' : (auth.hasClaimedPoints && nft.id != eligibleNftToMint?.nftId) ? 'Locked' : hasMintedNfts(nft) ? 'Minted' : 'Mint' }}
                  </button> -->
              <!-- <button
                      class="mint-btn"
                      :disabled="initialLoading || !walletAddress || hasMintedNfts(nft) || Number(nft.available)<=0"
                      @click="mintNFT(nft)"
                  >
                      {{ initialLoading ? 'Loading...' : hasMintedNfts(nft) ? 'Minted' : 'Mint' }}
                  </button> -->

              <button class="mint-btn" :disabled="initialLoading || !walletAddress || hasMintedNfts(nft)"
                @click="mintNFT(nft)">
                {{ initialLoading ? 'Loading...' : hasMintedNfts(nft) ? 'Minted' : 'Mint' }}
              </button>
            </div>
          </li>
        </ul>

      </section>

      <footer>
        © 2025 UHT • Universal Health Token — Mint Your NFT Collection.
      </footer>
    </div>


    <DashboardMintLoadingModal v-if="showLoading" :address-signature="addressSignature" :wallet-address="walletAddress"
      :nft="selectedNft" @close="() => toggleLoadingModal(false)" />
  </div>
</template>

<script setup>
import { list as nftList } from '../../../apiss/NftDatabase'
import { getAddress, getIsConnected, subscribeState, openModal, disconnectWallet, getChainID, switchNetwork } from '../../../apiss/web3/walletconnect';
import { create as saveAddressSignature, getAddressSignature, update as updateAddressSignature } from '../../../apiss/web3/walletSignature';
import { getNomination } from '../../../apiss/nominations'
import { getAllNftsForAddress } from '../../../apiss/uhtnftmint'
import { getClaimerNFT, create as createClaimerNfT } from '~/apiss/claimerNft';


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
const now = ref(new window.Date());
const votingEnded = ref(false);
const START_VOTES = 18000;
const TARGET_VOTES = 264831;
const TOTAL_SUPPLY = 431; // available supply
const VOTE_START_DATE = new window.Date("2025-11-15T20:00:00Z");
const VOTE_END_DATE = new window.Date("2025-11-25T01:00:00Z");
const AVAILABILITY_START = new window.Date("2025-11-15T12:00:00Z");
const AVAILABILITY_END = new window.Date("2025-11-25T20:00:00Z");
console.log(AVAILABILITY_END.toDateString())
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

let availabilityInterval = null;

onMounted(async () => {
  isWalletConnected.value = getIsConnected();
  walletAddress.value = getAddress();

  listenToWalletStateChange();
  await loadVotes();
  startVoteSimulation();
  startAvailabilityReduction();

  // if (!walletAddress.value) toggleConnectModal(true)     
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

    return {
      ...nftData,
      votes,
      available,
      initialAvailable: available,
      projectedFloor: computeProjectedFloor(votes, TARGET_VOTES),
      orderWeight: RANK_WEIGHTS[idx]
    }
  });

  updatePercentages();
}



function updatePercentages() {
  const total = TARGET_VOTES || 1;
  nfts.value.forEach(n => {
    const v = Number(n.votes) || 0;
    n.percent = (v / total) * 100;
    n.projectedFloor = computeProjectedFloor(v, total);
  });
}


let voteInterval;
function easeOutQuad(t) { return t < 0 ? 0 : t > 1 ? 1 : 1 - (1 - t) * (1 - t); }

function startVoteSimulation() {
  updateVotes()
  voteInterval = setInterval(() => updateVotes(), 5000);
}


function updateVotes() {
  const nowDate = new window.Date();
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
    n.projectedFloor = computeProjectedFloor(n.votes, TARGET_VOTES);
  });

  updatePercentages();
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
      finalizedAt: new window.Date().toISOString(),
      top3: top3.map(t => ({ id: t.id, name: t.name, votes: t.votes }))
    });
  } catch (e) { console.warn("Could not write final results", e); }

  // alert(`Voting ended! 🏁\n1) ${top3[0].name}\n2) ${top3[1].name}\n3) ${top3[2].name}`);
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

  // walletAddress.value = "0x7c5e1B1524D8d306D5a3285a7c545c9e65912ac4"
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
  console.log(walletAddressLoading.value, claimedPointsLoading.value)
  return claimedPointsLoading.value || walletAddressLoading.value
})


onMounted(() => {
  initializeHasClaimmedPoints()
})


// --- HELPERS ---
function computeProjectedFloor(votes, denom) {
  const base = 0.18;
  const share = (Number(votes) || 0) / Math.max(Number(denom) || 1, 1);
  return base * (1 + Math.sqrt(share) * 6);
}


function formatPrice(p) {
  return isNaN(p) ? "--" : p.toFixed(4) + " ETH";
}

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


const isEligible = computed(() => {
  return true
  return ((nomination.value || auth.value.hasClaimedPoints) && userNfts.value.length < maxMintCount.value)
})





function startAvailabilityReduction() {
  if (availabilityInterval) clearInterval(availabilityInterval);
  updateAvailability();
  availabilityInterval = setInterval(() => updateAvailability(), 5000);
}

function updateAvailability() {
  const nowDate = new window.Date();
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