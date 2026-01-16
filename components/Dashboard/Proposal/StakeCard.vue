<template>
  <div
    class="group relative flex w-full flex-col gap-4 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] backdrop-blur-xl hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.7)] transition-all duration-300"
  >
    <!-- Header -->
    <div class="flex items-center justify-between">
      <div>
        <h3 class="text-lg font-semibold text-white">
          {{ title }}
          <span class="text-white/70 font-normal">{{ subtitle }}</span>
        </h3>
      </div>

      <div
        :class="[
          'rounded-full px-3 py-1 text-xs font-medium',
          locked
            ? 'bg-yellow-500/20 text-yellow-200'
            : 'bg-indigo-400/20 text-indigo-100'
        ]"
      >
        {{ locked ? 'Locked 30 days' : 'Flexible 24 hours' }}
      </div>
    </div>

    <!-- Stats -->
    <div class="grid grid-cols-2 gap-4 text-white/80">
      <div>
        <div class="text-xs">Current Staked</div>
        <div class="text-xl font-semibold text-white">
          {{ staked.toLocaleString() }} UHT
        </div>
      </div>
      <div class="text-right">
        <div class="text-xs">Voting Power Gained</div>
        <div class="text-xl font-semibold text-white">
          {{ staked.toLocaleString() }}
        </div>
      </div>
    </div>

    <!-- Unlock Info -->
    <div v-if="locked" class="mt-1 text-sm text-white/70">
      Unlocks in: {{ unlockIn }}
    </div>

    <!-- Stake Input -->
    <div class="mt-4" 
        v-if="!staked">
      <label class="text-sm text-white/70 mb-2 block">Amount to Stake</label>
      <div class="flex items-center gap-2">
        <input
          v-model="stakeAmount"
          type="number"
          min="0"
          placeholder="0.00"
          class="flex-1 rounded-xl bg-white/10 border border-white/20 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white/15 transition"
        />
        <button
          @click="maxStake"
          class="px-3 py-2 text-sm rounded-lg bg-purple-600/20 hover:bg-purple-600/40 text-purple-200 font-medium transition"
        >
          Max
        </button>
      </div>
        <p class="text-red-400" v-if="stakeAmount && stakeAmount<100"><small>Minimum stake required to vote is 100 UHT</small></p>
      <p class="text-xs text-white/60 mt-1">Available: {{ balance }} UHT</p>
    </div>

    <!-- CTA -->
    <button
      @click="stakeTokens" 
      v-if="!staked"
      :disabled="stakeAmount <= 0 || stakeAmount > balance"
      class="mt-4 inline-flex items-center justify-center rounded-2xl bg-white/10 px-5 py-3 text-sm font-semibold text-white outline-none ring-1 ring-white/20 transition hover:bg-white/20 hover:scale-[1.02] active:scale-95"
    >
        {{ stakeLoading ? 'Staking...' : (stakeAmount > 0) ? 'Stake' : 'Enter Amount' }}
    </button>

    <!-- CTA -->
    <button
      v-else
      @click="requestWithdraw"
      class="mt-4 inline-flex items-center justify-center rounded-2xl bg-white/10 px-5 py-3 text-sm font-semibold text-white outline-none ring-1 ring-white/20 transition hover:bg-white/20 hover:scale-[1.02] active:scale-95"
    >
        {{ withdrawLoading ? 'Loading...' : (stake?.unlockReady ? 'Withdraw' : 'Locked') }}
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  locked: { type: Boolean, required: true },
  stakeLoading: { type: Boolean, required: true },
  withdrawLoading: { type: Boolean, required: true },
  staked: { type: Number, required: true },
  stake: { type: Object, required: true },
  unlockIn: { type: String, required: false },
  balance: { type: Number, required: true }
})
const emit=defineEmits(['stakeClicked', 'withdrawClicked'])
// user stake amount
const stakeAmount = ref('')

// actions
function maxStake() {
  stakeAmount.value = props.balance
}

function stakeTokens() {
    emit('stakeClicked', stakeAmount.value, props.locked ? 'locked' : 'flexible')
}
function requestWithdraw() {
    emit('withdrawClicked', props.stake)
}
</script>
