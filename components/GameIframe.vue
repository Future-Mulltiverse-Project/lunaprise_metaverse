<template>
    <div id="am-container"  ref="arcaneContainer" >
        <div class="iframe-container rounded-2xl">
            <iframe
            src="https://bit.ly/Future_Multiverse_Beta_Test_026"
            :width="width"
            :height="height"
            frameborder="0"
            allowfullscreen
            @error="handleError"
            class="overflow-hidden rounded-[12px]"
            ></iframe>
            <div v-if="error" class="error-message">
            Error loading iframe. Please check your internet connection or contact support.
            </div>
        </div>
    </div>
  </template>
  
  <script>
export default {
  name: 'IframeComponent',
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '600px'
    }
  },
  data() {
    return {
      error: false
    };
  },
  methods: {
    handleError() {
      this.error = true;
    }
  }
};
</script>

<style scoped>
.iframe-container {
  position: relative; /* For positioning the error message */
}

.error-message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: red;
}
</style>