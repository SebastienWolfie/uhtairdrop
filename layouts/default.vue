<template>
  <div>
    <!-- Here nuxt will replace page content -->
    <slot></slot>
  </div>
</template>

<script setup>

useHead({
  title: "UHT",
  link: [{ rel: 'icon', type: 'image/png', href: '/images/uhtlogo.png' }],
  meta: [{ name: 'description', content: 'UHT’s Proof-of-Health protocol transforms how healthcare is delivered—making preventive care accessible, data-driven, and rewarding while empowering a new era of on-chain health innovation.' }]
});
</script>
