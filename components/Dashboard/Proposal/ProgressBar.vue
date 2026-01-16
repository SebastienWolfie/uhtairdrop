<template>
  <div class="h-2 w-full rounded-full bg-white/10 overflow-hidden">
    <div
      class="h-2 rounded-full bg-gradient-to-r from-fuchsia-400 via-violet-400 to-purple-400 transition-all duration-500 ease-out"
      :style="{ width }"
    ></div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  value: {
    type: Number,
    required: true
  }
})

const width = computed(() => `${Math.max(0, Math.min(100, props.value))}%`)
</script>
