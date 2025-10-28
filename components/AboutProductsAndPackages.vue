<template>
    <section :class="$style.section" class="h-screen w-full font-satoshi"  >
      
      <div class="space-y-4 flex flex-col justify-center items-center h-screen w-full text-center">
        
        <h2 class="text-[3rem] leading-loose lg:text-7xl text-white font-medium" >Ready to create <br/>the <span class="font-instrument-serif italic font-normal text-gold-light">future</span> with us?</h2>

        <div class="max-w-lg">
          <p class="text-white text-md lg:text-lg">
            Join us to experience, pioneer & create the next dimension of space, human kind & global innovation with us, literally impacting history & the future at the same time.
          </p>
        </div>

        <div class="flex flex-col lg:flex-row justify-center items-center max-lg:space-y-4 lg:space-x-4 text-lg">
          <NuxtLink to=""  @click.prevent="$emit('showWelcome')" class="bg-[#cfb16d] p-2 text-white cursor-pointer text-sm rounded-lg border-2 border-gold-light">
            Explore our Offers
          </NuxtLink>
        </div>


      </div>
    </section>
  </template>
  
  <script lang="ts" setup>
 
  </script>
  
  <style lang="scss" module>

.font-seritalic {
    font-family: 'Serifitalic', sans-serif;
}

  .section {
    background-image: url('~/assets/images/background.png');
    background-repeat: no-repeat;
    background-size: cover;
  }
  
  
  </style>
  