<template>
  <div class="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-4 shadow-sm backdrop-blur-sm">
    <span class="text-sm text-white/70">{{ label }}</span>
    <span class="mt-1 text-2xl font-semibold text-white">{{ value }}</span>
    <span v-if="sub" class="text-xs text-white/60">{{ sub }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  label: { type: String, required: true },
  value: { type: String, required: true },
  sub: { type: String, required: false }
})
</script>
