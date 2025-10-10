<template>
  <section :class="$style.section">
    <section class="py-4 pb-10">
      <div class="row space-y-6">
        <div class="flex flex-col lg:flex-row justify-center items-center max-lg:space-y-4 lg:space-x-4 text-lg">
          <div class="text-lg p-2 px-5 text-black bg-[#f7f2e8] cursor-pointer" style="border-radius: 15px; border: #CFB16D solid 3px;">
            Featured Examples
          </div>
        </div>

        <p class="text-center text-base md:text-xl text-black max-lg:text-lg max-w-[50rem] mx-auto">
         Explore examples of the results we created for our partners & clients including Nations, Governments, Industry Leading Organizations, as well as visionary Institutions, Agencies & Individuals, shaping the future with us:
        </p>
         <!-- main tabs -->
         <div class="max-w-xs lg:max-w-lg container overflow-x-auto justify-between max-xl:space-x-4 flex items-center p-2 px-4 text-black bg-[#f7f2e8] text-sm" :class="$style['scrollbar-hidden']" style="border-radius: 14px; border: #CFB16D solid 3px;">
          <!-- Nations -->
          <div 
            class="flex justify-center p-2 px-3 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getMainStyle('Nations')"
            @click="selectedMainTab('Nations')"
          >
            Nations
          </div>

          <!-- Industries -->
          <div 
            class="flex justify-center p-2 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getMainStyle('Industries')"
            @click="selectedMainTab('Industries')"
          >
            Industries
          </div>

          <!-- Events -->
          <div 
            class="flex justify-center p-2 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getMainStyle('Events')"
            @click="selectedMainTab('Events')"
          >
            Events
          </div>

          <!-- Education -->
          <div 
            class="flex justify-center p-2 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getMainStyle('Education')"
            @click="selectedMainTab('Education')"
          >
            Education
          </div>

          <!-- Individuals (Avatars) -->
          <div 
            class="flex justify-center p-2 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getMainStyle('Individuals (Avatars)')"
            @click="selectedMainTab('Individuals (Avatars)')"
          >
            Individuals (Avatars)
        </div>
         </div>

       <section v-show="selectedMain === 'Nations'">
         <div class="container w-min max-w-full overflow-x-auto justify-between max-xl:space-x-4 mb-4 flex items-center p-2 px-4 text-black bg-[#f7f2e8] text-sm" :class="$style['scrollbar-hidden']" style="border-radius: 14px; border: #CFB16D solid 3px;">
          <!-- All -->
          <div 
            class="flex justify-center p-2 px-3 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getItemStyle('All')"
            @click="selectItem('All')"
          >
            All
          </div>

          <!-- Future Trend Multiverse & FXPO -->
          <div 
            class="flex justify-center p-2 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getItemStyle('Future Trend Multiverse & FXPO')"
            @click="selectItem('Future Trend Multiverse & FXPO')"
          >
            Future Trend Multiverse & FXPO
          </div>

          <!-- Multiverse Malawi -->
          <div 
            class="flex justify-center p-2 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getItemStyle('Multiverse Malawi')"
            @click="selectItem('Multiverse Malawi')"
          >
            Multiverse Malawi
          </div>

          <!-- Multiverse Botswana -->
          <div 
            class="flex justify-center p-2 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getItemStyle('Multiverse Botswana')"
            @click="selectItem('Multiverse Botswana')"
          >
            Multiverse Botswana
          </div>

          <!-- Multiverse Hong Kong -->
          <div 
            class="flex justify-center p-2 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getItemStyle('Multiverse Hong Kong')"
            @click="selectItem('Multiverse Hong Kong')"
          >
            Multiverse Hong Kong
          </div>

          <!-- Multiverse Panama -->
          <div 
            class="flex justify-center p-2 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getItemStyle('Multiverse Panama')"
            @click="selectItem('Multiverse Panama')"
          >
            Multiverse Panama
          </div>
         </div>
        
        <AllSlider :selectedItem="selectedItem" :cards="nations"/>
       </section>

       <section v-show="selectedMain === 'Industries'">
         <div class="container w-min max-w-full overflow-x-auto justify-between max-xl:space-x-4 mb-4 flex items-center p-2 px-4 text-black bg-[#f7f2e8] text-sm" :class="$style['scrollbar-hidden']" style="border-radius: 14px; border: #CFB16D solid 3px;">
          <!-- All -->
          <div 
            class="flex justify-center p-2 px-3 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getItemStyle('All')"
            @click="selectItem('All')"
          >
            All
          </div>

          <!-- Energy & Environment -->
          <div 
            class="flex justify-center p-2 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getItemStyle('Energy & Environment')"
            @click="selectItem('Energy & Environment')"
          >
            Energy & Environment
          </div>

          <!-- Real Estate & Construction -->
          <div 
            class="flex justify-center p-2 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getItemStyle('Real Estate & Construction')"
            @click="selectItem('Real Estate & Construction')"
          >
            Real Estate & Construction
          </div>

          <!-- Manufacturing & Logistics -->
          <div 
            class="flex justify-center p-2 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getItemStyle('Manufacturing & Logistics')"
            @click="selectItem('Manufacturing & Logistics')"
          >
            Manufacturing & Logistics
          </div>

          <!-- Education & Tourism -->
          <div 
            class="flex justify-center p-2 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getItemStyle('Education & Tourism')"
            @click="selectItem('Education & Tourism')"
          >
            Education & Tourism
          </div>

          <!-- Health & Wellbeing -->
          <div 
            class="flex justify-center p-2 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getItemStyle('Health & Wellbeing')"
            @click="selectItem('Health & Wellbeing')"
          >
            Health & Wellbeing
          </div>

          <!-- Creative Industries -->
          <div 
            class="flex justify-center p-2 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getItemStyle('Creative Industries')"
            @click="selectItem('Creative Industries')"
          >
            Creative Industries
          </div>

          <!-- Finance & Fintech -->
          <div 
            class="flex justify-center p-2 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getItemStyle('Finance & Fintech')"
            @click="selectItem('Finance & Fintech')"
          >
            Finance & Fintech
          </div>

          <!-- IT & AI -->
          <div 
            class="flex justify-center p-2 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getItemStyle('IT & AI')"
            @click="selectItem('IT & AI')"
          >
            IT & AI
          </div>
        </div>
        
        <AllSlider :selectedItem="selectedItem" :cards="industries"/>
       </section>

       <section v-show="selectedMain === 'Events'">
         <div class="container w-min max-w-full overflow-x-auto justify-between max-xl:space-x-4 mb-4 flex items-center p-2 px-4 text-black bg-[#f7f2e8] text-sm" :class="$style['scrollbar-hidden']" style="border-radius: 14px; border: #CFB16D solid 3px;">
          <!-- All -->
          <div 
            class="flex justify-center p-2 px-3 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getItemStyle('All')"
            @click="selectItem('All')"
          >
            All
          </div>

          <!-- House of Trust Davos 2025 -->
          <div 
            class="flex justify-center p-2 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getItemStyle('House of Trust Davos 2025')"
            @click="selectItem('House of Trust Davos 2025')"
          >
            House of Trust Davos 2025
          </div>

          <!-- WOW Summit Hong Kong 2025 -->
          <div 
            class="flex justify-center p-2 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getItemStyle('WOW Summit Hong Kong 2025')"
            @click="selectItem('WOW Summit Hong Kong 2025')"
          >
            WOW Summit Hong Kong 2025
          </div>

          <!-- Lunaprise Metaverse launch incl. Stan lee & +KPOP -->
          <div 
            class="flex justify-center p-2 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getItemStyle('Lunaprise Metaverse launch incl. Stan lee & +KPOP')"
            @click="selectItem('Lunaprise Metaverse launch incl. Stan lee & +KPOP')"
          >
            Lunaprise Metaverse launch incl. Stan Lee & +KPOP
          </div>

          <!-- PULA Summit Botswana -->
          <div 
            class="flex justify-center p-2 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getItemStyle('PULA Summit Botswana')"
            @click="selectItem('PULA Summit Botswana')"
          >
            PULA Summit Botswana
          </div>

          <!-- FESTAC 2024 Kenya -->
          <div 
            class="flex justify-center p-2 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getItemStyle('FESTAC 2024 Kenya')"
            @click="selectItem('FESTAC 2024 Kenya')"
          >
            FESTAC 2024 Kenya
          </div>
        </div>
        
        <AllSlider :selectedItem="selectedItem" :cards="events"/>
       </section>

       <section v-show="selectedMain === 'Education'">
         <div class="container w-min max-w-full overflow-x-auto justify-between max-xl:space-x-4 mb-4 flex items-center p-2 px-4 text-black bg-[#f7f2e8] text-sm" :class="$style['scrollbar-hidden']" style="border-radius: 14px; border: #CFB16D solid 3px;">
          <!-- All -->
          <div 
            class="flex justify-center p-2 px-3 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getItemStyle('All')"
            @click="selectItem('All')"
          >
            All
          </div>

          <!-- Universities -->
          <div 
            class="flex justify-center p-2 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getItemStyle('Universities')"
            @click="selectItem('Universities')"
          >
            Universities
          </div>

          <!-- Museums -->
          <div 
            class="flex justify-center p-2 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getItemStyle('Museums')"
            @click="selectItem('Museums')"
          >
            Museums
          </div>

          <!-- Space Exploration: On-Site & On-Board Launches & Astronaut Trainings-->
          <div 
            class="flex justify-center p-2 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getItemStyle('Space Exploration: On-site')"
            @click="selectItem('Space Exploration: On-site')"
          >
            Space Exploration: On-Site & On-Board Launches & Astronaut Trainings
          </div>
        </div>
        
        <AllSlider :selectedItem="selectedItem" :cards="education"/>
       </section>

       <section v-show="selectedMain === 'Individuals (Avatars)'">
         <div class="container w-min max-w-full overflow-x-auto justify-between max-xl:space-x-4 mb-4 flex items-center p-2 px-4 text-black bg-[#f7f2e8] text-sm" :class="$style['scrollbar-hidden']" style="border-radius: 14px; border: #CFB16D solid 3px;">
          <!-- All -->
          <div 
            class="flex justify-center p-2 px-3 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getItemStyle('All')"
            @click="selectItem('All')"
          >
            All
          </div>

          <!-- Female -->
          <div 
            class="flex justify-center p-2 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getItemStyle('Female')"
            @click="selectItem('Female')"
          >
            Female
          </div>

          <!-- Male -->
          <div 
            class="flex justify-center p-2 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getItemStyle('Male')"
            @click="selectItem('Male')"
          >
            Male
          </div>

          <!-- Astronauts -->
          <div 
            class="flex justify-center p-2 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getItemStyle('Astronauts')"
            @click="selectItem('Astronauts')"
          >
            Astronauts
          </div>

          <!-- Super Heros -->
          <div 
            class="flex justify-center p-2 text-black hover:text-gray-700 cursor-pointer whitespace-nowrap" 
            :style="getItemStyle('Super Heros')"
            @click="selectItem('Super Heros')"
          >
            Super Hero's
          </div>
        </div>
        
        <AllSlider :selectedItem="selectedItem" :cards="individual"/>
       </section>

      </div>

      <div class="flex justify-center p-4 text-black text-lg md:text-4xl mt-8 mb-8">
        <p class="text-center text-lg md:text-4xl auto max-w-[60rem]">
          "The Future isn't limited by space, nor time. Only by our courage. Everything you can imagine, can be built, and what can be built, can be accelerated!"
        </p>
      </div>

      <div class="flex flex-col lg:flex-row justify-center items-center max-lg:space-y-4 lg:space-x-4   text-lg">
        <div  @click.prevent="$emit('goToPricing')" class="bg-[#cfb16d] p-2 cursor-pointer" style="border-radius: 15px; border: #CFB16D solid 3px;">
          Product & Service Packages
        </div>
        <div class="text-lg p-2 text-black bg-white cursor-pointer" style="border-radius: 15px; border: #CFB16D solid 3px;">
          Learn More
        </div>
      </div>
      
    </section>
  </section>
</template>

  
  <script lang="ts" setup>
  import AllSlider from '~/components/All.vue';
  import { ref } from 'vue';
  import Panama from '~/assets/images/digital-panama_1.png';
  import HongKong from '~/assets/images/wow-bg.png';
  import Botswana from '~/assets/images/botswana.jpeg';
  import Malawi from '~/assets/images/digital-malawi.jpeg';
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
const selectedMain = ref<string>('Nations');

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

const nations = [
  { name: 'Multiverse Panama', description: 'Panama in the Multiverse', category: "Multiverse Panama", image: Panama },
  { name: 'Multiverse Hong Kong', description: 'Hong Kong in the Multiverse', category: "Multiverse Hong Kong", image: HongKong },
  { name: 'Multiverse Botswana', description: 'The Future of Botswana in the Multiverse', category: "Multiverse Botswana", image: Botswana },
  { name: 'Multiverse Malawi', description: 'The Future of Malawi in the Multiverse', category: "Multiverse Malawi", image: Malawi },
  { name: 'FXPO', description: 'Future Trends Multiverse & FXPO', category: "Future Trend Multiverse & FXPO", image: FXPO },
];

const industries = [
  { name: 'House of Trust', description: 'YesWeTrust World Event Center', category: "Real Estate & Construction", image: Trust },
  { name: 'FXPO', description: 'Future Trends Multiverse & FXPO', category: "Future Trend Multiverse & FXPO", image: FXPO },
  { name: 'RealEstate Dubai Meydan', description: 'YesWeTrust World Event Center', category: "Real Estate & Construction", image: RealEstate },
  { name: 'BAUMA Liebherr', description: 'YesWeTrust World Event Center', category: "Manufacturing & Logistics", image: Bauma },
  { name: 'Bhutan', description: 'YesWeTrust World Event Center', category: "Health & Wellbeing", image: Bhutan },
  { name: 'LunaPrise Museum', description: 'Lunaprise Multiverse & Museum', category: "Energy & Environment", image: Luna },
  { name: 'FMRA & Law visionary', description: 'Future Trends Multiverse EXPO', category: "Finance & Fintech", image: FMRA },
  { name: 'NewOak EXPO', description: 'NewOak Capital & Partners on the FXPO', category: "Creative Industries", image: NewOak },
  { name: 'Multiverse Hong Kong', description: 'Hong Kong in the Multiverse', category: "Multiverse Hong Kong", image: HongKong },
];

const events = [
  { name: 'FXPO', description: 'Future Trends Multiverse & FXPO', category: "Future Trend Multiverse & FXPO", image: FXPO },
  { name: 'Multiverse Hong Kong', description: 'Hong Kong in the Multiverse', category: "Multiverse Hong Kong", image: HongKong },
  { name: 'LunaPrise Metaverse Launch incl. Stan Lee & KPOP', description: 'FXPO, Moon & Mars', category: "LunaPrise Metaverse Launch incl. Stan Lee & KPOP", image: Luna },
  { name: 'PULA Summit in the Multiverse Botswana', description: 'Global EXOP Botswana', category: "Multiverse Botswana", image: Botswana },
  { name: 'FESTAC Kenya 2024', description: 'Kenya Kisumu', category: "Creative Industries", image: NewOak },
];

const education = [
  { name: 'FXPO', description: 'Future Trends Multiverse & FXPO', category: "Future Trend Multiverse & FXPO", image: FXPO },
  { name: 'LunaPrise Museum', description: 'On the  Moon', category: "Energy & Environment", image: Luna },
  { name: 'Multiverse Malawi', description: 'The Future of Malawi in the Multiverse', category: "Multiverse Malawi", image: Malawi },
  { name: 'LunaPrise Metaverse', description: 'FXPO, Moon & Mars', category: "LunaPrise Metaverse", image: Luna },
];

const individual = [
  { name: 'Nkamba Congo DRC', description: 'Africa EXPO on the FXPO', category: "Future Trend Multiverse & FXPO", image: FXPO },
  { name: 'KPOP Star', description: 'Lunaprise x Future Trends Multiverse', category: "Energy & Environment", image: Luna },
  { name: 'Django', description: 'Lunaprise x Future Trends Multiverse', category: "Multiverse Malawi", image: Django },
  { name: 'Stan Lee', description: 'Future Trends Multiverse EXPO', category: "Finance & Fintech", image: FMRA },
  { name: 'Marshmello', description: 'Dellas Santana x Lunaprise Metaverse', category: "LunaPrise Metaverse", image: Marshmello },
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
  