
import { updateAppConfig } from '#app/config'
import { defuFn } from 'defu'

const inlineConfig = {
  "nuxt": {
    "buildId": "a448d428-ecfb-4355-b3fb-8db44558779d"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}

import cfg0 from "/Users/icon/ico/uhtairdrop/app.config.ts"

export default /*@__PURE__*/ defuFn(cfg0, inlineConfig)
