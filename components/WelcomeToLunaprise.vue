<template>
    <section class="pt-10 px-4">
      <section class="flex flex-col md:pt-20 justify-center items-center font-satoshi px-2">
        <div class="space-y-8 lg:space-y-10 max-w-7xl container">
            
        <div class="flex flex-col lg:flex-row justify-center items-center max-lg:space-y-4 lg:space-x-4  text-lg">
          <div class="text-sm lg:text-lg p-2 px-5 text-black bg-[#f7f2e8] cursor-pointer" style="border-radius: 15px; border: #CFB16D solid 3px;">
            Welcome to the Future of Space!
          </div>
        </div>

        <h2 class="text-black text-center text-[2rem]  lg:text-5xl">
          <span class="font-bold">Welcome to the</span> <br /> <span class='gold_text font-normal italic font-instrument-serif'>Lunaprise Metaverse</span>.<br />
          <span class="font-bold">Launch Event <span class="italic">11/11/2025</span></span>
        </h2>
        <h3 class="text-gold-light text-center text-lg lg:text-2xl">
          <span class="text-custom-dark">The Partnership between</span><br /> Lunaprise Mission & Museum<span class='text-custom-dark'> & </span>Future Trends Multiverse.
        </h3>
        
        <p class="text-center text-[#707070] text-sm lg:text-lg max-w-5xl mx-auto">
          <!-- The Lunaprise Metaverse is the multidimensional alliance between the Lunaprise Mission & Museum, and the Future Trends Multiverse, bridging Earth, Moon, Mars & the Multiverse through the power of Web4 innovation & space technology. By converging Hyper-Real 3D/XR, AI, Blockchain, and Space infrastructure & assets, it unites art, science, and humanity into a living singularity— empowering pioneers across the world to create, connect, and leave a lasting legacy among the stars.  -->
        </p>
      </div>

      <div class="row pt-8 max-w-7xl mx-auto flex flex-col justify-center items-center container">
          <div ref="videoContainer" class="w-full h-[25rem] lg:h-[40rem] max-sm:overflow-x-hidden rounded-[16px]">
              <iframe
                  id="ytplayer"
                  src="https://www.youtube.com/embed/FtKNhdPGQFk?autoplay=1&mute=0&enablejsapi=1&loop=1&playlist=FtKNhdPGQFk&controls=1&rel=0"
                  frameborder="0"
                  allow="autoplay; fullscreen"
                  class="w-full h-full rounded-[16px] border-4 border-gold-light "
              ></iframe>
          </div>
      </div>
      </section>
        <div class="flex flex-col lg:flex-row justify-center items-center lg:space-x-4 pt-8">
          <div class="text-xs lg:text-sm p-2 px-5 font-semibold text-black bg-[#f7f2e8] cursor-pointer" style="border-radius: 10px; border: #CFB16D solid 3px;">
           Join Our LIVE Broadcast:
          </div>
        </div>
        <div class="flex flex-col lg:flex-row justify-center items-center py-8 lg:space-x-4 text-lg">
          <NuxtLink to=""  @click.prevent="$emit('showResults')" class="bg-[#cfb16d] p-2 text-white cursor-pointer text-sm rounded-lg border-2 border-gold-light">
            Register to receive your Invitation
          </NuxtLink>
        </div>
        <p class="text-center text-[#707070] text-sm lg:text-lg max-w-5xl mx-auto pb-8">
          The Lunaprise Metaverse is the multidimensional alliance between the Lunaprise Mission & Museum, and the Future Trends Multiverse, bridging Earth, Moon, Mars & the Multiverse through the power of Web4 innovation & space technology. By converging Hyper-Real 3D/XR, AI, Blockchain, and Space infrastructure & assets, it unites art, science, and humanity into a living singularity— empowering pioneers across the world to create, connect, and leave a lasting legacy among the stars.
        </p>
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
  