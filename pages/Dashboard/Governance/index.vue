<template>
  <div class="body min-h-screen flex flex-col">
    <!-- Header -->
    <DashboardHeader class="md:mx-[10%] mx-[2%] sticky top-[10px] z-50" />

    <!-- COMING SOON -->
    <main class="flex-1 flex items-center justify-center px-6">
      <div class="relative max-w-3xl w-full text-center">

        <!-- Glow effects -->
        <div
          class="absolute -top-24 -left-24 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse-slow"
        ></div>
        <div
          class="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-float-slow"
        ></div>

        <!-- Card -->
        <div
          class="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl"
        >
          <span
            class="inline-block mb-4 px-4 py-1 text-sm font-semibold rounded-full bg-purple-600/20 text-purple-300"
          >
            🚧 Under Development
          </span>

          <h1 class="text-4xl md:text-5xl font-extrabold mb-4">
            Governance Hub
            <span
              class="block bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent"
            >
              Coming Soon
            </span>
          </h1>

          <p class="text-gray-300 text-lg leading-relaxed max-w-xl mx-auto mb-8">
            We’re building a powerful governance system where
            <span class="text-purple-300 font-semibold">UHT holders</span>
            can stake, vote, and shape the future of the ecosystem.
            <br />
            Stay tuned — this feature is launching soon.
          </p>

          <!-- Actions -->
          <div class="flex justify-center gap-4 flex-wrap">
            <!-- <NuxtLink
              to="/dashboard/stake"
              class="px-7 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 shadow-lg shadow-purple-500/30 transition-transform transform hover:-translate-y-1 font-semibold text-white"
            >
              Stake UHT
            </NuxtLink> -->

            <NuxtLink
              to="/dashboard"
              class="px-7 py-3.5 rounded-xl border border-purple-500 hover:bg-purple-600/20 transition-transform transform hover:-translate-y-1 font-semibold text-white"
            >
              Back to Dashboard
            </NuxtLink>
          </div>

          <!-- Footer hint -->
          <p class="mt-8 text-sm text-gray-400">
            Want early access? Active stakers may unlock governance previews.
          </p>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer
      class="py-8 text-center text-gray-400 text-sm bg-[#0c0616]/80 border-t border-white/10"
    >
      © 2025 UHT Governance — Built for the community
    </footer>
  </div>
</template>

<script setup>
// No logic needed for coming soon
</script>

<style scoped>
@keyframes float-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}
@keyframes pulse-slow {
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.05); }
}
.animate-float-slow {
  animation: float-slow 8s ease-in-out infinite;
}
.animate-pulse-slow {
  animation: pulse-slow 6s ease-in-out infinite;
}

.body {
  color: white;
  background: linear-gradient(180deg, #5b32ff 0%, #6a44ff 50%, #5a3df6 100%);
  font-family: Inter, sans-serif;
}
</style>


<!-- <template>
    <div>
        <DashboardGovernance />
    </div>
</template> -->