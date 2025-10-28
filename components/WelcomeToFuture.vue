<template>
    <section :class="$style.section" class="flex flex-col justify-center items-center px-4">
      <section class="pt-16 font-satoshi px-4">
        <div class="space-y-4 container">
            
        <div class="flex flex-col lg:flex-row justify-center items-center max-lg:space-y-4 lg:space-x-4   text-lg">
          <div class="text-sm lg:text-lg p-2 px-5 text-black bg-[#f7f2e8] cursor-pointer" style="border-radius: 15px; border: #CFB16D solid 3px;">
            Welcome to the Future of Space!
          </div>
        </div>

        <h2 class="text-black text-center  text-[2rem]  lg:text-5xl">
          Welcome to the <br /> <span class='gold_text font-normal italic font-instrument-serif'>Lunaprise Metaverse</span>.
        </h2>
        <h3 class="text-gold-light text-center text-lg lg:text-2xl">
          <span class="text-custom-dark">The Partnership between</span><br /> Lunaprise Mission & Museum<span class='text-custom-dark'> & </span>Future Trends Multiverse.
        </h3>
        
        <p class="text-center text-[#707070] text-sm lg:text-lg max-w-5xl mx-auto">
          The Lunaprise Metaverse is the multidimensional alliance between the Lunaprise Mission & Museum, and the Future Trends Multiverse, bridging Earth, Moon, Mars & the Multiverse through the power of Web4 innovation & space technology. By converging Hyper-Real 3D/XR, AI, Blockchain, and Space infrastructure & assets, it unites art, science, and humanity into a living singularity— empowering pioneers across the world to create, connect, and leave a lasting legacy among the stars. 
        </p>
      </div>

      <div class="row pt-8 max-w-7xl flex flex-col justify-center items-center container">
          <div ref="videoContainer" class="w-full h-[25rem] lg:h-[40rem] max-sm:overflow-x-hidden rounded-[8px]">
              <iframe
                  id="ytplayer"
                  src="https://www.youtube.com/embed/cPEQoFOPtl0?autoplay=1&mute=0&enablejsapi=1&loop=1&playlist=cPEQoFOPtl0&controls=1&rel=0"
                  frameborder="0"
                  allow="autoplay; fullscreen"
                  class="w-full h-full rounded-[8px]"
              ></iframe>
          </div>
      </div>
      </section>
        <div class="flex flex-col lg:flex-row justify-center items-center pt-8 lg:space-x-4 text-lg">
          <NuxtLink to=""  @click.prevent="$emit('showResults')" class="bg-[#cfb16d] p-2 text-white cursor-pointer text-sm rounded-lg border-2 border-gold-light">
            Explore our Offers
          </NuxtLink>
        </div>
    </section>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  import { useYoutubeAutoPlayOnView } from '~/composables/useYoutubeAutoPlayOnView';

  const videoContainer = ref<HTMLElement | null>(null);
  useYoutubeAutoPlayOnView('ytplayer', videoContainer);
  
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
  
  </style>
  