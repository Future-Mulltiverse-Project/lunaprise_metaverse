export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    import('lottie-web').then((lottieModule) => {
      nuxtApp.provide('lottie', lottieModule.default);
    });
  }
});
