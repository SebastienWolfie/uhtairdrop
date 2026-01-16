<template>
  <div class="body"> 
    <DashboardHeader class="md:mx-[10%] mx-[2%] sticky top-[10px] z-50" />
    <!-- HERO -->
    <section
      class="relative text-center py-28 px-6 bg-gradient-to-b from-[#5b32ff]/30 via-[#6a44ff]/20 to-transparent overflow-hidden"
    >
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          class="absolute w-72 h-72 bg-purple-500/20 rounded-full blur-3xl top-20 left-10 animate-pulse-slow"
        ></div>
        <div
          class="absolute w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl bottom-0 right-10 animate-float-slow"
        ></div>
      </div>

      <div class="relative max-w-4xl mx-auto">
        <h1 class="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          <!-- UHT -->
          <span
            class="bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent"
            >Governance Hub</span
          >
        </h1>
        <p class="text-gray-300 mb-10 text-lg md:text-xl leading-relaxed">
          Stake, vote, and shape the future of the UHT ecosystem.<br />
          <span class="text-purple-300">Your UHT, your voice, your power.</span>
        </p>

        <div class="flex justify-center gap-5 flex-wrap">
          <NuxtLink
            to="/dashboard/stake"
            class="px-7 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 shadow-lg shadow-purple-500/30 transition-transform transform hover:-translate-y-1 font-semibold text-white"
          >
            Stake Now
          </NuxtLink>

          <a
            href="#proposals"
            class="px-7 py-3.5 rounded-xl border border-purple-500 hover:bg-purple-600/20 shadow-md hover:shadow-purple-400/20 transition-transform transform hover:-translate-y-1 font-semibold text-white"
          >
            View Proposals
          </a>
        </div>
      </div>
    </section>

    <!-- ABOUT GOVERNANCE -->
    <section
      id="about"
      class="py-24 px-6 text-center bg-gradient-to-b from-transparent to-[#6a44ff]/10"
    >
      <div class="max-w-5xl mx-auto">
        <h2 class="text-4xl font-bold mb-6">About UHT Governance</h2>
        <p class="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
          UHT Governance empowers token holders to take control of the protocol’s
          evolution. By staking <span class="text-purple-400 font-semibold">UNI tokens</span>,
          you gain the right to vote on key proposals, upgrade mechanisms, and community
          initiatives. Participation ensures that power remains decentralized and community-driven.
        </p>
      </div>
    </section>

    <!-- WHY VOTE -->
    <section class="py-24 px-6 bg-[#1a102d]/50 text-center">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold mb-12">Why Your Vote Matters</h2>
        <div class="grid md:grid-cols-3 gap-10">
          <div class="p-6 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition">
            <h3 class="text-xl font-semibold mb-3 text-purple-300">Empower Change</h3>
            <p class="text-gray-400">
              Proposals you vote for can introduce new features, optimize staking rewards, or
              change governance parameters.
            </p>
          </div>
          <div class="p-6 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition">
            <h3 class="text-xl font-semibold mb-3 text-purple-300">Earn Influence</h3>
            <p class="text-gray-400">
              Stakers earn voting power proportional to their commitment, the more you stake,
              the greater your governance impact.
            </p>
          </div>
          <div class="p-6 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition">
            <h3 class="text-xl font-semibold mb-3 text-purple-300">Secure the Ecosystem</h3>
            <p class="text-gray-400">
              Your votes protect against malicious proposals and help ensure that decisions
              reflect long-term sustainability.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- PROPOSALS LIST -->
    <section id="proposals" class="py-24 px-6 bg-gradient-to-b from-[#5b32ff]/10 to-transparent">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-10">Active Proposals</h2>

        <div class="overflow-x-auto">
          <table class="w-full text-left border-separate border-spacing-y-3">
            <thead>
              <tr class="text-gray-300 text-sm uppercase">
                <th class="py-3 px-4">Title</th>
                <!-- <th class="py-3 px-4">Voted</th> -->
                <th class="py-3 px-4">Status</th>
                <th class="py-3 px-4">Start Date</th>
                <th class="py-3 px-4">End Date</th>
                <th class="py-3 px-4"></th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(p, i) in proposals"
                :key="i"
                class="bg-white/5 hover:bg-white/10 transition rounded-xl"
              >
                <td class="py-4 px-4 font-semibold">{{ p.title }}</td>
                <!-- <td class="py-4 px-4">
                  <span
                    :class="p.voted ? 'text-green-400' : 'text-gray-400'"
                    >{{ p.voted ? 'Yes' : 'No' }}</span
                  >
                </td> -->
                <td class="py-4 px-4">
                  <span
                    :class="p.status === 'Completed' ? 'text-purple-300' : 'text-yellow-400'"
                    >{{ p.status }}</span
                  >
                </td>
                <td class="py-4 px-4 text-gray-400">{{ p.start }}</td>
                <td class="py-4 px-4 text-gray-400">{{ p.end }}</td>
                <td class="py-4 px-4">
                  <NuxtLink
                    :to="`/dashboard/governance/proposals/${p.id}`"
                    class="text-purple-200 hover:text-purple-100 font-bold"
                    >View</NuxtLink
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-24 px-6 bg-[#120a24]/70 text-center">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-4xl font-bold mb-10">Frequently Asked Questions</h2>
        <div class="space-y-6 text-left">
          <details
            v-for="(f, i) in faqs"
            :key="i"
            class="bg-white/5 p-5 rounded-xl hover:bg-white/10 transition"
          >
            <summary class="font-semibold cursor-pointer text-purple-300">
              {{ f.q }}
            </summary>
            <p class="mt-3 text-gray-400">{{ f.a }}</p>
          </details>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="py-10 text-center text-gray-400 text-sm bg-[#0c0616]/80 border-t border-white/10">
      © 2025 UHT Governance — Built for the community
    </footer>
  </div>
</template>

<script setup>
const proposals = [
//   {
//     id: 1,
//     title: "Enable Cross-Chain Staking for UHT",
//     voted: true,
//     status: "Ongoing",
//     start: "2025-09-01",
//     end: "2025-09-05",
//   },
  {
    id: 2,
    title: "ASR rewards distribution timing", //pre or post listing
    voted: false,
    status: "Completed",
    start: "2025-10-09",
    end: "2025-10-10",
  },
  {
    id: 3,
    title: "Launch NFT Voting Badge System",
    voted: false,
    status: "Completed",
    start: "2025-10-09",
    end: "2025-10-10",
  },
]

const faqs = [
  {
    q: "What is the purpose of UHT Governance?",
    a: "UHT Governance allows UNI token holders to vote on proposals that shape the platform’s rules, upgrades, and reward systems.",
  },
  {
    q: "How do I participate in voting?",
    a: "Simply stake your UNI tokens and connect your wallet. Once proposals are live, you’ll be eligible to vote based on your staking power.",
  },
  {
    q: "Do I earn rewards for staking?",
    a: "Yes. Staking UNI tokens not only grants governance power but also earns periodic yield distributed to active stakers.",
  },
  {
    q: "What happens when a proposal ends?",
    a: "Once a proposal concludes, the results are finalized and, if approved, executed via smart contracts or community-led action.",
  },
  {
    q: "Can I create a new proposal?",
    a: "Governance members who meet a minimum staking threshold can submit proposals for review and voting.",
  },
]
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
.animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
.animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }

.body {
  color: white;
  background: linear-gradient(180deg, #5b32ff 0%, #6a44ff 50%, #5a3df6 100%);
  font-family: Inter, sans-serif;
}
</style>
