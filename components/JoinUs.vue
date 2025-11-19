<template>
    <section class="py-10 space-y-6">
         <div class="flex flex-col lg:flex-row justify-center items-center max-lg:space-y-4 lg:space-x-4 ">
          <div class="text-xs lg:text-sm p-2 px-5 font-semibold text-black bg-[#f7f2e8] cursor-pointer" style="border-radius: 15px; border: #CFB16D solid 3px;">
            LIVE Online & In Person!
          </div>
        </div>
        <h2 class="text-black text-center text-[2rem]  lg:text-5xl font-bold">
          Join Us LIVE
        </h2>
        <div class="flex flex-col lg:flex-row justify-center items-center py-8 lg:space-x-4 text-lg">
          <button   @click.prevent="handleRegisterInvitation" class="bg-[#cfb16d] p-2 text-white cursor-pointer text-sm rounded-lg border-2 border-gold-light">
            Register to receive your Invitation
          </button>
        </div>
        <h2 class="text-black text-center text-[2rem]  lg:text-5xl font-bold">
          LIVE BROADCAST<br /> Online <span class="font-medium">on X.com</span>
        </h2>
        <div class="flex flex-col lg:flex-row justify-center items-center py-8 lg:space-x-4 text-lg">
          <button  @click.prevent="handleRegisterInvitation" class="bg-[#cfb16d] p-2 text-white cursor-pointer text-sm rounded-lg border-2 border-gold-light">
            Register to receive your Invitation
          </button>
        </div>
        <h2 class="text-black text-center text-[2rem]  lg:text-5xl font-medium">
            <span class="font-bold">LIVE</span> in Miami, LA, Dubai,<br /> Tokyo, Germany & Cyprus:
        </h2>
        <section class="relative max-w-7xl mx-auto pt-8">
            <!-- Left Black Fade Effect -->
            <div :class="$style.fadeLeft"></div>
            <All :cards="countries"/>
            <!-- Right Black Fade Effect -->
            <div :class="$style.fadeRight"></div>
        </section>
        <section class="">
         <h2 class="text-black text-center text-[2rem]  lg:text-5xl font-bold">
          You will experience:
        </h2>
      <div class="flex flex-col w-full justify-center mx-auto items-center row px-2 pt-8 max-w-7xl">
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
        <div class="flex flex-col lg:flex-row justify-center items-center pt-10 lg:space-x-4 text-lg">
          <button  @click.prevent="handleRegisterInvitation" class="bg-[#cfb16d] p-2 text-white cursor-pointer text-sm rounded-lg border-2 border-gold-light">
            Register to receive your Invitation
          </button>
        </div>
        <section class="relative max-w-7xl mx-auto pt-8">
            <!-- Left Black Fade Effect -->
            <div :class="$style.fadeLeft"></div>
            <All :cards="spaces"/>
            <!-- Right Black Fade Effect -->
            <div :class="$style.fadeRight"></div>
        </section>
        <Slider />
        <div class="flex flex-col lg:flex-row justify-center items-center py-8 lg:space-x-4 text-lg">
          <button  @click.prevent="handleRegisterInvitation" class="bg-[#cfb16d] p-2 text-white cursor-pointer text-sm rounded-lg border-2 border-gold-light">
            Register to receive your Invitation
          </button>
        </div>
    </section>
</template>
<script lang="ts" setup>
import All from "~/components/All.vue";
import Slider from "~/components/Sliders.vue";
import Space from '~/assets/images/space.png';
  import SpaceBlue from '~/assets/images/space-blue.png';
  import CapeCanaveral from '~/assets/images/cape-canaveral.png';
  import Starbase from '~/assets/images/starbase.png';
  import BlueOrigin from '~/assets/images/blue-origin.jpeg';
  import Galactic from '~/assets/images/galactic.jpeg';
  import LunapriseCape from '~/assets/images/lunaprise-cape.png';
  import LunapriseStarbase from '~/assets/images/lunaprise-starbase.png';
  import LunapriseBlueOrigin from '~/assets/images/lunaprise-blueOrigin.png';
  import VirginGalactic from '~/assets/images/virgin-galactic.png';
  import Mars from '~/assets/images/mars.png';
  import OntoMars from '~/assets/images/onto-mars.png';
  import OntoBlue from '~/assets/images/onto-mars-blue.png';
  import OntoGalactic from '~/assets/images/onto-galactic.png';
  import LunapriseMetaverse from '~/assets/images/lunaprise-metaverse.png';
  import LunapriseMuseum from '~/assets/images/lunaprise-museum.png';
  import LunapriseEXPO from '~/assets/images/lunaprise-expo.png';
  import OntoMarsEXPO from '~/assets/images/ontomars-expo.png';
  import MarsbaseAlpha from '~/assets/images/marsbase-alpha.png';
  import Stargazing from '~/assets/images/stargazing.png';
  import LunapriseStargazing from '~/assets/images/lunaprise-stargazing.jpeg';
  import OntoMarsStargazing from '~/assets/images/ontomars-stargazing.png';
  import Cyprus from "~/assets/images/cyprus.jpeg";
  import Germany from "~/assets/images/germany.jpg";
  import Miami from "~/assets/images/miami.webp";
  import Tokyo from "~/assets/images/tokyo.jpg";
  import LosAngeles from "~/assets/images/losangeles.jpg";
  import Dubai from "~/assets/images/dubai.webp";

const spaces = [
  { name: 'Space EXPO on FXPO', description: 'Future Trends Multivers Space EXPO', category: "Space EXPO on FXPO", image: Space },
  { name: 'Space Blue Offece', description: 'FMRA Tower on FXPO', category: "Space Blue Offece", image: SpaceBlue },
  { name: 'Cape Canaveral Spaceport FXPO', description: 'Space EXPO Spaceport on FXPO', category: "Spaceports", image: CapeCanaveral },
  { name: 'FXPO Starbase on Space EXPO', description: 'Starbase on FXPO Space EXPO', category: "Spaceports", image: Starbase },
  { name: 'BlueOrigin Spaceport', description: 'FXPO BlueOrigin Spaceport', category: "Spaceports", image: BlueOrigin },
  { name: 'Virgin Galactic Spaceport', description: 'FXPO Virgin Galactic Spaceports', category: "Spaceports", image: Galactic },
  { name: 'Lunaprise Cape Canaveral Spaceport', description: 'Lunaprise Spaceport on the Moon', category: "Lunaprise Museum", image: LunapriseCape },
  { name: 'Lunaprise Starbase', description: 'Lunaprise Starbase on the Moon', category: "Lunaprise Museum", image: LunapriseStarbase },
  { name: 'Lunaprise BlueOrigin Spaceport', description: 'BlueOrigin Spaceport on the Moon', category: "Spaceports", image: LunapriseBlueOrigin },
  { name: 'Lunaprise Virgin Galactic Spaceport', description: 'Virgin Galactic Spaceport on the Moon', category: "Spaceports", image: VirginGalactic },
  { name: 'Mars Spaceport', description: 'Spaceport on the Mars', category: "Spaceports", image: Mars },
  { name: '#OntoMars Starbase', description: '#OntoMars Starbase Spaceport on Mars', category: "#OntoMars EXPO", image: OntoMars },
  { name: '#OntoMars BlueOrigin Spaceport', description: 'Blue Origin Spaceport on the Mars', category: "#OntoMars EXPO", image: OntoBlue },
  { name: '#OntoMars Virgin Galactic Spaceport', description: 'Virgin Galactic Spaceport on the Mars', category: "#OntoMars EXPO", image: OntoGalactic },
  { name: 'Lunaprise Metaverse', description: 'Lunaprise Metaverse & Museum', category: "Lunaprise Museum", image: LunapriseMetaverse },
  { name: 'Lunaprise Museum', description: 'Lunaprise Museum on the Moon', category: "Lunaprise Museum", image: LunapriseMuseum },
  { name: 'Lunaprise EXPO', description: 'Lunaprise Metaverse & Museum', category: "Lunaprise Museum", image: LunapriseEXPO },
  { name: '#OntoMars EXPO', description: '#OntoMars EXPO on the Mars', category: "#OntoMars EXPO", image: OntoMarsEXPO },
  { name: 'Marsbase Alpha', description: 'On the #OntoMars on Mars', category: "Marsbase Alpha", image: MarsbaseAlpha },
  { name: 'Lunaprise Stargazing Site', description: 'FXPO Lunaprise Stargazing Site', category: "Stargazing Sites", image: Stargazing },
  { name: 'Lunaprise Stargazing Site', description: 'Lunaprise Stargazing Site on the Moon', category: "Stargazing Sites", image: LunapriseStargazing },
  { name: '#OntoMars Stargazing Site', description: '#OntoMars Stargazing Site on the Mars', category: "Stargazing Sites", image: OntoMarsStargazing },

];

const countries = [
  { name: 'Cyprus', description: 'Europe', category: "Space EXPO on FXPO", image: Cyprus },
  { name: 'Germany (Ulm)', description: 'Europe', category: "Space Blue Offece", image: Germany },
  { name: 'Tokyo', description: 'Japan', category: "Spaceports", image: Tokyo },
  { name: 'Los Angeles', description: 'United States of America', category: "Spaceports", image: LosAngeles },
  { name: 'Miami', description: 'United States of America', category: "Spaceports", image: Miami },
  { name: 'Dubai', description: 'United Arab Emirates', category: "Spaceports", image: Dubai },
]
  const error = ref(false)
   function  handleError() {
      error.value = true;
    }

    const { $openChat } = useNuxtApp()

const handleRegisterInvitation = () => {
  // Preferred Nuxt way
  $openChat()

  // Or, if you prefer to follow RYU.md literally:
  // if (window.$chatWidget?.openChat) {
  //   window.$chatWidget.openChat()
  // }
}
</script>
<style lang="scss" module>
/* Left and Right Black Fading Effect */
.fadeLeft, .fadeRight {
  position: absolute;
  top: 0;
  width: 15%;
  height: 100%;
  z-index: 2;
  pointer-events: none;
}

.fadeLeft {
  left: 0;
  background: linear-gradient(to right, rgb(255, 253, 253) 0%, rgba(0, 0, 0, 0) 100%);
}

.fadeRight {
  right: 0;
  background: linear-gradient(to left, rgb(255, 255, 255) 0%, rgba(0, 0, 0, 0) 100%);
}</style>
