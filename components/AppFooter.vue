<template>
    <div class="bg-custom-dark relative">
        <div class="container p-4 flex flex-col sm:flex-row min-h-14 sm:items-center gap-4 sm:gap-10">
            <div class="flex gap-2">
                <NuxtLink class="border-2 border-gold-light rounded-full p-1 cursor-pointer">
                    <TwitterIcon class="w-3 h-3 fill-white bg-transparent"/>
                </NuxtLink>
                <NuxtLink class="border-2 border-gold-light rounded-full p-1 cursor-pointer">
                    <FacebookIcon class="w-3 h-3 fill-white bg-transparent"/>
                </NuxtLink>
                <NuxtLink class="border-2 border-gold-light rounded-full p-1 cursor-pointer">
                    <LinkedInIcon class="w-3 h-3 fill-white bg-transparent"/>
                </NuxtLink>
                <NuxtLink class="border-2 border-gold-light rounded-full p-1 cursor-pointer">
                    <InstagramIcon class="w-3 h-3 fill-white bg-transparent"/>
                </NuxtLink>
            </div>
            <p class="text-xs text-white font-semibold"><span class="text-gold-light">You are going to enter</span> the Lunaprise Metaverse in the Future Trends Multiverse.<span class="text-gold-light"> All rights reserved. Copyright</span></p>
        </div>
        <div class="absolute bg-custom-dark right-4 bottom-20 md:right-20 md:bottom-10 border-2 border-gold-light rounded-full p-2 cursor-pointer"
             @click="scrollToTop">
            <FooterArrow class="w-4 h-4"/>
        </div>
    </div>
</template>
<script setup>
import TwitterIcon from '~/icons/TwitterIcon.vue';
import FacebookIcon from '~/icons/FacebookIcon.vue';
import InstagramIcon from '~/icons/InstagramIcon.vue';
import LinkedInIcon from '~/icons/LinkedInIcon.vue';
import FooterArrow from '~/icons/FooterArrow.vue';

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

</script>