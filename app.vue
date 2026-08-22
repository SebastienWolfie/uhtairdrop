<template>
  <div>
    <!-- Your existing page content -->
    <div>
      <NuxtPage />
    </div>

    <!-- Permanent Update Modal Overlay -->
    <Teleport to="body">
      <div 
        v-if="showReloadModal" 
        class="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 select-none pointer-events-auto"
      >
        <div class="bg-[#161823] border border-purple-500/30 rounded-2xl p-6 max-w-md w-full text-center shadow-2xl animate-fade-in">
          <div class="text-4xl mb-3">🚀</div>
          <h2 class="text-xl font-bold text-white mb-2">New Update Available!</h2>
          <p class="text-gray-300 text-sm mb-6 leading-relaxed">
            {{ updateMessage }}
          </p>
          <button 
            @click="reloadPage"
            class="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-purple-500/25 active:scale-[0.98]"
          >
            Refresh Now
          </button>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '~/firebase' // Adjust path to your firebase init file

// 💡 Change this string every time you deploy a major UI/App release
const CURRENT_BUILD_VERSION = 'v1.0.1'

const showReloadModal = ref(false)
const updateMessage = ref('We’ve just pushed an update to improve your experience. Please refresh your browser to get the latest features.')
let unsubscribeVersionListener = null

onMounted(() => {
  // Ensure we are client-side to prevent SSR window errors
  if (typeof window === 'undefined') return

  const versionDocRef = doc(db, 'system', 'app_version')

  unsubscribeVersionListener = onSnapshot(versionDocRef, (snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.data()

      // Trigger if remote build version differs from current build OR forceReload flag is true
      const hasNewVersion = data.buildVersion && data.buildVersion !== CURRENT_BUILD_VERSION
      const isForceReload = data.forceReload === true

      if (hasNewVersion || isForceReload) {
        if (data.message) {
          updateMessage.value = data.message
        }
        showReloadModal.value = true
      }
    }
  }, (err) => {
    console.warn('Version listener error:', err)
  })
})

onUnmounted(() => {
  if (unsubscribeVersionListener) {
    unsubscribeVersionListener()
  }
})

function reloadPage() {
  window.location.reload(true)
}

useHead({
  title: "UHT",
  link: [{ rel: 'icon', type: 'image/png', href: '/images/uhtlogo.png' }],
  meta: [{ name: 'description', content: 'UHT’s Proof-of-Health protocol transforms how healthcare is delivered—making preventive care accessible, data-driven, and rewarding while empowering a new era of on-chain health innovation.' }]
});

</script>

