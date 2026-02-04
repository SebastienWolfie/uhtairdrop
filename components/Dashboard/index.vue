<template>
  <div class="body">

    <DashboardHeader class="md:mx-[10%] mx-[2%] sticky top-[10px] z-50" />


    <div class="container">
      <header>
        <div class="uht-mark">
          <!-- Replace the src below with your final exported Season 2 jar logo asset -->
          <img src="https://cdn.jsdelivr.net/gh/tabletophq/hosted-assets/uht-quest-jar-placeholder.png"
            alt="UHT Quest S2 logo" onerror="this.src='https://dummyimage.com/96x96/6a44ff/ffffff&text=UHT'" />
          <div>
            <div class="brand-title">UHT Quest • Season 2</div>
            <span class="badge"><small>Health • Gamified • Airdrop-ready</small></span>
          </div>
        </div>
      </header>

      <section class="hero">
        <div class="hero-card">
          <h1>Earn daily <span
              style="color:#fff; background:linear-gradient(90deg,#fff,#ffe9ff);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent">Health
              Points</span></h1>
          <p class="lead">Earn daily Health points on the UHT reward cycle. To earn points, answer the daily quest
            questions covering quick tips, practical wellness habits, and medical knowledge checks. <strong>Points will
              be converted to UHT at the end of the Season 2 campaign.</strong></p>
          <div class="keyline"></div>
          <div class="cta-row">
            <!-- <button class="btn btn-primary" id="ctaClaim" @click="() => claimButtonClicked()">{{(claimPointsLoading) ? 'Loading...' : 'Claim UHT'}}</button> -->
            <!-- <button
              class="btn btn-primary"
              id="ctaClaim"
              :disabled="
                auth.hasClaimedWelcomeUHT ||
                auth.referrals.length < 2 ||
                !auth.lastAnsweredQuestionID
              "
              @click="toggleClaimModal(true)"
            >
              {{
                auth.hasClaimedWelcomeUHT
                  ? 'Welcome Bonus Claimed'
                  : 'Claim 200 UHT Tokens'
              }}
            </button> -->
            <button
              class="btn btn-primary"
              id="ctaClaim"
              @click="handleClaimClick"
            >
              {{
                auth.hasClaimedWelcomeUHT
                  ? 'Welcome Bonus Claimed'
                  : 'Claim 200 UHT Tokens'
              }}
              <span v-if="auth.referrals.length < 2 || !auth.lastAnsweredQuestionID" class="ml-2">
                🔒
              </span>

            </button>


            <button class="btn btn-ghost" id="ctaJoin" @click="() => joinClicked()">Join Season 2 Waitlist</button>

            <span class="badge" title="Status"><small>Address: <strong>{{ auth.walletAddress?.slice(0, 4) }}...{{
              auth.walletAddress?.slice(auth.walletAddress?.length-4) }}</strong></small></span>

            <div v-if="false">
              <p class="px-4 py-2 rounded-md text-white font-semibold bg-green-600" v-if="auth?.isAirdropEligible">
                ✅ Eligible
              </p>

              <!-- Not Eligible -->
              <p class="px-4 py-2 rounded-md text-white font-semibold bg-red-700" v-else>
                ⚠️ Not Eligible
              </p>
            </div>

          </div>

          <div
            v-if="showRequirements"
            class="mt-3 p-4 rounded-2xl bg-black/40 text-sm"
          >
            <p class="font-semibold mb-2">
              Complete the steps below to unlock your 200 UHT Welcome Bonus:
            </p>

            <ul class="space-y-1">
              <li class="flex items-center gap-2">
                <span
                  :class="auth.referrals.length >= 2 ? 'text-green-400' : 'text-red-400'"
                >
                  {{ auth.referrals.length >= 2 ? '✔' : '✖' }}
                </span>
                Invite at least 2 friends
                <span class="opacity-70">
                  ({{ auth.referrals.length }}/2)
                </span>
              </li>

              <li class="flex items-center gap-2">
                <span
                  :class="auth.lastAnsweredQuestionID ? 'text-green-400' : 'text-red-400'"
                >
                  {{ auth.lastAnsweredQuestionID ? '✔' : '✖' }}
                </span>
                Answer one daily question
              </li>
            </ul>

            <p class="mt-2 text-xs opacity-70">
              Once both are completed, the bonus can be claimed instantly.
            </p>
          </div>

          <div class="stats">
            <div class="stat">
              <div class="label">Points earned</div>
              <div class="num" id="points">{{ auth?.points + referralPoints || 0 }}</div>
            </div>
            <!-- <div class="stat"><div class="label">Streak</div><div class="num" id="streak">0 days</div></div> -->
            <div class="stat">
              <div class="label">Season</div>
              <div class="num">S2</div>
            </div>
          </div>
        </div>

        <div class="jar-wrap">
          <div class="jar">
            <!-- Swap with final purple-background logo if preferred -->
            <img src="/images/uht-jar.jpg" alt="UHT Season 2 Jar Symbol">


          </div>



        </div>


      </section>

      <section class="split">
        <div class="panel question">
          <h3>Question of the day</h3>


          <!-- NORMAL QUESTION FLOW -->
          <div id="qWrap">
            <p id="questionTxt">
              {{ dailyQuestion?.id
                ? dailyQuestion.question
                : 'No question available at the moment. Check back later.' }}
            </p>

            <div
              class="flex flex-wrap gap-[10px] mt-3"
              v-if="dailyQuestion?.id != auth?.lastAnsweredQuestionID"
            >
              <button
                class="btn btn-ghost"
                v-for="option in dailyQuestion?.options"
                :key="option.id"
                :class="{ '!border-[2px] !border-gray-400': myAnswerID === option.id }"
                @click="myAnswerID = option.id"
              >
                {{ option.text }}
              </button>
            </div>

            <div class="text-[16px]" v-else>
              <p>The correct answer:
                {{ dailyQuestion?.options?.find(i => i.id === dailyQuestion.answerID)?.text }}
              </p>
              <p class="mt-1">
                Your answer:
                {{ dailyQuestion?.options?.find(i => i.id === auth?.lastAnswerID)?.text }}
              </p>
            </div>

            <p
              v-if="dailyQuestion?.id && dailyQuestion?.id != auth?.lastAnsweredQuestionID"
              class="bg-purple-500 text-[16px] mt-5 text-white w-fit px-4 py-2 rounded-lg cursor-pointer"
              @click="submitQuestionaire"
            >
              {{ surveyLoading ? 'Loading...' : 'Submit' }}
            </p>
          </div>
        </div>


        <div class="panel">
          <div class="feature"><span class="dot"></span>
            <p><strong>Gamified health</strong> — daily tips, quick quizzes, and medical questions to grow your Health
              IQ.</p>
          </div>
          <div class="feature" style="margin-top:10px"><span class="dot"
              style="background:#7ad7ff;box-shadow:0 0 0 4px rgba(122,215,255,.25)"></span>
            <p><strong>Airdrop-ready</strong> — your points are a key criterion to receive the UHT airdrop at the end of
              Season 2.</p>
          </div>
          <div class="feature" style="margin-top:10px"><span class="dot"
              style="background:#ffd166;box-shadow:0 0 0 4px rgba(255,209,102,.25)"></span>
            <p><strong>Own your streak</strong> — show up daily to multiply rewards and climb tiers.</p>
          </div>
        </div>
      </section>


      <!-- <section class="bonus-claim mt-10">
        <div class="panel">
          <h3 class="text-xl font-bold mb-2">🎁 Bonus Claim: NFT Holder Reward</h3>
          <p class="text-[16px] mb-4">
            If you’ve minted an official <strong>UHT NFT</strong>, you can claim a one-time bonus of
            <strong>200 UHT</strong> tokens as a Season 2 thank-you gift!
          </p>

          <div v-if="auth?.hasMintedNFT">
            <button class="btn btn-primary" :disabled="bonusClaimed || claimingBonus" @click="claimBonus">
              {{ claimingBonus ? 'Processing...' : (bonusClaimed ? 'Bonus Claimed ✅' : 'Claim 1000 UHT') }}
            </button>
          </div>

          <div v-else>
            <p class="text-gray-300 bg-gray-700 rounded-md p-3 mt-3">
              ⚠️ You must mint a UHT NFT before claiming this bonus.
            </p>
          </div>
        </div>
      </section> -->



      <footer>

        © 2025 UHT • Universal Health Token — Building a healthier future together.
      </footer>
    </div>

    <DashboardClaimModal v-if="showClaimModal" @close="() => toggleClaimModal(false)" />

    <DashboardProfileModal v-if="!auth.email" @close="() => toggleProfileModal(false)" />
  </div>
</template>


<script setup>
import { getAddress, getIsConnected, subscribeState, openModal, disconnectWallet, getChainID, switchNetwork } from '../../apiss/web3/walletconnect';
import { getDailyQuestion } from '../../apiss/surveytask'
import { updateSurveyAnswer, updateUserHasClaimedPoints, updateUser, addWalletAddressLowerField } from '../../apiss/profile'
import { mintTokens } from '../../apiss/web3/uhtdex';

const auth = useAuth();
const showClaimModal = ref(false)
const showProfileModal = ref(false)
const dailyQuestion = ref({});
const myAnswerID = ref(0);
const showRequirements = ref(false)
const surveyLoading = ref(false)
const claimButtonDisabled = ref(false);
const gasFee = ref(0.001)
const bonusClaimed = ref(false)
const claimingBonus = ref(false)
const { referralPoints } = referralCompletedPoints()


onMounted(async () => {
  // await addWalletAddressLowerField()
  if (auth.value?.hasClaimedNFTMintBonus) {
    bonusClaimed.value = true
  }
})

watch(() => auth.value?.hasClaimedNFTMintBonus, () => {
  if (auth.value?.hasClaimedNFTMintBonus) {
    bonusClaimed.value = true
  }
})


onMounted(() => {
  getDailyQuestion()
    .then(result => {
      dailyQuestion.value = result;
    })
})

watch(() => myAnswerID.value, () => console.log(myAnswerID.value))

watch(
  () => [auth.value.referrals, auth.value.lastAnsweredQuestionID],
  () => {
    if (auth.value.referrals >= 2 && auth.value.lastAnsweredQuestionID) {
      showRequirements.value = false
    }
  }
)




async function claimBonus() {
  if (claimingBonus.value || bonusClaimed.value) return
  claimingBonus.value = true

  try {
    // ✅ Check if eligible
    if (!auth.value?.hasMintedNFT) {
      alert('You must mint a UHT NFT before claiming this bonus.')
      return
    }

    // 🧠 Simulate or call your backend API here
    // Example: await updateUserHasClaimedBonus(auth.value.walletAddress)
    await updateUser({
      hasClaimedNFTMintBonus: true,
      points: auth.value.points + 1000
    })


    // ✅ Update user points and status
    auth.value.hasClaimedNFTMintBonus = true
    bonusClaimed.value = true

    alert('🎉 Bonus claimed successfully! +1000 UHT added to your balance.')
  } catch (e) {
    console.error(e)
    alert('Something went wrong while claiming your bonus.')
  } finally {
    claimingBonus.value = false
  }
}



function submitQuestionaire() {
  if (surveyLoading.value) return

  if (myAnswerID.value == 0) {
    alert('Please answer the questionn');
    return;
  }
  surveyLoading.value = true

  updateSurveyAnswer(dailyQuestion.value?.id, myAnswerID.value, (myAnswerID.value == dailyQuestion.value?.answerID))
    .finally(() => surveyLoading.value = true)
}


async function claimButtonClicked() {
  // if (auth.value.walletAddress!='0x3E523b008657Fcf301C83F7Bc5444dDAC1AE3ACF') return
  toggleClaimModal(true);
}

function joinClicked() {
  disconnectWallet().then(() => {
    auth.value.walletAddress = '';
    auth.value.isWalletConnected = false;
    auth.value.hasClaimedPoints = false;
    auth.value.points = 0;
    auth.value.lastAnsweredQuestionID = null;
    auth.value.lastAnswerID = null;
    navigateTo('/')
  })
}



function toggleClaimModal(value) {
  scrollUp(value);
  showClaimModal.value = value;
}


function toggleProfileModal(value) {
  scrollUp(value);
  showProfileModal.value = value;
}

function scrollUp(value) {
  if (value) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

const handleClaimClick = () => {
  if (auth.value.hasClaimedWelcomeBonusPoint) return

  if (auth.value.referrals.length >= 2 && auth.value.lastAnsweredQuestionID) {
    toggleClaimModal(true)
  } else {
    showRequirements.value = true
  }
}

</script>



<style scoped>
:root {
  --brand: #6a44ff;
  /* UHT purple base */
  --brand-2: #8358ff;
  /* lighter accent */
  --ink: #0d0d12;
  /* near-black text */
  --text: #f3f4f8;
  /* light text */
  --glass: rgba(255, 255, 255, .08);
  --stroke: rgba(255, 255, 255, .18);
  --card: #ffffff;
  /* plain white for light cards */
  --ok: #31d0aa;
  /* success accent */
  --warn: #ffd166;
  /* warm accent */
}

* {
  box-sizing: border-box
}

.body {
  margin: 0;
  font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
  color: var(--text);
  background:
    radial-gradient(90rem 60rem at 80% -10%, #a88bff20 10%, transparent 60%),
    radial-gradient(80rem 60rem at -10% 100%, #5436ff33 5%, transparent 60%),
    linear-gradient(180deg, #5b32ff 0%, #6a44ff 50%, #5a3df6 100%);
  min-height: 100svh;
  color: white;
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
  gap: 12px
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
  letter-spacing: .4px
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
  opacity: .9
}

.hero {
  display: grid;
  grid-template-columns: 1.1fr .9fr;
  gap: 28px;
  align-items: center;
  margin-top: 8px;
}

@media (max-width: 900px) {
  .hero {
    grid-template-columns: 1fr
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
  letter-spacing: -.02em
}

.lead {
  font-size: clamp(16px, 2.2vw, 18px);
  opacity: .95
}

.keyline {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, .3), transparent);
  margin: 18px 0
}

.cta-row {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 10px
}

.btn {
  appearance: none;
  cursor: pointer;
  padding: 12px 18px;
  border-radius: 14px;
  font-weight: 700;
  letter-spacing: .2px;
  transition: transform .08s ease, box-shadow .2s ease, background .2s ease;
}

.btn-primary {
  background: #fff;
  color: #3e2cff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, .20), 0 0 0 2px rgba(255, 255, 255, .15) inset
}

.btn-primary:hover {
  transform: translateY(-1px)
}

.btn-ghost {
  background: rgba(255, 255, 255, .12);
  color: #fff;
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin-top: 16px
}

@media (max-width:700px) {
  .stats {
    grid-template-columns: 1fr 1fr
  }
}

.stat {
  background: rgba(255, 255, 255, .09);
  border: 1px solid var(--stroke);
  border-radius: 16px;
  padding: 16px
}

.stat .label {
  opacity: .8;
  font-size: 12px
}

.stat .num {
  font-weight: 800;
  font-size: 28px
}

.panel {
  background: rgba(255, 255, 255, .06);
  border: 1px solid var(--stroke);
  border-radius: 18px;
  padding: 22px
}

.split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  margin-top: 18px
}

@media (max-width:900px) {
  .split {
    grid-template-columns: 1fr
  }
}

.question {
  background: #0f0f16;
  border: 1px solid #2b2b3a;
  color: #eaeaf2;
  border-radius: 16px;
  padding: 18px
}

.question h3 {
  margin: 0 0 6px
}

.empty {
  opacity: .75
}

.feature {
  display: flex;
  gap: 12px;
  align-items: flex-start
}

.feature .dot {
  width: 12px;
  height: 12px;
  border-radius: 3px;
  background: var(--ok);
  box-shadow: 0 0 0 4px rgba(49, 208, 170, .25)
}

.feature p {
  margin: 0
}

footer {
  opacity: .8;
  margin: 28px 0 10px;
  font-size: 12px;
  text-align: center
}

/* Tiny flourish on the jar */
.jar-wrap {
  display: flex;
  justify-content: center
}

.jar {
  width: min(400px, 88%);
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
  object-fit: contain
}
</style>