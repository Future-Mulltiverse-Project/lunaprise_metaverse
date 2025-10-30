<template>
  <section :class="$style.section">
    <AppWrapper class="py-4 pb-10">
      <div class="row space-y-6">
        <div class="flex flex-col lg:flex-row justify-center items-center max-lg:space-y-4 lg:space-x-4 text-lg">
          <div class="text-sm lg:text-lg p-2 px-5 text-black bg-[#f7f2e8] cursor-pointer" style="border-radius: 15px; border: #CFB16D solid 3px;">
            Featured
          </div>
        </div>

        <h1 class="text-center text-2xl  lg:text-5xl text-black max-lg:text-lg max-w-[50rem] mx-auto">
          <span class="gold_text font-instrument-serif italic">Explore</span> the Lunaprise Metaverse.
        </h1>
        <div class="flex flex-col justify-center items-center">
          <p class="text-center text-[#707070] text-xs lg:text-xl max-w-5xl container mb-8 lg:mb-10">
          Explore the Lunaprise Metaverse — featuring immersive spaces, 
          transformative experiences, visionary creators, rare assets, & exclusive packages,
          all shaping the bridge between Earth, the Future of Humanity & the Multiverse.   
        </p>
         <!-- main tabs -->
         <div class="max-w-xs lg:max-w-xl container overflow-x-auto max-xl:space-x-4 flex items-center p-2 px-4 text-black bg-[#f7f2e8] text-xs lg:text-sm" :class="$style['scrollbar-hidden']" style="border-radius: 14px; border: #CFB16D solid 3px;">
          <!-- Spaces -->
          <div 
            class="flex justify-center text-xs lg:text-sm p-2 px-3 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getMainStyle('Spaces')"
            @click="selectedMainTab('Spaces')"
          >
            Spaces
          </div>

          <!-- Events / Experience -->
          <div 
            class="flex justify-center text-xs lg:text-sm p-2 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getMainStyle('Events / Experience')"
            @click="selectedMainTab('Events / Experience')"
          >
            Events / Experience
          </div>

          <!-- Creators -->
          <div 
            class="flex justify-center text-xs lg:text-sm p-2 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getMainStyle('Creators')"
            @click="selectedMainTab('Creators')"
          >
            Creators
          </div>

          <!-- Assets -->
          <div 
            class="flex justify-center text-xs lg:text-sm p-2 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getMainStyle('Assets')"
            @click="selectedMainTab('Assets')"
          >
            Assets
          </div>

          <!-- Special Offers & Packages -->
          <div 
            class="flex justify-center text-xs lg:text-sm p-2 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getMainStyle('Special Offers & Packages')"
            @click="selectedMainTab('Special Offers & Packages')"
          >
            Special Offers & Packages
        </div>
         </div>
        </div>
 
       <section v-show="selectedMain === 'Spaces'">
          <div class="flex flex-col justify-center items-center">
            <div class="container w-min max-w-full overflow-x-auto justify-between max-xl:space-x-4 mb-8 lg:mb-14 flex items-center p-2 px-4 text-black bg-[#f7f2e8] text-sm" :class="$style['scrollbar-hidden']" style="border-radius: 14px; border: #CFB16D solid 3px;">
          <!-- All -->
          <div 
            class="flex justify-center text-xs lg:text-sm p-2 px-3 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getItemStyle('All')"
            @click="selectItem('All')"
          >
            All
          </div>

          <!-- Space EXPO on FXPO -->
          <div 
            class="flex justify-center text-xs lg:text-sm p-2 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getItemStyle('Space EXPO on FXPO')"
            @click="selectItem('Space EXPO on FXPO')"
          >
            Space EXPO on FXPO
          </div>

          <!-- Spaceports -->
          <div 
            class="flex justify-center text-xs lg:text-sm p-2 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getItemStyle('Spaceports')"
            @click="selectItem('Spaceports')"
          >
            Spaceports
          </div>

          <!-- Lunaprise Museum -->
          <div 
            class="flex justify-center text-xs lg:text-sm p-2 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getItemStyle('Lunaprise Museum')"
            @click="selectItem('Lunaprise Museum')"
          >
            Lunaprise Museum
          </div>

          <!-- Lunaprise EXPO -->
          <div 
            class="flex justify-center text-xs lg:text-sm p-2 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getItemStyle('Lunaprise EXPO')"
            @click="selectItem('Lunaprise EXPO')"
          >
            Lunaprise EXPO
          </div>

          <!-- #OntoMars EXPO -->
          <div 
            class="flex justify-center text-xs lg:text-sm p-2 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getItemStyle('#OntoMars EXPO')"
            @click="selectItem('#OntoMars EXPO')"
          >
            #OntoMars EXPO
          </div>

          <!-- Marsbase Alpha -->
          <div 
            class="flex justify-center text-xs lg:text-sm p-2 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getItemStyle('Marsbase Alpha')"
            @click="selectItem('Marsbase Alpha')"
          >
            Marsbase Alpha
          </div>

          <!-- Stargazing Sites -->
          <div 
            class="flex justify-center text-xs lg:text-sm p-2 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getItemStyle('Stargazing Sites')"
            @click="selectItem('Stargazing Sites')"
          >
            Stargazing Sites
          </div>
            </div>
          </div>

        <AllSlider :selectedItem="selectedItem" :cards="spaces"/>
          
       </section>

       <section v-show="selectedMain === 'Events / Experience'">
          <div class="flex flex-col justify-center items-center">
            <div class="container w-min max-w-full overflow-x-auto justify-between max-xl:space-x-4 mb-8 lg:mb-14 flex items-center p-2 px-4 text-black bg-[#f7f2e8] text-sm" :class="$style['scrollbar-hidden']" style="border-radius: 14px; border: #CFB16D solid 3px;">
          <!-- All -->
          <div 
            class="flex justify-center text-xs lg:text-sm p-2 px-3 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getItemStyle('All')"
            @click="selectItem('All')"
          >
            All
          </div>

          <!-- Connect / Onboard -->
          <div 
            class="flex justify-center text-xs lg:text-sm p-2 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getItemStyle('Connect / Onboard')"
            @click="selectItem('Connect / Onboard')"
          >
            Connect / Onboard
          </div>

          <!-- Purchase Ticket/s or Membership/s -->
          <div 
            class="flex justify-center text-xs lg:text-sm p-2 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getItemStyle('Purchase Ticket/s or Membership/s')"
            @click="selectItem('Purchase Ticket/s or Membership/s')"
          >
            Purchase Ticket/s or Membership/s
          </div>

          <!-- Enter & Experience -->
          <div 
            class="flex justify-center text-xs lg:text-sm p-2 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getItemStyle('Enter & Experience')"
            @click="selectItem('Enter & Experience')"
          >
            Enter & Experience
          </div>
            </div>
          </div>
        <AllSlider :selectedItem="selectedItem" :cards="events"/>
       </section>

       <section v-show="selectedMain === 'Creators'">
          <div class="flex flex-col justify-center items-center">
            <div class="container w-min max-w-full overflow-x-auto justify-between max-xl:space-x-4 mb-8 lg:mb-14 flex items-center p-2 px-4 text-black bg-[#f7f2e8] text-sm" :class="$style['scrollbar-hidden']" style="border-radius: 14px; border: #CFB16D solid 3px;">
          <!-- All -->
          <div 
            class="flex justify-center text-xs lg:text-sm p-2 px-3 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getItemStyle('All')"
            @click="selectItem('All')"
          >
            All
          </div>

          <!-- Lunaprise Mission Artists -->
          <div 
            class="flex justify-center text-xs lg:text-sm p-2 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getItemStyle('Lunaprise Mission Artists')"
            @click="selectItem('Lunaprise Mission Artists')"
          >
            Lunaprise Mission Artists
          </div>
            </div>
          </div>
        <AllSlider :selectedItem="selectedItem" :cards="creators"/>
       </section>

       <section v-show="selectedMain === 'Assets'">
          <div class="flex flex-col justify-center items-center">
            <div class="container w-min max-w-full overflow-x-auto justify-between max-xl:space-x-4 mb-8 lg:mb-14 flex items-center p-2 px-4 text-black bg-[#f7f2e8] text-sm" :class="$style['scrollbar-hidden']" style="border-radius: 14px; border: #CFB16D solid 3px;">
          <!-- All -->
          <div 
            class="flex justify-center text-xs lg:text-sm p-2 px-3 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getItemStyle('All')"
            @click="selectItem('All')"
          >
            All
          </div>

          <!-- Space Plots / RealEstate -->
          <div 
            class="flex justify-center text-xs lg:text-sm p-2 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getItemStyle('Space Plots / RealEstate')"
            @click="selectItem('Space Plots / RealEstate')"
          >
            Space Plots / RealEstate
          </div>

          <!-- Art -->
          <div 
            class="flex justify-center text-xs lg:text-sm p-2 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getItemStyle('Art')"
            @click="selectItem('Art')"
          >
            Art
          </div>

          <!-- Music-->
          <div 
            class="flex justify-center text-xs lg:text-sm p-2 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getItemStyle('Music')"
            @click="selectItem('Music')"
          >
            Music
          </div>

          <!-- Artifacts-->
          <div 
            class="flex justify-center text-xs lg:text-sm p-2 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getItemStyle('Artifacts')"
            @click="selectItem('Artifacts')"
          >
            Artifacts
          </div>

          <!-- Fashion-->
          <div 
            class="flex justify-center text-xs lg:text-sm p-2 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getItemStyle('Fashion')"
            @click="selectItem('Fashion')"
          >
            Fashion
          </div>

          <!-- Technologies-->
          <div 
            class="flex justify-center text-xs lg:text-sm p-2 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getItemStyle('Technologies')"
            @click="selectItem('Technologies')"
          >
            Technologies
          </div>
            </div>
          </div>
        <AllSlider :selectedItem="selectedItem" :cards="assets"/>
       </section>

       <section v-show="selectedMain === 'Special Offers & Packages'">
          <div class="flex flex-col justify-center items-center">
            <div class="container w-min max-w-full overflow-x-auto justify-between max-xl:space-x-4 mb-8 lg:mb-14 flex items-center p-2 px-4 text-black bg-[#f7f2e8] text-sm" :class="$style['scrollbar-hidden']" style="border-radius: 14px; border: #CFB16D solid 3px;">
          <!-- All -->
          <div 
            class="flex justify-center text-xs lg:text-sm p-2 px-3 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getItemStyle('All')"
            @click="selectItem('All')"
          >
            All
          </div>

          <!-- Packages -->
          <div 
            class="flex justify-center text-xs lg:text-sm p-2 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getItemStyle('Packages')"
            @click="selectItem('Packages')"
          >
            Packages
          </div>

          <!-- Assets -->
          <div 
            class="flex justify-center text-xs lg:text-sm p-2 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getItemStyle('Assets')"
            @click="selectItem('Assets')"
          >
            Assets
          </div>

          <!-- Astronauts -->
          <div 
            class="flex justify-center text-xs lg:text-sm p-2 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getItemStyle('Astronauts')"
            @click="selectItem('Astronauts')"
          >
            Astronauts
          </div>

          <!-- Experiences / Events -->
          <div 
            class="flex justify-center text-xs lg:text-sm p-2 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getItemStyle('Experiences / Events')"
            @click="selectItem('Experiences / Events')"
          >
            Experiences / Events
          </div>

          <!-- Avatars -->
          <div 
            class="flex justify-center text-xs lg:text-sm p-2 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getItemStyle('Avatars')"
            @click="selectItem('Avatars')"
          >
            Avatars
          </div>

          <!-- Custom Designs -->
          <div 
            class="flex justify-center text-xs lg:text-sm p-2 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getItemStyle('Custom Designs')"
            @click="selectItem('Custom Designs')"
          >
            Custom Designs
          </div>
            </div>
          </div>
        <AllSlider :selectedItem="selectedItem" :cards="offer"/>
       </section>

      </div>

      <div class="flex justify-center p-4 text-black text-lg md:text-4xl my-8">
        <p class="text-center text-lg md:text-4xl auto max-w-[60rem]">
          "The Future isn't limited by space, nor time. Only by our courage. Everything you can imagine, can be built, and what can be built, can be accelerated!"
        </p>
      </div>

      <div class="flex flex-col lg:flex-row justify-center items-center max-lg:space-y-4 lg:space-x-4 text-sm">
        <div  @click.prevent="$emit('showSupport')" class="bg-[#cfb16d] p-2 text-sm text-white cursor-pointer rounded-lg border-2 border-gold-light">
          Our Offers for You
        </div>
      </div>
      
    </AppWrapper>
  </section>
</template>

  
  <script lang="ts" setup>
  import AllSlider from '~/components/All.vue';
  import AppWrapper from './AppWrapper/ProductsAppWrapper.vue';
  import { ref } from 'vue';
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
  import ConnectOnboard from '~/assets/images/connect-onboard.jpeg';
  import Purchase from '~/assets/images/purchase.jpeg';
  import EnterExperience from '~/assets/images/p5.jpg';
  import Artifacts from '~/assets/images/artifacts.jpeg';
  import Fashion from '~/assets/images/fashion.png';
  import Offers from '~/assets/images/marshmello.jpeg';
  import LunapriseLaunch from '~/assets/images/lunaprise-launch.jpeg';
  import Music from '~/assets/images/music.jpeg';
  import Stan from '~/assets/images/stan.jpeg';
  import Legion from '~/assets/images/legion.jpg';
  import Custom from '~/assets/images/custom.png';
  import FXPO from '~/assets/images/bg4.png';
  import RealEstate from '~/assets/images/realEstate.jpg';
  import Bauma from '~/assets/images/bauma.jpeg';
  import Bhutan from '~/assets/images/bhutan.jpeg';
  import Trust from '~/assets/images/trust.jpg';
  import Luna from '~/assets/images/p5.jpg';
  import FMRA from '~/assets/images/p1.jpg';
  import NewOak from '~/assets/images/newOak.jpg';
  import Django from '~/assets/images/django.jpeg';
  import Marshmello from '~/assets/images/marshmello.jpeg';

// Reactive state to track the selected item
const selectedItem = ref('All');
const selectedMain = ref<string>('Spaces');

// Function to handle item selection
const selectItem = (item: string): void => {
  selectedItem.value = item;
};

const selectedMainTab = (item: string): void => {
  selectedMain.value = item;
}

// Function to dynamically apply styles based on the selected item
const getItemStyle = (item: string): { borderRadius: string; border: string; backgroundColor: string } => {
  return {
    borderRadius: '10px',
    border: selectedItem.value === item ? '#CFB16D solid 3px' : 'none',
    backgroundColor: selectedItem.value === item ? '#fff' : '#f7f2e8',
  };
};

const getMainStyle = (item: string): { borderRadius: string; border: string; backgroundColor: string } => {
  return {
    borderRadius: '10px',
    border: selectedMain.value === item ? '#CFB16D solid 3px' : 'none',
    backgroundColor: selectedMain.value === item ? '#fff' : '#f7f2e8',
  };
};

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

const events = [
  { name: 'Connect / Onboard', description: 'Lunaprise Metaverse', category: "Connect / Onboard", image: ConnectOnboard },
  { name: 'Purchase Tickets / Memberships', description: 'Experience Tickets & Memberships', category: "Purchase Ticket/s or Membership/s", image: Purchase },
  { name: 'Enter & Experience', description: 'Enter & Experience Lunaprise Metaverse', category: "Enter & Experience", image: EnterExperience },
]

const creators = [
  { name: 'Lunaprise Mission Creators', description: 'Moon / Mars & FXPO', category: "Future Trend Multiverse & FXPO", image: LunapriseMuseum },
];

const assets = [
  { name: 'Space Plots / RealEstate', description: 'Space RealEstate Moon / Mars & FXPO', category: "Future Trend Multiverse & FXPO", image: LunapriseEXPO },
  { name: 'Art', description: 'Lunaprise Museum & EXPO', category: "Art", image: EnterExperience },
  { name: 'Artifacts', description: 'Lunaprise x Future Trends Multiverse', category: "Artifacts", image: Artifacts },
  { name: 'Fashion', description: 'Future Trends Multiverse', category: "Fashion", image: Fashion },
  { name: 'Special Offers & Packages', description: 'Lunaprise Metaverse', category: "Special Offers & Packages", image: Offers },
];

const offer = [
  { name: 'Lunaprise Metaverse Launch-Packages', description: 'Exclusive Launch-Packages', category: "Future Trend Multiverse & FXPO", image: LunapriseLaunch },
  { name: 'Space Plots / RealEstate', description: 'Space RealEstate Moon / Mars & FXPO', category: "Future Trend Multiverse & FXPO", image: LunapriseMetaverse },
  { name: 'Art', description: 'Lunaprise Museum & EXPO', category: "Art", image: EnterExperience },
  { name: 'Music', description: 'Lunar Records Music', category: "Finance & Fintech", image: Music },
  { name: 'Artifacts', description: 'Lunaprise x Future Trends Multiverse', category: "Artifacts", image: Artifacts },
  { name: 'Fashion', description: 'Future Trends Multiverse', category: "Fashion", image: Fashion },
  { name: 'Experiences & Events', description: 'Lunaprise Metaverse', category: "LunaPrise Metaverse", image: LunapriseLaunch },
  { name: 'Marshmello', description: 'Dellas Santana x Lunaprise Metaverse', category: "LunaPrise Metaverse", image: Marshmello },
  { name: 'Stan Lee', description: 'Lunaprise x Future Trends Multiverse', category: "Finance & Fintech", image: Stan },
  { name: 'Legion 5', description: 'Stan Lee Super Heros', category: "Finance & Fintech", image: Legion },
  { name: 'KPOP Stars', description: 'Lunaprise x Future Trends Multiverse', category: "LunaPrise Metaverse", image: EnterExperience },
  { name: 'Django', description: 'Future Trends Multiverse', category: "Multiverse Malawi", image: Django },
  { name: 'Custom Design', description: 'Future Trends Multiverse', category: "LunaPrise Metaverse", image: Custom },
];
  </script>
  
  <style lang="scss" module>

    .scrollbar-hidden::-webkit-scrollbar {
    display: none;
    }

    .scrollbar-hidden {
    -ms-overflow-style: none;
    scrollbar-width: none;
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
  