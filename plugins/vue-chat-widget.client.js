import { defineNuxtPlugin } from '#app'
import VueChatWidget from 'vue-chat-widget-graceai'
import 'vue-chat-widget-graceai/dist/index.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueChatWidget, {
  platform: 'luna'
})

  // Helper to call the underlying chat widget's openChat method
  const openChat = () => {
    const api = nuxtApp.vueApp.config.globalProperties.$chatWidget
    if (api && typeof api.openChat === 'function') {
      api.openChat()
    } else {
      // Optional: debug log if something is off
      console.warn('[RyuChat] Chat widget API not ready')
    }
  }

  nuxtApp.provide('openChat', openChat)

  if (process.client) {
    window.$chatWidget = {
      openChat,
    }
  }
})
