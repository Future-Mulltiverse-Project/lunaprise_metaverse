export {}

declare module '#app' {
  interface NuxtApp {
    $openChat: () => void
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $openChat: () => void
  }
}
