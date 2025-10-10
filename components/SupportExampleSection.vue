<template>
  <div class="w-full bg-white m-0 px-4 pt-10 pb-10 border-4 border-gold-light">
    <section>
      <!-- Solutions Tab -->
      <section class="w-full bg-white pb-8 flex justify-around">
        <div class="max-w-5xl">
          <div
            class="inline-flex items-center p-2 border border-6 border-[#cfb16d] bg-[#f6f1e5] text-gray-700 rounded-2xl"
            style="border-width: 3px"
          >
            <button
              @click="setActiveSection('solutions')"
              :class="[
                'text-xl p-1 max-lg:text-sm lg:px-2',
                activeSection === 'solutions'
                  ? 'bg-white shadow-sm border border-[#cfb16d]'
                  : 'text-gray-700 border-none',
              ]"
              style="border-radius: 0.7rem; border-width: 3px"
            >
              Solutions
            </button>
            <button
              @click="setActiveSection('comparison')"
              :class="[
                'text-xl p-1 max-lg:text-sm lg:px-2',
                activeSection === 'comparison'
                  ? 'bg-white shadow-sm border border-[#cfb16d]'
                  : 'text-gray-700 border-none',
              ]"
              style="border-radius: 0.7rem; border-width: 3px"
            >
              Comparison
            </button>
            <button
              @click="setActiveSection('process')"
              :class="[
                'text-xl p-1 max-lg:text-sm lg:px-2',
                activeSection === 'process'
                  ? 'bg-white shadow-sm border border-[#cfb16d]'
                  : 'text-gray-700 border-none',
              ]"
              style="border-radius: 0.7rem; border-width: 3px"
            >
              Process
            </button>
            <button
              @click="setActiveSection('pricing')"
              :class="[
                'text-xl p-1 max-lg:text-sm lg:px-2',
                activeSection === 'pricing'
                  ? 'bg-white shadow-sm border border-[#cfb16d]'
                  : 'text-gray-700 border-none',
              ]"
              style="border-radius: 0.7rem; border-width: 3px"
            >
              Pricing
            </button>
          </div>
        </div>
      </section>

      <!-- Sections -->
      <section v-show="activeSection === 'solutions'" class="space-y-8">
        <div class="text-center space-y-8 mx-auto bg-white">
          <h1 class="text-black text-center text-[3rem] lg:text-6xl">
            How may we support
            <span
              class="text-[#cfb16d] font-instrument-serif italic font-normal"
            >
              you
              <span class="text-gray-800">?</span>
            </span>
          </h1>

          <p
            class="text-center text-[#707070] text-md lg:text-xl max-w-[36rem] mx-auto"
          >
            Our Future Trends Multiverse System offers you everything you need
            to transform your brand into a future-proof leader of the rapidly
            developing world of tomorrow and the pioneering movement behind it.
          </p>
        </div>

        <div class="max-w-6xl mx-auto space-y-8">
          <div
            @click="navigateTo('/')"
            class="relative bg-cover bg-center rounded-2xl border-4 border-[#cfb16d] p-8 text-white cursor-pointer hover:scale-105 transition-transform duration-300"
            :style="{ backgroundImage: `url(${Bg1})` }"
          >
            <div
              class="flex justify-center items-center h-full rounded-2xl py-12"
            >
              <div class="text-center space-y-8">
                <h1 class="text-2xl sm:text-4xl font-bold mb-2">
                  Future Multiverse
                </h1>
                <p class="text-sm sm:text-lg max-w-[32rem]">
                  The Future Multiverse & FXPO is a Hyper-Realistic, digital &
                  decentralized eco-system, harnessing cutting edge technology
                  to accelerate the economy of the Future.
                </p>
              </div>
            </div>
          </div>

          <div
            @click="navigateTo('mission_and_movement')"
            class="relative bg-cover bg-center rounded-2xl border-4 border-[#cfb16d] p-8 text-white cursor-pointer hover:scale-105 transition-transform duration-300"
            :style="{ backgroundImage: `url(${Bg5})` }"
          >
            <div
              class="flex justify-center items-center h-full rounded-2xl py-12"
            >
              <div class="text-center space-y-8">
                <h1 class="text-2xl sm:text-4xl font-bold mb-2">
                  Mission & Movement
                </h1>
                <p class="text-sm sm:text-lg max-w-[32rem]">
                  The Future Multiverse is a multi-dimensional eco-system
                  created to be a catalyst for humanity's destined future.
                  Catalyzing the Future Trends Groups' network & influence in
                  150+ countries, we are empowering the most meaningful movement
                  in history.
                </p>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <NuxtLink
              to="https://launchpad.futuremultiverse.dev"
              class="relative bg-cover bg-center rounded-2xl border-4 border-[#cfb16d] p-8 text-white py-16 cursor-pointer hover:scale-105 transition-transform duration-300"
              :style="{ backgroundImage: `url(${Bg3})` }"
            >
              <div
                class="flex justify-center items-center h-full rounded-2xl py-12"
              >
                <div class="text-center space-y-8">
                  <h1 class="text-2xl sm:text-4xl font-bold mb-2">
                    Launch Pad
                  </h1>
                  <p class="text-sm sm:text-lg">
                    The Future Trends Catalyst LaunchPad - your state of the art
                    platform to catalyze project funding or invest in assets.
                  </p>
                  <p class="text-sm sm:text-lg">
                    “The Future isn’t limited by space or time, only by our
                    imagination. Anything you can imagine, can be built. And
                    everything that can be built, can be funded”.
                  </p>
                </div>
              </div>
            </NuxtLink>

            <NuxtLink
              to="https://marketplace.futuremultiverse.dev"
              class="relative bg-cover bg-center rounded-2xl border-4 border-[#cfb16d] p-8 text-white py-16 cursor-pointer hover:scale-105 transition-transform duration-300"
              :style="{ backgroundImage: `url(${Bg4})` }"
            >
              <div
                class="flex justify-center items-center h-full rounded-2xl py-12"
              >
                <div class="text-center space-y-8">
                  <h1 class="text-2xl sm:text-4xl font-bold mb-2">
                    Marketplace
                  </h1>
                  <p class="text-sm sm:text-lg">
                    The Future Trends Catalyst Marketplace - Your ultimate
                    gateway to enter the world of Web4 and the digital future.
                  </p>
                  <p class="text-sm sm:text-lg">
                    “Discover the limitless possibilities of the future, at the
                    FXPO Marketplace. Where passion meets purpose and values
                    create opportunities.”
                  </p>
                </div>
              </div>
            </NuxtLink>
          </div>

          <div
            class="relative bg-cover bg-center rounded-2xl border-4 border-[#cfb16d] p-8 text-white cursor-pointer hover:scale-105 transition-transform duration-300"
            :style="{ backgroundImage: `url(${P1})` }"
          >
            <!-- Overlay -->
            <div
              class="absolute inset-0 bg-black bg-opacity-40 rounded-2xl"
            ></div>
            <div
              class="relative z-10 flex justify-center items-center h-full rounded-2xl py-12"
            >
              <div class="text-center space-y-8">
                <h1 class="text-2xl sm:text-4xl font-bold mb-2">
                  Advanced Future
                  <br />
                  Technologies
                </h1>
                <p class="text-sm sm:text-lg max-w-[32rem]">
                  The Future Multiverse & EXPO is accelerating an international
                  portfolio of groundbreaking technologies across multiple
                  industries, scaling their institutional, governmental,
                  academic, public & mass adoption
                </p>
              </div>
            </div>
          </div>

          <div
            @click="setActiveSection('pricing')"
            class="relative bg-cover bg-center rounded-2xl border-4 border-[#cfb16d] p-8 text-white cursor-pointer hover:scale-105 transition-transform duration-300"
            :style="{ backgroundImage: `url(${Bg2})` }"
          >
            <div
              class="flex justify-center items-center h-full rounded-2xl py-12"
            >
              <div class="text-center space-y-8">
                <h1 class="text-2xl sm:text-4xl font-bold mb-2">
                  Product & Service Packages
                </h1>
                <p class="text-sm sm:text-lg max-w-[32rem]">
                  Business & Design Packages, incl. the FMV Passport,
                  Hyper-Realistic Avatars, Multi-Functional Business Space,
                  Platform Revenue Share Opportunities, Any-Dimensionsional
                  Custom Design Services, Marketing Licences, Apparel & much
                  more
                </p>
              </div>
            </div>
          </div>

          <div
            class="relative bg-cover bg-center rounded-2xl border-4 border-[#cfb16d] p-8 pb-0 text-white cursor-pointer hover:scale-105 transition-transform duration-300"
            :style="{ backgroundImage: `url(${Bg6})` }"
          >
            <!-- Header Section -->
            <div class="text-center mb-8">
              <h1 class="text-2xl sm:text-4xl font-bold mb-4">
                Download the
                <span class="text-[#cfb16d]">Future</span>
                <br />
                &
                <span class="text-[#cfb16d]">Connect</span>
                Today
              </h1>
            </div>

            <!-- Content Section -->
            <div
              class="flex flex-col md:flex-row justify-between items-center md:space-y-0 md:space-x-4 relative z-10 max-w-[40rem] mx-auto overflow-hidden"
            >
              <!-- Image Section -->
              <div class="relative w-full flex justify-start overflow-hidden">
                <img
                  :src="currentPhoneImage"
                  alt="Phone Preview"
                  class="w-full h-full object-contain translate-y-[1rem]"
                />
              </div>
              <!-- Buttons Section - desktop version -->
              <div
                class="grid gap-4 w-full md:w-1/2 justify-end items-center max-lg:pb-4 max-md:hidden"
              >
                <button
                  class="bg-white text-gray-700 py-2 px-3 w-56 hover:bg-gray-200 rounded-full border-4 border-[#cfb16d] text-md inline-block"
                >
                  <img :src="Apple" alt="Apple" class="inline w-5 h-5 mr-3" />
                  <span>App Store</span>
                </button>
                <button
                  class="bg-white text-gray-700 py-2 px-3 w-56 hover:bg-gray-200 rounded-full border-4 border-[#cfb16d] text-md inline-block"
                >
                  <img
                    :src="PlayStore"
                    alt="Playstore"
                    class="inline w-5 h-5 mr-3"
                  />
                  <span>Play Store</span>
                </button>
                <button
                  class="bg-white text-gray-700 py-2 px-3 w-56 hover:bg-gray-200 rounded-full border-4 border-[#cfb16d] text-md inline-block"
                >
                  <img :src="Future" alt="future" class="inline w-5 h-5 mr-3" />
                  <span>GuideBook</span>
                </button>
              </div>
            </div>
          </div>

          <div class="w-full hidden justify-center max-md:flex">
            <div
              class="grid gap-4 w-full md:w-1/2 justify-items-center space-y-4"
            >
              <button
                class="bg-white text-gray-700 py-2 px-2 w-48 text-lg hover:bg-gray-200 rounded-full border-4 border-[#cfb16d] inline-block"
              >
                <img :src="Apple" alt="Apple" class="inline w-5 h-5 mr-3" />
                <span>App Store</span>
              </button>
              <button
                class="bg-white text-gray-700 hover:bg-gray-200 rounded-full border-4 border-[#cfb16d] inline-block py-2 px-2 w-48 text-lg"
              >
                <img
                  :src="PlayStore"
                  alt="Playstore"
                  class="inline w-5 h-5 mr-3"
                />
                <span>Play Store</span>
              </button>
              <button
                class="bg-white text-gray-700 mb-8 hover:bg-gray-200 rounded-full border-4 border-[#cfb16d] inline-block py-2 px-2 w-48 text-lg"
              >
                <img
                  :src="Future"
                  alt="Playstore"
                  class="inline w-5 h-5 mr-3"
                />
                <span>GuideBook</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section v-show="activeSection === 'comparison'" class="space-y-8">
        <div class="text-center max-w-7xl mx-auto bg-white">
          <h1 class="text-black text-center text-[3.5rem] lg:text-6xl">
            But, why would you
            <br />
            want to work
            <span
              class="text-[#cfb16d] font-instrument-serif italic font-normal"
            >
              with us
              <span class="text-gray-800">?</span>
            </span>
          </h1>
        </div>

        <div class="max-w-5xl mx-auto">
          <div class="flex flex-col md:flex-row gap-6 p-6 items-center">
            <div class="flex-1 flex-col items-center w-full">
              <h3
                class="text-3xl mb-4 text-gray-700 text-center max-lg:text-2xl"
              >
                Other Platforms
              </h3>
              <div class="bg-[#ebebeb] p-6 rounded-2xl">
                <ul class="space-y-2 text-lg text-gray-600">
                  <li class="flex items-center gap-2">
                    <i class="fas fa-times text-gray-600"></i>
                    Single channel approach
                  </li>
                  <li class="flex items-center gap-2">
                    <i class="fas fa-times text-gray-600"></i>
                    Outdated growth strategies
                  </li>
                  <li class="flex items-center gap-2">
                    <i class="fas fa-times text-gray-600"></i>
                    Lack of industry research
                  </li>
                  <li class="flex items-center gap-2">
                    <i class="fas fa-times text-gray-600"></i>
                    Outsourced to mediocre talent
                  </li>
                </ul>
              </div>
            </div>

            <div class="flex-1 flex flex-col items-center">
              <h3
                class="text-3xl mb-4 text-black flex items-center max-lg:text-2xl"
              >
                <img :src="Future" alt="future" class="w-7 h-7 mr-3" />
                Future Multiverse
              </h3>
              <div
                class="p-6 border-4 border-[#cfb16d] rounded-2xl bg-gradient-to-r from-white to-red-100 text-gray-700 w-full"
              >
                <ul class="space-y-2 text-lg">
                  <li class="flex items-center gap-2">
                    <i class="fas fa-check text-[#cfb16d]"></i>
                    B2B2C Omni-channel approach
                  </li>
                  <li class="flex items-center gap-2">
                    <i class="fas fa-check text-[#cfb16d]"></i>
                    Tailored best-fit solutions for your need
                  </li>
                  <li class="flex items-center gap-2">
                    <i class="fas fa-check text-[#cfb16d]"></i>
                    Holistic Scaling System for all 5 adoptions: Governments,
                    Corporate, Institutions, Public, and Mass adoption
                  </li>
                  <li class="flex items-center gap-2">
                    <i class="fas fa-check text-[#cfb16d]"></i>
                    Leverages industry specific expertise
                  </li>
                  <li class="flex items-center gap-2">
                    <i class="fas fa-check text-[#cfb16d]"></i>
                    Experts with 10-30+ years of experience
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section v-show="activeSection === 'process'" class="Process">
        <div class="text-center space-y-8 max-w-5xl mx-auto bg-white">
          <h1 class="text-black text-center text-[3.5rem] lg:text-6xl">
            Our Streamlined Process
            <br />
            for rapid
            <span
              class="text-[#cfb16d] font-instrument-serif italic font-normal"
            >
              transformation
            </span>
            :
          </h1>

          <div class="w-full flex justify-center">
            <p
              class="max-w-[590px] text-center text-[#707070] text-md lg:text-xl mx-auto"
            >
              Our Future Trends Multiverse System equips you with all the tools
              to rapidly transform your brand into a future-proof powerhouse—
              primed to excel in tomorrow’s fast-evolving world and spearhead
              the pioneering movement shaping it.
            </p>
          </div>
        </div>
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto pt-8"
        >
          <div class="bg-white p-6 text-center">
            <div class="flex justify-center w-full">
              <div ref="fingerprint" class="w-16 h-16 mx-auto mb-4"></div>
              <div ref="metaverse" class="w-16 h-16 mx-auto mb-4"></div>
              <div ref="astronautSuit" class="w-16 h-16 mx-auto mb-4"></div>
            </div>
            <h3 class="text-xl lg:text-2xl mb-2 text-black">
              Onboard / Connect
            </h3>
            <p class="text-gray-600">
              Kickstart your evolution with our KYC/KYB onboarding session — and
              from there on simply enter by connecting your Web2 Account or Web3
              Wallet.
            </p>
          </div>

          <div class="bg-white p-6 text-center">
            <div class="flex justify-center">
              <div ref="cargoOwner" class="w-16 h-16 mx-auto mb-4"></div>
              <div ref="squareFootage" class="w-16 h-16 mx-auto mb-4"></div>
              <div ref="locationPin" class="w-16 h-16 mx-auto mb-4"></div>
            </div>
            <h3 class="text-xl lg:text-2xl mb-2 text-black">
              Choose your Package& Future EXPO Space
            </h3>
            <p class="text-gray-600">
              Select your tailored solution bundle and secure a spotlight at our
              Future EXPO—catapulting you into an arena of unparalleled
              visibility and influence.
            </p>
          </div>

          <div class="bg-white p-6 text-center">
            <div class="flex justify-center">
              <div ref="sphereReveal" class="w-16 h-16 mx-auto mb-4"></div>
              <div ref="homeRoll" class="w-16 h-16 mx-auto mb-4"></div>
              <div ref="wiredHover" class="w-16 h-16 mx-auto mb-4"></div>
            </div>
            <h3 class="text-xl lg:text-2xl mb-2 text-black">
              Digitalize your Future
            </h3>
            <p class="text-gray-600">
              Harness cutting-edge digital strategies to future-proof
              operations, dazzle your customers, and seize untapped
              opportunities in an ever-shifting market.
            </p>
          </div>

          <div class="bg-white p-6 text-center">
            <div class="flex justify-center">
              <div ref="view" class="w-16 h-16 mx-auto mb-4"></div>
              <div ref="commerceShop" class="w-16 h-16 mx-auto mb-4"></div>
              <div ref="cyberMonday" class="w-16 h-16 mx-auto mb-4"></div>
            </div>
            <h3 class="text-xl lg:text-2xl mb-2 text-black">
              Get Listed & Break Through
            </h3>
            <p class="text-gray-600">
              Leverage exclusive platforms, stand out from the noise, and emerge
              as an undisputed industry trailblazer—poised to redefine what’s
              possible.
            </p>
          </div>

          <div class="bg-white p-6 text-center">
            <div class="flex justify-center">
              <div ref="shuttleSpaceship" class="w-16 h-16 mx-auto mb-4"></div>
              <div ref="attractCustomers" class="w-16 h-16 mx-auto mb-4"></div>
              <div ref="frenchize" class="w-16 h-16 mx-auto mb-4"></div>
            </div>
            <h3 class="text-xl lg:text-2xl mb-2 text-black">
              Scale your Operation & Success with Us
            </h3>
            <p class="text-gray-600">
              Accelerate expansion through our global network and
              expertise—fueling sustainable growth, boosting profits, and
              solidifying your leadership in a world of rapid change.
            </p>
          </div>

          <div class="bg-white p-6 text-center">
            <div class="flex justify-center">
              <div ref="treePlanting" class="w-16 h-16 mx-auto mb-4"></div>
            </div>
            <h3 class="text-xl lg:text-2xl mb-2 text-black">
              Create Maximum Valuable Impact
            </h3>
            <p class="text-gray-600">
              Transcend the bottom line: revolutionize entire industries,
              empower communities, and shape a future defined by game-changing
              progress and purpose.
            </p>
          </div>
        </div>
      </section>

      <section v-show="activeSection === 'pricing'"
        class="Pricing"
        id="pricing-section"
      >
        <PlatformsAndServicesSection />
      </section>

      <div
        class="flex flex-col lg:flex-row justify-center items-center max-lg:space-y-4 lg:space-x-4 text-lg pt-8"
      >
        <NuxtLink
          to=""
          @click="setActiveSection('pricing')"
          class="bg-[#cfb16d] p-2 cursor-pointer"
          style="border-radius: 15px; border: #cfb16d solid 3px"
        >
          Product & Service Packages
        </NuxtLink>
        <div
          class="text-lg p-2 text-black bg-white cursor-pointer"
          style="border-radius: 15px; border: #cfb16d solid 3px"
        >
          Learn More
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeUnmount } from 'vue';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { watch, nextTick } from 'vue';

import PlatformsAndServicesSection from '~/components/Sections/PlatformsAndServicesSection.vue';
import Bg1 from '~/assets/images/Home/bg1.png';
import Bg2 from '~/assets/images/Home/bg2.jpg';
import Bg3 from '~/assets/images/Home/bg3.jpg';
import Bg4 from '~/assets/images/Home/bg4.png';
import Bg5 from '~/assets/images/Home/bg5.jpg';
import Bg6 from '~/assets/images/Home/bg6.png';
import Phone1 from '~/assets/images/Home/phone1.png';
import Phone2 from '~/assets/images/Home/phone2.png';
import Apple from '~/assets/images/Home/apple.png';
import PlayStore from '~/assets/images/Home/appstore.svg';
import Future from '~/assets/images/Home/future.png';
import bgImage from '~/assets/images/Home/background1.png';

import P1 from '~/assets/images/Home/p1.jpg';
import P2 from '~/assets/images/Home/p2.jpg';
import P3 from '~/assets/images/Home/p3.jpg';
import P4 from '~/assets/images/Home/p4.jpg';
import P5 from '~/assets/images/Home/p5.jpg';
import P6 from '~/assets/images/Home/p66.jpg';
import Faq1 from '~/assets/images/Home/faq1.jpg';
import { onMounted } from 'vue';
import lottie from 'lottie-web';
import type { AnimationItem } from 'lottie-web';
import AppWrapper from '~/components/AppWrapper/ProductsAppWrapper.vue';
import img1 from '~/assets/images/Home/packages/people/teamOne.jpg';
import img2 from '~/assets/images/Home/packages/people/teamTwo.jpg';
import img3 from '~/assets/images/Home/packages/people/teamThree.jpg';
import img4 from '~/assets/images/Home/packages/people/teamFour.jpg';
import img5 from '~/assets/images/Home/packages/people/teamFive.jpg';

// Array for images
const images = ref([img1, img2, img3, img5, img1, img2, img3, img5]);

const slider = ref<HTMLElement | null>(null);

// Reactive state for active section
const activeSection = ref('solutions');
const route = useRoute();

// Function to set the active section
const setActiveSection = (section: string) => {
  activeSection.value = section;
};

// Define individual refs for each animation
const astronautSuit = ref<HTMLElement | null>(null);
const attractCustomers = ref<HTMLElement | null>(null);
const cargoOwner = ref<HTMLElement | null>(null);
const commerceShop = ref<HTMLElement | null>(null);
const cyberDevices = ref<HTMLElement | null>(null);
const cyberMonday = ref<HTMLElement | null>(null);
const fingerprint = ref<HTMLElement | null>(null);
const frenchize = ref<HTMLElement | null>(null);
const homeRoll = ref<HTMLElement | null>(null);
const locationPin = ref<HTMLElement | null>(null);
const metaverse = ref<HTMLElement | null>(null);
const shuttleSpaceship = ref<HTMLElement | null>(null);
const sphereReveal = ref<HTMLElement | null>(null);
const squareFootage = ref<HTMLElement | null>(null);
const treePlanting = ref<HTMLElement | null>(null);
const view = ref<HTMLElement | null>(null);
const wiredHover = ref<HTMLElement | null>(null);

// Map refs to their respective JSON files
const animationsMap = [
  { ref: astronautSuit, path: 'astronaut_suit.json' },
  { ref: attractCustomers, path: 'attract_customers.json' },
  { ref: cargoOwner, path: 'cargo_owner.json' },
  { ref: commerceShop, path: 'commerce_shop.json' },
  { ref: cyberDevices, path: 'cyber_devices.json' },
  { ref: cyberMonday, path: 'cyber_monday.json' },
  { ref: fingerprint, path: 'fingerprint.json' },
  { ref: frenchize, path: 'frenchize.json' },
  { ref: homeRoll, path: 'home_roll.json' },
  { ref: locationPin, path: 'location_pin.json' },
  { ref: metaverse, path: 'metaverse.json' },
  { ref: shuttleSpaceship, path: 'shuttle_spaceship.json' },
  { ref: sphereReveal, path: 'sphere_reveal.json' },
  { ref: squareFootage, path: 'square_footage.json' },
  { ref: treePlanting, path: 'tree_planting.json' },
  { ref: view, path: 'view.json' },
  { ref: wiredHover, path: 'wired_hover.json' },
];

onMounted(() => {
  const animateSlider = (sliderRef: HTMLElement | null) => {
    if (sliderRef) {
      let position = 0;
      const speed = 1; // Adjust speed for animation
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
        path: `/json/${path}`,
      });
    }
  });

  if (route.query.section === 'pricing') {
    activeSection.value = 'pricing';
  }
});

const props = defineProps<{ goToSection: string | null }>();
const emit = defineEmits(['sectionNavigated']);

watch(
  () => props.goToSection,
  async (val) => {
    if (val === 'pricing') {
      activeSection.value = 'pricing';
      await nextTick();
      const el = document.getElementById('pricing-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      emit('sectionNavigated');
    }
  },
);

const currentPhoneImage = ref(Phone1);

function setInitialImage() {
  if (window.innerWidth > 1200) {
    currentPhoneImage.value = Phone1;
  } else if (window.innerWidth > 768 && window.innerWidth < 1200) {
    currentPhoneImage.value = Phone1;
  }
}

window.addEventListener('resize', setInitialImage);

onBeforeUnmount(() => {
  window.removeEventListener('resize', setInitialImage);
});
</script>
