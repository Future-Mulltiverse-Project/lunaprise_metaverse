<template>
    <section :class="$style.section" class="w-full h-full flex flex-col justify-center items-center" style="padding-left: 16px; padding-right: 16px;">
      <section class="py-16 font-satoshi max-w-7xl">
        <div class="space-y-4 container">
            
        <div class="flex flex-col lg:flex-row justify-center items-center max-lg:space-y-4 lg:space-x-4   text-lg">
          <div class="text-sm lg:text-lg p-2 px-5 text-black bg-[#f7f2e8] cursor-pointer" style="border-radius: 15px; border: #CFB16D solid 3px;">
            Enter & Experience
          </div>
        </div>

        <h2 class="text-black text-center  text-2xl  lg:text-5xl">
          Enter & Experience it <span class='gold_text font-instrument-serif italic font-normal'>yourself</span>.
        </h2>
        
        <p class="text-center text-[#707070] text-xs lg:text-xl max-w-5xl container">
           We partner with visionary creators, leaders, nation & world builders to deliver extraordinary innovation that bridges imagination, technology, & real-world impact.
        </p>
      </div>
      <div class="row pt-8 max-w-7xl">
          <div class="h-[25rem] lg:h-[40rem] container border-4 border-gold-light max-sm:overflow-x-hidden iframe-container rounded-2xl">
            <iframe
            src="https://bit.ly/Future_Multiverse_Beta_Test_026"
            frameborder="0"
            allowfullscreen
            @error="handleError"
            class="overflow-hidden rounded-[12px] h-full w-full"
            ></iframe>
            <div v-if="error" class="error-message">
            Error loading iframe. Please check your internet connection or contact support.
            </div>
          </div>
      </div>


      </section>
    </section>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  const error = ref(false)
   function  handleError() {
      error.value = true;
    }
  </script>
  
  <style lang="scss" module>
.font-pattaya {
    font-family: 'Pattaya', sans-serif;
  }
  .btn {
    float: right;
    color: white;
  }
  .btn_second {
    float: left;
    color: white;
  }
  .section {
    padding: 0px 0 ;
    background-color: #ffffff;
  }

  .header {
    margin-bottom: 55px;
  }
  
  .text {
    margin-bottom: 55px;
  }
  
  .slide {
    width: auto;
  }
  
  .tab {
    padding: 23px 46px  ;
    font-size: 22px;
    cursor: pointer;
    line-height: divide(30, 22);
    user-select: none;
  }
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
  