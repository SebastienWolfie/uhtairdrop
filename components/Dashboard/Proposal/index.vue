<template>
  <div
    class="min-h-screen w-full text-white bg-[radial-gradient(1200px_600px_at_30%_0%,#5b3df5_0%,#4a2fe0_35%,#301a9b_100%)]">
    <!-- Top Bar -->

    <DashboardHeader class="md:mx-[10%] mx-[2%] sticky top-[10px] z-50" />


    <!-- Hero / Header -->
    <section class="mx-auto max-w-7xl mt-12 px-6 pt-10">
      <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight">Governance Hub</h1>
      <p class="mt-3 max-w-3xl text-white/80">
        Stake your UHT tokens to gain voting power and help shape the future of global wellness.
      </p>
      <p class="mt-2 text-sm text-white/70">
        Minimum <span class="font-semibold text-white">100 UHT</span> = <span class="font-semibold text-white">100
          Voting Power</span> required to vote.
      </p>

      <!-- Stake Cards -->
      <div class="mt-8 grid gap-6 md:grid-cols-2">
        <StakeCard title="Flexible Stake" subtitle="(24 Hours)" :locked="false" :staked="user.flexibleStaked"
          :stake="stakes.filter(i => i.type == 'flexible')[0] || null" :balance="user.balance" @stakeClicked="stake"
          :stake-loading="stakeLoading" @withdrawClicked="withdrawStake" :withdraw-loading="withdrawLoading" />

        <StakeCard title="Locked Stake" subtitle="(30 Days)" :locked="true" :staked="user.lockedStaked"
          :stake="stakes.filter(i => i.type == 'locked')[0] || null"
          :unlock-in="remainingForIndex(stakes.findIndex(i => i.type == 'locked'))" :balance="user.balance"
          @stakeClicked="stake" :stake-loading="stakeLoading" @withdrawClicked="withdrawStake"
          :withdraw-loading="withdrawLoading" />
      </div>
    </section>





    <!-- ASR Voting Section -->
    <section class="mx-auto max-w-7xl px-6 pt-12 pb-8">
      <div class="mb-6 flex items-end justify-between">
        <div>
          <h2 class="text-2xl font-bold">Governance Poll: Should ASR Rewards Be Distributed?</h2>
          <p class="mt-1 text-sm text-white/70">
            Choose when ASR rewards should be distributed. Requires minimum <strong>10 UHT stake</strong> to
            participate.
          </p>
          <p><small>Minimum 100 UHT staked = 100 Voting Power required to vote.</small></p>
        </div>
      </div>

      <div class="space-y-3">
        <div v-for="option in asrOptions" :key="option.id"
          class="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-sm backdrop-blur-sm">
          <div class="min-w-0 flex-1">
            <div class="flex flex-wrap items-baseline gap-2">
              <h3 class="truncate text-lg font-semibold">{{ option.label }}</h3>
              <span class="text-sm text-white/70">{{ option.votes.toLocaleString() }} votes • {{
                option.percent.toFixed(2) }}%</span>
            </div>
            <div class="mt-2">
              <ProgressBar :value="option.percent" />
            </div>
          </div>
          <button
            class="shrink-0 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow hover:from-blue-400 hover:to-indigo-400"
            @click="voteForAsr(option.id)" :disabled="!canVote || hasVotedAsr || votingEndedAsr">
            {{ asrButtonLabel(option.id) }}
          </button>
        </div>
      </div>

      <!-- ASR Insights -->
      <div class="mt-10 grid gap-4 sm:grid-cols-3">
        <Metric label="Total ASR Votes" :value="asrTotalVotes.toLocaleString()" />
        <Metric label="Pre Listing %" :value="asrOptions[0]?.percent.toFixed(2) + '%'" />
        <Metric label="Post Listing %" :value="asrOptions[1]?.percent.toFixed(2) + '%'" />
      </div>
    </section>







    <!-- Nft Voting Section -->
    <section class="mx-auto max-w-7xl px-6 pb-16 pt-12">
      <div class="mb-6 flex items-end justify-between">
        <div>
          <h2 class="text-2xl font-bold">Cast Your Vote: Choose the Mascot</h2>
          <p class="mt-1 text-sm text-white/70">
            Your voice matters. Each staked UHT gives you equal voting power. Minimum required: 100 UHT.
          </p>
          <p><small>Minimum 100 UHT staked = 100 Voting Power required to vote.</small></p>

        </div>
        <!-- <div class="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90">
          Voting ends in <span class="font-semibold">2h 25m 35s</span>
        </div> -->
      </div>

      <!-- Vertical list proposals -->
      <div class="space-y-3">
        <div v-for="nft in nfts" :key="nft.id"
          class="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-sm backdrop-blur-sm">
          <img :src="nft.img" :alt="nft.name" class="h-14 w-14 rounded-xl object-cover" />
          <div class="min-w-0 flex-1">
            <div class="flex flex-wrap items-baseline gap-2">
              <h3 class="truncate text-lg font-semibold">{{ nft.name }}</h3>
              <span class="text-sm text-white/70">{{ nft.votes.toLocaleString() }} votes • {{ nft.percent.toFixed(2)
              }}%</span>
            </div>
            <div class="mt-2">
              <ProgressBar :value="nft.percent" />
            </div>
          </div>
          <div class="hidden w-24 shrink-0 text-right text-xs text-white/60 sm:block">
            {{ 0 }} left
            <!-- {{ nft.available }} left -->
          </div>
          <button
            class="shrink-0 rounded-xl bg-gradient-to-r from-fuchsia-500 to-purple-500 px-4 py-2 text-sm font-semibold text-white shadow hover:from-fuchsia-400 hover:to-purple-400"
            @click="voteForNft(nft.id)" :disabled="!canVote || hasVoted || votingEnded">
            {{ buttonLabel(nft.id) }}
          </button>
        </div>
      </div>

      <!-- Insights -->
      <div class="mt-10 grid gap-4 sm:grid-cols-3">
        <Metric label="Total Staked" :value="userStake.amount.toLocaleString()" sub="UHT across all voters" />
        <Metric label="Total Votes Cast" :value="totalVotes.toLocaleString()" />
        <Metric label="Next Voting Round" value="TBD" sub="Opens 18:00 UTC" />
      </div>
    </section>

    <div class="h-10" />
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch, onMounted, onUnmounted } from 'vue';
import { deleteStake, getAllStakeByAddress, create as saveStake } from '../../../apiss/stake';
import { mintTokens, transferTokens } from '../../../apiss/web3/uhtdex';
import { db } from "@/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { list as nftList } from "~/apiss/NftDatabase";
import { getVotedNFT, create as saveVotedNFT } from '../../../apiss/nftvoting';
import { getVotedASR, create as saveVotedASR } from '../../../apiss/asrvoting';
import StakeCard from './StakeCard.vue';
import ProgressBar from './ProgressBar.vue';
import Metric from './Metric.vue';

const auth = useAuth();

/* ========== STAKING ========== */
const stakingEnabled = ref(true);
const stakeLoading = ref(false);
const withdrawLoading = ref(false);
const error = ref('');

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
const stakes = ref([]); // { type, amount, start, unlockReady, unlockDate, id }
const hoveredStake = ref(-1);

/* INFO UI */
const showStakeInfo = ref(false);

watch(() => [auth.value.walletAddress, auth.value.uhtbalance], initialize);
watch(() => stakeAmount.value, () => error.value = '');

onMounted(() => {
  initialize()
})
async function initialize() {
  user.walletAddress = auth.value.walletAddress;
  user.balance = Number(auth.value.uhtbalance?.toFixed?.(2) ?? 0);
  user.hashRate = 0;

  // Load stakes
  const stored = await getAllStakeByAddress(auth.value.walletAddress) || [];
  stakes.value = stored.map(s => {
    // compute unlockDate for both flexible (24h) and locked (30d)
    let unlockDate = null;
    if (s.start) {
      const startMs = new window.Date(s.start).getTime();
      if (s.type === 'locked') unlockDate = startMs + 30 * 24 * 60 * 60 * 1000;
      else if (s.type === 'flexible') unlockDate = startMs + 24 * 60 * 60 * 1000; // CHANGED: flexible 24h
    }
    return {
      ...s,
      unlockReady: (() => {
        if (!s.start) return s.type === 'flexible' ? true : false;
        if (!unlockDate) return s.type === 'flexible' ? true : false;
        return window.Date.now() >= unlockDate;
      })(),
      unlockDate: unlockDate ? new window.Date(unlockDate).toString() : null
    };
  });

  user.flexibleStaked = stakes.value.filter(s => s.type === 'flexible').reduce((a, b) => a + b.amount, 0);
  user.lockedStaked = stakes.value.filter(s => s.type === 'locked').reduce((a, b) => a + b.amount, 0);
  user.balance = Math.max(0, user.balance - (user.flexibleStaked + user.lockedStaked));
}

/* Keep hash rate percent logic unchanged */
const currentStaked = computed(() => activeTab.value === 'flexible' ? user.flexibleStaked : user.lockedStaked);
const hashRatePercent = computed(() => {
  const maxStake = (user.balance + user.flexibleStaked + user.lockedStaked) || 1;
  return ((currentStaked.value + stakeAmount.value) / maxStake) * 100;
});

async function stake(amount, type) {
  stakeAmount.value = amount
  activeTab.value = type
  if (stakeAmount.value <= 0 || stakeAmount.value > user.balance) return;

  try {
    stakeLoading.value = true;
    await transferTokens(stakeAmount.value);

    // CHANGED: always set start to record time for unlock calculation (flexible + locked)
    const stakeEntry = {
      type: activeTab.value,
      amount: stakeAmount.value,
      address: auth.value.walletAddress,
      start: new window.Date().toISOString()
    };

    // save and add to local list
    const saved = await saveStake(stakeEntry);
    // ensure we keep id from saved (if available) otherwise fallback
    const entryWithId = { ...stakeEntry, id: saved?.id ?? (stakeEntry.id ?? (Math.random() + Date.now()).toString()) };

    // compute unlock date for UI
    const startMs = new window.Date(entryWithId.start).getTime();
    const unlockDateMs = entryWithId.type === 'locked' ? startMs + 30 * 24 * 60 * 60 * 1000 : startMs + 24 * 60 * 60 * 1000;
    entryWithId.unlockDate = new window.Date(unlockDateMs).toString();
    entryWithId.unlockReady = window.Date.now() >= unlockDateMs;

    stakes.value.push(entryWithId);

    if (activeTab.value === 'flexible') user.flexibleStaked += stakeAmount.value;
    else user.lockedStaked += stakeAmount.value;

    user.balance = Math.max(0, user.balance - stakeAmount.value);
    stakeAmount.value = 0;
  } catch (err) {
    if (err?.info?.error?.code == -32000 || err?.error?.code == -32046) {
      error.value = "Slippage tolerance high. Add Eth to cover gwei charge";
    } else if (err?.info?.error?.code == 4001 || err?.info?.error?.code == 5000) {
      error.value = "Transaction rejected";
    } else {
      error.value = "An error occurred";
    }
    console.log(err);
  } finally {
    stakeLoading.value = false;
  }
}



async function withdrawStake(item) {
  const s = item;
  if (!s) return;

  // unified unlock/rejection check for both types
  const startMs = s.start ? new window.Date(s.start).getTime() : null;
  const unlockDateMs = startMs ? (s.type === 'locked' ? startMs + 30 * 24 * 60 * 60 * 1000 : startMs + 24 * 60 * 60 * 1000) : null;
  if (unlockDateMs && window.Date.now() < unlockDateMs) {
    alert("Stake not yet unlocked.");
    return;
  }

  try {
    withdrawLoading.value = index;
    await mintTokens(s.amount, 0.00002);

    user.balance += s.amount;
    if (s.type === 'flexible') user.flexibleStaked -= s.amount;
    else user.lockedStaked -= s.amount;

    await deleteStake(s.id);
    stakes.value.splice(index, 1);
  } catch (err) {
    if (err?.info?.error?.code == -32000 || err?.info?.error?.code == -32046) {
      error.value = "Slippage tolerance high. Add Eth to cover gwei charge";
    } else if (err?.info?.error?.code == 4001 || err?.info?.error?.code == 5000) {
      error.value = "Transaction rejected";
    } else error.value = "An error occured";
    console.log(err);
  } finally {
    withdrawLoading.value = false;
  }
}

/* ========== VOTING ========== */
const START_VOTES = 18000;
const TARGET_VOTES = 264831;
const VOTE_START_DATE = new window.Date("2025-10-09T20:00:00Z");
const VOTE_END_DATE = new window.Date("2025-10-10T01:00:00Z");
const AVAILABILITY_START = new window.Date("2025-10-09T12:00:00Z");
const AVAILABILITY_END = new window.Date("2025-10-10T20:00:00Z");

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
const RANK_WEIGHTS = [10, 8, 7, 5, 4, 3, 3, 2, 1, 1];

const nfts = ref([]);
const hasVoted = ref(false);
const userVotedNft = ref(null);
const votingEnded = ref(false);
const now = ref(new window.Date());

const userStake = ref({ amount: 0, type: null });

const totalVotes = computed(() => {
  const sum = nfts.value.reduce((s, n) => s + (Number(n.votes) || 0), 0);
  return isNaN(sum) ? 0 : sum;
});

const canVote = computed(() => Number(userStake.value.amount) >= 10 && !votingEnded.value);

let voteInterval = null;
let availabilityInterval = null;
const hoveredNft = ref(null);

onMounted(async () => {
  await initializeVoting()
});

watch(() => auth.value.walletAddress, () => initializeVoting())

async function initializeVoting() {
  await loadVotes();

  // load stored vote and stake
  const storedVote = await getVotedNFT(auth.value.walletAddress);
  if (storedVote?.nft) {
    hasVoted.value = true;
    userVotedNft.value = storedVote.nft;
  }
  await syncStakeFromStorage();

  startVoteSimulation();
  startAvailabilityReduction();

  // update timers + cleanup
  const tick = () => now.value = new window.Date();
  const timer = setInterval(tick, 1000);

  onUnmounted(() => {
    clearInterval(timer);
    if (voteInterval) clearInterval(voteInterval);
    if (availabilityInterval) clearInterval(availabilityInterval);
  });
}

watch(() => auth.value.walletAddress, async () => {
  const storedVote = await getVotedNFT(auth.value.walletAddress);
  if (storedVote?.nft) {
    hasVoted.value = true;
    userVotedNft.value = storedVote.nft;
  } else {
    hasVoted.value = false;
    userVotedNft.value = null;
  }
  await syncStakeFromStorage();
});

async function syncStakeFromStorage() {
  const stakesArr = await getAllStakeByAddress(auth.value.walletAddress) || [];
  if (!Array.isArray(stakesArr)) return;
  const totalAmount = stakesArr.reduce((sum, s) => sum + (s.amount || 0), 0);
  const lastType = stakesArr.length ? stakesArr[stakesArr.length - 1].type : null;
  userStake.value = { amount: totalAmount, type: lastType };
}

async function loadVotes() {
  nfts.value = FINISH_ORDER.map((id, idx) => {
    const nftData = nftList.find(n => n.id === id) || { id, name: `NFT ${id}`, img: "" };
    const votes = Math.floor(Math.random() * 3000 + 500);
    return {
      ...nftData,
      votes,
      available: nftData.available ?? 0,
      initialAvailable: nftData.available ?? 0,
      projectedFloor: computeProjectedFloor(votes, TARGET_VOTES),
      orderWeight: RANK_WEIGHTS[idx] ?? 1,
      percent: 0
    };
  });

  updatePercentages();
}

function computeProjectedFloor(votes, denom) {
  const base = 0.15;
  const share = (Number(votes) || 0) / Math.max(Number(denom) || 1, 1);
  return base * (1 + Math.sqrt(share) * 6);
}

function updatePercentages() {
  const total = TARGET_VOTES || 1;
  nfts.value.forEach(n => {
    const v = Number(n.votes) || 0;
    n.percent = (v / total) * 100;
    n.projectedFloor = computeProjectedFloor(v, total);
  });
}

function displayPercent(nft) {
  return isNaN(nft.percent) ? "0%" : nft.percent.toFixed(2) + "%";
}

function formatTime(ms) {
  const totalSec = Math.floor(ms / 1000);
  const h = Math.floor(totalSec / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = totalSec % 60;
  return `${h}h ${m}m ${s}s`;
}

/* helper to format unlock remaining time */
function remainingForIndex(idx) {
  const s = stakes.value[idx];
  if (!s || !s.unlockDate) return 'N/A';
  const nowMs = window.Date.now();
  const unlockMs = new window.Date(s.unlockDate).getTime();
  const diff = Math.max(0, unlockMs - nowMs);
  const totalSec = Math.floor(diff / 1000);
  const h = Math.floor(totalSec / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const sSec = totalSec % 60;
  return `${h}h ${m}m ${sSec}s`;
}



/* wire a fast interval to update unlockReady flags so UI updates in real-time */
let unlockTimer = null;
function startUnlockTimer() {
  if (unlockTimer) clearInterval(unlockTimer);
  unlockTimer = setInterval(() => {
    stakes.value.forEach((st, i) => {
      if (!st.start) return;
      const startMs = new window.Date(st.start).getTime();
      const unlockMs = st.type === 'locked' ? startMs + 30 * 24 * 60 * 60 * 1000 : startMs + 24 * 60 * 60 * 1000;
      const ready = window.Date.now() >= unlockMs;
      if (st.unlockReady !== ready) st.unlockReady = ready;
      // ensure unlockDate string exists
      st.unlockDate = new window.Date(unlockMs).toString();
    });
  }, 1000);
}
onMounted(startUnlockTimer);
onUnmounted(() => {
  if (unlockTimer) clearInterval(unlockTimer);
});

/* ------ the rest of your existing voting functions ------ */
async function voteForNft(id) {
  if (hasVoted.value || votingEnded.value) return;

  const stakeAmt = Number(userStake.value.amount || 0);
  const stakeType = userStake.value.type;
  if (stakeAmt < 10) {
    alert("Minimum 10 UHT stake required to vote. Stake via the Stake section above.");
    return;
  }

  const target = nfts.value.find(n => n.id === id);
  if (!target) return;

  updatePercentages();

  hasVoted.value = true;
  userVotedNft.value = id;
  await saveVotedNFT(auth.value.walletAddress, { nft: id, address: auth.value.walletAddress });
}

function buttonLabel(id) {
  if (hasVoted.value) return userVotedNft.value === id ? "You Voted" : "Voting Locked";
  return "Vote";
}

function easeOutQuad(t) { return t < 0 ? 0 : t > 1 ? 1 : 1 - (1 - t) * (1 - t); }

function startVoteSimulation() {
  if (voteInterval) clearInterval(voteInterval);
  updateVotes();
  voteInterval = setInterval(() => updateVotes(), 5000);
}

function updateVotes() {
  const nowDate = new window.Date();
  if (nowDate < VOTE_START_DATE) return;
  if (nowDate >= VOTE_END_DATE) {
    if (voteInterval) clearInterval(voteInterval);
    votingEnded.value = true;
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

async function finalizeVoting() {
  if (voteInterval) clearInterval(voteInterval);
  votingEnded.value = true;

  const sorted = [...nfts.value].sort((a, b) => b.votes - a.votes);
  const top3 = sorted.slice(0, 3);

  try {
    const resultsRef = doc(db, "uht_results", "final_2026");
    await updateDoc(resultsRef, {
      finalizedAt: new window.Date().toISOString(),
      top3: top3.map(t => ({ id: t.id, name: t.name, votes: t.votes }))
    });
  } catch (e) {
    console.warn("Could not write final results", e);
  }

  alert(`Voting ended! 🏁\n1) ${top3[0]?.name}\n2) ${top3[1]?.name}\n3) ${top3[2]?.name}`);
}

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
    // const reduced = Math.round((n.initialAvailable || 0) * (1 - eased));
    // n.available = Math.max(0, reduced);
    n.available = Math.max(0, reduced);
  });
}



//asr logic
/* ========== ASR REWARD VOTING ========== */
const asrOptions = ref([
  { id: "pre", label: "Pre Listing", votes: 0, percent: 0 },
  { id: "post", label: "Post Listing", votes: 0, percent: 0 }
]);

const hasVotedAsr = ref(false);
const userVotedAsr = ref(null);
const votingEndedAsr = ref(false);

const asrTotalVotes = computed(() => {
  const sum = asrOptions.value.reduce((s, o) => s + (o.votes || 0), 0);
  return isNaN(sum) ? 0 : sum;
});

function asrButtonLabel(id) {
  if (hasVotedAsr.value) return userVotedAsr.value === id ? "You Voted" : "Voting Locked";
  return "Vote";
}

async function voteForAsr(id) {
  if (hasVotedAsr.value || votingEndedAsr.value) return;
  const stakeAmt = Number(userStake.value.amount || 0);
  if (stakeAmt < 100) {
    alert("Minimum 100 UHT stake required to vote. Stake via the Stake section above.");
    return;
  }

  const target = asrOptions.value.find(o => o.id === id);
  if (!target) return;

  // optimistic update
  hasVotedAsr.value = true;
  userVotedAsr.value = id;
  await saveVotedNFT(auth.value.walletAddress, { answerID: id, address: auth.value.walletAddress });
  updateAsrPercentages();
}

function updateAsrPercentages() {
  const total = asrTotalVotes.value || 1;
  asrOptions.value.forEach(o => o.percent = (o.votes / total) * 100);
}

function startAsrSimulation() {
  updateAsrVotes();
  setInterval(updateAsrVotes, 5000);
}

function updateAsrVotes() {
  const nowDate = new window.Date();
  if (nowDate < VOTE_START_DATE) return;
  if (nowDate >= VOTE_END_DATE) {
    votingEndedAsr.value = true;
    return;
  }

  const totalDuration = VOTE_END_DATE - VOTE_START_DATE;
  const elapsed = nowDate - VOTE_START_DATE;
  const progress = Math.min(elapsed / totalDuration, 1);
  const expectedVotes = START_VOTES + (TARGET_VOTES - START_VOTES) * easeOutQuad(progress);

  const currentTotal = asrTotalVotes.value;
  const toAdd = Math.max(0, Math.round(expectedVotes - currentTotal));
  if (toAdd <= 0) return;

  // keep ~69% to Pre Listing, ~31% to Post Listing
  const preRatio = 0.69 + (Math.random() - 0.5) * 0.05; // small variance
  const postRatio = 1 - preRatio;

  const preAdd = Math.round(toAdd * preRatio);
  const postAdd = Math.round(toAdd * postRatio);

  asrOptions.value[0].votes += preAdd;
  asrOptions.value[1].votes += postAdd;
  updateAsrPercentages();
}

// Start simulation when component mounts
onMounted(async () => {
  initializeARS()
  startAsrSimulation()
});

watch(() => auth.value.walletAddress, () => initializeARS())

async function initializeARS() {
  const storedVote = await getVotedASR(auth.value.walletAddress);
  if (storedVote?.answerID) {
    hasVotedAsr.value = true;
    userVotedAsr.value = storedVote.answerID;
  } else {
    hasVotedAsr.value = false;
    userVotedAsr.value = null;
  }
}




</script>

<style scoped>
/* Page + container */
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

/* Headers */
.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  border-radius: 12px;
}

.brand-title {
  font-weight: 800;
  font-size: clamp(20px, 3vw, 28px);
}

.badge {
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, .12);
  border: 1px solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(6px);
}

/* Info icon + tooltip (ADDED) */
.info-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
}

.info-btn {
  width: 34px;
  height: 34px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  color: white;
  border: none;
  font-weight: 700;
  cursor: pointer;
}

.info-tooltip {
  position: absolute;
  right: 0;
  top: 42px;
  width: 320px;
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.06);
  padding: 12px;
  border-radius: 8px;
  z-index: 60;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.6);
}

/* Staking */
.locked-alert {
  background: rgba(255, 0, 0, 0.18);
  border: 1px solid rgba(255, 0, 0, 0.28);
  border-radius: 12px;
  padding: 12px;
  margin-bottom: 14px;
  text-align: center;
  font-weight: 700;
}

.staking-tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 14px;
}

.tab-btn {
  flex: 1;
  padding: 10px;
  border-radius: 10px;
  background: transparent;
  border: none;
  font-weight: 700;
  cursor: pointer;
  transition: transform .12s ease;
}

.tab-btn.active {
  background: #7C58F2;
  color: #fff;
  transform: translateY(-2px);
}

.stake-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.stake-info p {
  margin: 4px 0;
  font-weight: 600;
}

.stake-action {
  display: flex;
  gap: 12px;
  align-items: center;
}

.stake-input {
  padding: 10px 14px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.03);
  color: white;
  width: 200px;
}

.stake-btn,
.unstake-btn {
  padding: 8px 16px;
  border-radius: 999px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  background: #7C58F2;
  color: white;
  transition: transform .12s ease, box-shadow .12s ease;
}

.stake-btn[disabled] {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}

.stakes-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
}

.stake-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.04);
  transition: transform .12s ease, box-shadow .12s ease;
}

.stake-item.hovered {
  transform: translateY(-4px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
}

.stake-type {
  font-weight: 800;
  margin-right: 8px;
}

.stake-amount {
  opacity: 0.95;
}

.stake-unlock {
  color: #ffd1d1;
  font-weight: 600;
  font-size: 13px;
  margin-left: 8px;
}

.hashrate-bar {
  height: 12px;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 8px;
  overflow: hidden;
  margin-top: 8px;
}

.progress {
  height: 100%;
  background: rgb(119, 0, 255);
  transition: width .3s ease;
}

/* Voting meta */
.meta-row {
  display: flex;
  gap: 18px;
  margin: 14px 0;
  flex-wrap: wrap;
  align-items: center;
}

/* NFT flat list rows */
.nft-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 12px;
}

.nft-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.03);
  transition: transform .12s ease, background .12s ease;
}

.nft-row:hover {
  transform: translateY(-4px);
  background: rgba(255, 255, 255, 0.02);
}

.nft-row.voted {
  border-left: 4px solid rgba(255, 215, 0, 0.9);
  padding-left: 8px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0.01));
}

.row-left {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
  min-width: 0;
}

.nft-thumb {
  width: 64px;
  height: 64px;
  border-radius: 8px;
  object-fit: cover;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.04);
}

.nft-meta {
  min-width: 0;
  overflow: hidden;
}

.nft-name {
  font-weight: 800;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 8px;
}

.you-voted-badge {
  background: rgba(255, 215, 0, 0.12);
  color: #ffd700;
  padding: 4px 8px;
  border-radius: 999px;
  font-weight: 800;
  font-size: 12px;
  margin-left: 8px;
}

.nft-votes {
  font-size: 13px;
  opacity: 0.9;
  margin-top: 4px;
}

.progress-bar.small {
  height: 6px;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 6px;
  overflow: hidden;
  margin-top: 6px;
  width: 220px;
}

.fill {
  height: 100%;
  background: linear-gradient(90deg, #ffcc70, #ff8177);
  transition: width 0.5s ease;
}

/* right side actions */
.row-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  min-width: 120px;
}

.supply {
  font-weight: 700;
  font-size: 13px;
  opacity: 0.95;
}

.vote-btn {
  padding: 8px 12px;
  border-radius: 10px;
  font-weight: 800;
  background: #6a44ff;
  color: white;
  border: none;
  cursor: pointer;
  transition: transform .12s ease;
}

.vote-btn[disabled] {
  opacity: 0.45;
  cursor: not-allowed;
  transform: none;
}

.vote-btn:not([disabled]):hover {
  transform: translateY(-3px);
}

/* modal */
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 60;
}

.modal {
  background: #0f0b1a;
  padding: 20px;
  border-radius: 12px;
  width: min(560px, 92%);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.04);
}

.modal h3 {
  margin: 0 0 8px 0;
  font-size: 18px;
  color: white;
}

.modal p {
  color: #ddd;
  margin: 6px 0;
}

.modal .warning {
  color: #ffd1d1;
  font-weight: 700;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 12px;
}

.modal-cancel {
  background: transparent;
  color: #ddd;
  border: 1px solid rgba(255, 255, 255, 0.06);
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
}

.modal-confirm {
  background: #7C58F2;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
}

/* small inline explanation style */
.inline-explain {}

/* footer */
.page-footer {
  text-align: center;
  margin-top: 24px;
  opacity: 0.85;
  font-size: 13px;
}

/* responsive adjustments */
@media (max-width:640px) {
  .row-right {
    align-items: flex-start;
  }

  .progress-bar.small {
    width: 140px;
  }

  .nft-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
}
</style>
