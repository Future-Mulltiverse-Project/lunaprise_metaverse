import { defineNuxtPlugin } from '#app'
import VueChatWidget from 'vue-chat-widget-graceai'
import 'vue-chat-widget-graceai/dist/index.css' // use the same path as your working Vue app

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueChatWidget)
})
