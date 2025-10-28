<template>
  <div class="w-full bg-white ">
     <section class="m-0 lg:mt-14">
        <div class="container max-w-7xl mx-auto px-4">
           <div class="text-center space-y-8 max-w-5xl mx-auto bg-white">
              <h1 class="text-black text-center max-w-[40rem] mx-auto  text-[3.5rem]  lg:text-6xl">
                 Our Offers for You
              </h1>
              <p class="max-w-[590px] text-center text-[#707070] text-md lg:text-lg mx-auto">
                 Explore our tailor-cut packages designed to match your unique goals an budget—whether you are an individual creator, an established or emerging company, institution, government or agency
              </p>
           </div>
           <section class="w-full bg-white pb-10 flex justify-center pt-4">
              <div class="p max-w-5xl">
                 <div class="inline-flex items-center p-2 border border-6 border-[#cfb16d] bg-[#f6f1e5] text-gray-700  rounded-2xl" style="border-width: 3px">
                    <button
                       :class="[' rounded-full text-xs lg:text-sm p-1 max-lg:text-sm lg:px-2', activeTab === 'business' ? 'bg-white shadow-sm border-[#cfb16d] ' : 'text-gray-700 border-[#f6f1e5]']"
                       style="border-radius: 0.7rem; border-width: 3px"
                       @click="setActiveTab('business')"
                       >
                        Business
                    </button>
                    <button
                       :class="['text-xs lg:text-sm  rounded-full p-1 max-lg:text-sm lg:px-2', activeTab === 'design' ? 'bg-white shadow-sm border-[#cfb16d] border' : 'text-gray-700 border-[#f6f1e5]']"
                       style="border-radius: 0.7rem; border-width: 3px"
                       @click="setActiveTab('design')"
                       >
                    Design
                    </button>
                    <button
                       :class="['text-xs lg:text-sm  rounded-full p-1 max-lg:text-sm lg:px-2', activeTab === 'memberships' ? 'bg-white shadow-sm border-[#cfb16d] border' : 'text-gray-700 border-[#f6f1e5]']"
                       style="border-radius: 0.7rem; border-width: 3px"
                       @click="setActiveTab('memberships')"
                       >
                    Memberships
                    </button>
                 </div>
              </div>
           </section>

           <div class="w-full max-w-3xl mx-auto rounded-xl overflow-hidden" v-if="activeTab === 'business'">
              <img :src="P1" alt="Modern Office Design" class="w-full h-[400px] object-cover rounded-2xl  border-2 border-[#cfb16d]">
           </div>
           <!-- business Sub-Tabs -->
           <section class="w-full bg-white py-8 flex justify-center" v-if="activeTab === 'business'">
              <div class="p max-w-5xl">
                 <div class="inline-flex items-center p-2 border border-6 border-[#cfb16d] bg-[#f6f1e5] text-gray-700 rounded-2xl" style="border-width: 3px">
                    <!-- <button
                       :class="['border rounded-full text-xs lg:text-sm p-1 max-lg:text-sm lg:px-2', activeTabCorporate === 'pre' ? 'bg-white shadow-sm border-[#cfb16d]' : 'text-gray-700 border-[#f6f1e5]']"
                       style="border-radius: 0.7rem; border-width: 3px"
                       @click="setactiveTabCorporate('pre')"
                       >
                    Pre-launch
                    </button> -->
                    <button
                       :class="['text-xs lg:text-sm rounded-full p-1 max-lg:text-sm lg:px-2', activeTabCorporate === 'pub' ? 'bg-white shadow-sm border-[#cfb16d]' : 'text-gray-700 border-[#f6f1e5]']"
                       style="border-radius: 0.7rem; border-width: 3px"
                       @click="setactiveTabCorporate('pub')"
                       >
                    Public Launch
                    </button>
                 </div>
              </div>
           </section>
           <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 p-2 max-w-4xl mx-auto pt-0" v-if="activeTab === 'business'" >
              <div class="flex justify-center items-center h-full border-4 border-[#cfb16d]">
                 <img :src="P4" alt="Office Design" class="shadow-lg w-full h-full object-cover">
              </div>
              <div class="bg-white rounded-xl p-8 text-center flex flex-col justify-between h-full border-2 border-gray-600 space-y-6 " style="border-radius: 0.5rem;">
                 <div class="space-y-4">
                    <span class="text-sm font-medium text-gray-500 w-full flex items-center justify-center">
                       <div class="border-2 border-[#cfb16d] p-2 py-1" style="border-radius: 0.5rem;">
                          Public Launch
                       </div>
                    </span>
                    <span class="text-sm font-medium text-gray-500 w-full flex items-center justify-center">
                       <div class="border-2 border-[#cfb16d] p-2 py-1" style="border-radius: 0.5rem;">
                          Business Packages
                       </div>
                    </span>
                    <h2 class="text-3xl font-bold text-gray-700">USD $300–$12M</h2>
                    <p class="text-gray-500">/once</p>
                 </div>
                 <ul class="space-y-4 text-gray-900 translate-x-8 max-sm:translate-x-0 text-start">
                    <li class="flex items-center ">
                       best tailor-cut options for your needs & budget
                    </li>
                    <li class="flex items-center ">
                       <i class="fa-solid fa-bolt text-[#cfb16d] mr-2"></i> FMV Passport & SmartWallet
                    </li>
                    <li class="flex items-center">
                       <i class="fa-solid fa-bolt text-[#cfb16d] mr-2"></i> Membership
                    </li>
                    <li class="flex items-center">
                       <i class="fa-solid fa-bolt text-[#cfb16d] mr-2"></i> Economic Space m² (Ownership)
                    </li>
                    <li class="flex items-center">
                       <i class="fa-solid fa-bolt text-[#cfb16d] mr-2"></i> Hyper-Realistic Avatars
                    </li>
                    <li class="flex items-center">
                       <i class="fa-solid fa-bolt text-[#cfb16d] mr-2"></i> Design Packages
                    </li>
                 </ul>
                 <button class="bg-[#cfb16d] text-white px-6 py-3 rounded-xl hover:bg-[#cfb16d] w-full max-lg:px-1" style="border-radius: 0.5rem;">
                 Explore Corporate Packages
                 </button>
              </div>
           </div>

           <div class="w-full max-w-3xl mx-auto rounded-xl overflow-hidden" v-if="activeTab === 'design'">
              <img :src="P5" alt="Modern Office Design" class="w-full h-[400px] object-cover rounded-2xl  border-2 border-[#cfb16d]">
           </div>
           <div class="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-6 max-w-4xl mx-auto h-full " v-if="activeTab === 'design'" >
              <div class="flex justify-center items-center h-full border-4 border-[#cfb16d]" >
                 <img :src="P6" alt="Office Design" class="shadow-lg w-full h-full object-cover">
              </div>
              <div class="bg-white p-8 text-center flex flex-col justify-between h-full border-2 border-gray-600 space-y-6" style="border-radius: 0.5rem;" >
                 <div class="space-y-4">
                    <span class="text-sm font-medium text-gray-500 w-full flex items-center justify-center">
                       <div class="border-2 border-[#cfb16d] p-2 py-1" style="border-radius: 0.5rem;">
                          Public Launch
                       </div>
                    </span>
                    <span class="text-sm font-medium text-gray-500 w-full flex items-center justify-center">
                       <div class="border-2 border-[#cfb16d] p-2 py-1" style="border-radius: 0.5rem;">
                          Design Packages
                       </div>
                    </span>
                    <h2 class="text-2xl font-bold text-gray-700">USD $250–$12M(+Custom)</h2>
                    <p class="text-custom-dark">/transformation</p>
                 </div>
                 <ul class="space-y-4 text-gray-900 translate-x-8 max-sm:translate-x-0 text-start">
                    <li class="flex items-center">
                       best tailor-cut options for your needs & budget
                    </li>
                    <li class="flex items-center">
                       <i class="fa-solid fa-circle-check text-[#cfb16d] mr-2"></i> Revolutionary Web4 Solutions
                    </li>
                    <li class="flex items-center">
                       <i class="fa-solid fa-circle-check text-[#cfb16d] mr-2"></i> Breath Taking Hyper-Realism
                    </li>
                    <li class="flex items-center">
                       <i class="fa-solid fa-circle-check text-[#cfb16d] mr-2"></i> Fully Scallable In-House Production
                    </li>
                    <li class="flex items-center">
                       <i class="fa-solid fa-circle-check text-[#cfb16d] mr-2"></i> Most Cutting-Edge Industry Standards
                    </li>
                    <li class="flex items-center">
                       <i class="fa-solid fa-circle-check text-[#cfb16d] mr-2"></i> Outstanding Delivery Quality & Speed
                    </li>
                    <li class="flex items-center">
                       <i class="fa-solid fa-circle-check text-[#cfb16d] mr-2"></i> Marketing Leading Price / Value
                    </li>
                 </ul>
                 <button class="bg-[#cfb16d] text-white px-6 py-3 w-full max-lg:px-1" style="border-radius: 0.5rem;">
                 Explore Design Packages
                 </button>
              </div>
           </div>

           <div class="w-full max-w-3xl mx-auto rounded-xl overflow-hidden" v-if="activeTab === 'memberships'">
              <img :src="P8" alt="Modern Office Design" class="w-full h-[400px] object-cover rounded-2xl  border-2 border-[#cfb16d]">
           </div>
           <!-- memberships Sub-Tabs -->
           <section class="w-full bg-white py-8 flex justify-center" v-if="activeTab === 'memberships'">
              <div class="p max-w-5xl">
                 <div class="inline-flex items-center p-2 border border-6 border-[#cfb16d] bg-[#f6f1e5] text-gray-700 rounded-2xl" style="border-width: 3px">
                    <!-- <button
                       :class="['border rounded-full text-xs lg:text-sm p-1 max-lg:text-sm lg:px-2', activeTabCorporate === 'pre' ? 'bg-white shadow-sm border-[#cfb16d]' : 'text-gray-700 border-[#f6f1e5]']"
                       style="border-radius: 0.7rem; border-width: 3px"
                       @click="setactiveTabCorporate('pre')"
                       >
                    Pre-launch
                    </button> -->
                    <button
                       :class="['text-xs lg:text-sm rounded-full p-1 max-lg:text-sm lg:px-2', activeTabCorporate === 'pub' ? 'bg-white shadow-sm border-[#cfb16d]' : 'text-gray-700 border-[#f6f1e5]']"
                       style="border-radius: 0.7rem; border-width: 3px"
                       @click="setactiveTabCorporate('pub')"
                       >
                    Public Launch
                    </button>
                 </div>
              </div>
           </section>
           <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto h-full " v-if="activeTab === 'memberships'" >
              <div class="flex justify-center items-center h-full border-4 border-[#cfb16d]" >
                 <img :src="P7" alt="Office Design" class="shadow-lg w-full h-full object-cover">
              </div>
              <div class="bg-white p-8 text-center flex flex-col justify-between h-full border-2 border-gray-600 space-y-6" style="border-radius: 0.5rem;" >
                 <div class="space-y-4">
                    <span class="text-sm font-medium text-gray-500 w-full flex items-center justify-center">
                       <div class="border-2 border-[#cfb16d] p-2 py-1" style="border-radius: 0.5rem;">
                          Public Launch
                       </div>
                    </span>
                    <span class="text-sm font-medium text-gray-500 w-full flex items-center justify-center">
                       <div class="border-2 border-[#cfb16d] p-2 py-1" style="border-radius: 0.5rem;">
                          Memberships
                       </div>
                    </span>
                    <h2 class="text-3xl font-bold text-gray-700">USD $29–$50k+</h2>
                    <p class="text-gray-500">/month</p>
                 </div>
                 <ul class="space-y-4 text-gray-900 translate-x-8 max-sm:translate-x-0 text-start">
                    <li class="flex items-center">
                       <Tag /> best tailor-cut options for your needs & budget
                    </li>
                    <li class="flex items-center font-medium">
                       <Tag /> Presidential / Partner
                    </li>
                    <li class="flex items-center font-medium">
                       <Tag /> Creator / Builder / Explore
                    </li>
                    <li class="flex items-center font-medium">
                       <Tag /> Access to all Platform Features
                    </li>
                    <li class="flex items-center font-medium">
                       <Tag /> (VIP) Academy Access
                    </li>
                    <li class="flex items-center font-medium">
                       <Tag /> Global / National Scalling
                    </li>
                 </ul>
                 <button class="bg-[#cfb16d] text-white px-6 py-3 w-full max-lg:px-1" style="border-radius: 0.5rem;">
                     Explore Design Packages
                 </button>
              </div>
           </div>
        </div>
     </section>
  </div>
</template>

  <script lang="ts" setup>
  import P1 from '~/assets/images/p1.jpg';
  import P4 from '~/assets/images/lunaprise-cape.png';
  import P5 from '~/assets/images/p5.jpg';
  import P6 from '~/assets/images/marshmello.jpeg';
  import P8 from '~/assets/images/connect-onboard.jpeg';
  import P7 from '~/assets/images/purchase.jpeg';
  import { onMounted, ref } from 'vue';
  import lottie from 'lottie-web';
  import type { AnimationItem } from 'lottie-web';
  import Tag from '~/icons/Tag.vue';

const slider = ref<HTMLElement | null>(null);



// Define individual refs for each animation
const astronautSuit = ref<HTMLElement | null>(null)
const attractCustomers = ref<HTMLElement | null>(null)
const cargoOwner = ref<HTMLElement | null>(null)
const commerceShop = ref<HTMLElement | null>(null)
const cyberDevices = ref<HTMLElement | null>(null)
const cyberMonday = ref<HTMLElement | null>(null)
const fingerprint = ref<HTMLElement | null>(null)
const frenchize = ref<HTMLElement | null>(null)
const homeRoll = ref<HTMLElement | null>(null)
const locationPin = ref<HTMLElement | null>(null)
const metaverse = ref<HTMLElement | null>(null)
const shuttleSpaceship = ref<HTMLElement | null>(null)
const sphereReveal = ref<HTMLElement | null>(null)
const squareFootage = ref<HTMLElement | null>(null)
const treePlanting = ref<HTMLElement | null>(null)
const view = ref<HTMLElement | null>(null)
const wiredHover = ref<HTMLElement | null>(null)

// Map refs to their respective JSON files
const animationsMap = [
  { ref: astronautSuit, path: "astronaut_suit.json" },
  { ref: attractCustomers, path: "attract_customers.json" },
  { ref: cargoOwner, path: "cargo_owner.json" },
  { ref: commerceShop, path: "commerce_shop.json" },
  { ref: cyberDevices, path: "cyber_devices.json" },
  { ref: cyberMonday, path: "cyber_monday.json" },
  { ref: fingerprint, path: "fingerprint.json" },
  { ref: frenchize, path: "frenchize.json" },
  { ref: homeRoll, path: "home_roll.json" },
  { ref: locationPin, path: "location_pin.json" },
  { ref: metaverse, path: "metaverse.json" },
  { ref: shuttleSpaceship, path: "shuttle_spaceship.json" },
  { ref: sphereReveal, path: "sphere_reveal.json" },
  { ref: squareFootage, path: "square_footage.json" },
  { ref: treePlanting, path: "tree_planting.json" },
  { ref: view, path: "view.json" },
  { ref: wiredHover, path: "wired_hover.json" }
]

onMounted(() => {
  if (process.client) {
    const animateSlider = (sliderRef: HTMLElement | null) => {
      if (sliderRef) {
        let position = 0;
        const speed = 1;
        const animate = () => {
          position -= speed;
          if (Math.abs(position) >= sliderRef.scrollWidth / 2) {
            position = 0;
          }
          sliderRef.style.transform = `translateX(${position}px)`;
          requestAnimationFrame(animate);
        };
        animate();
      }
    };

    animateSlider(slider.value);

    animationsMap.forEach(({ ref, path }) => {
      if (ref.value) {
        lottie.loadAnimation({
          container: ref.value,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path: `/json/${path}`
        })
      }
    });
  }
});



// Reactive variable to track the active tab
const activeTab = ref('business');

// Function to set the active tab
const setActiveTab = (tab:string) => {
  activeTab.value = tab;
};


// Reactive variable to track the active tab
const activeTabCorporate = ref('pub');

// Function to set the active tab
const setactiveTabCorporate = (tab:string) => {
  activeTabCorporate.value = tab;
};


// Reactive variable to track the active tab for marketing
const activeTabMarketing = ref('pre');

// Function to set the active tab for marketing
const setActiveTabMarketing = (tab: string) => {
  activeTabMarketing.value = tab;
};

// Reactive variable to track the active tab for design
const activeTabDesign = ref('pre');

// Function to set the active tab for design
const setActiveTabDesign = (tab: string) => {
  activeTabDesign.value = tab;
};





  </script>
 
  