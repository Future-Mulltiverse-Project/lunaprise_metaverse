<template>
  <div class="w-full bg-white pt-10">
    <!-- Our team -->

    <div class="flex flex-col lg:flex-row justify-center items-center py-8">
      <div
        class="text-xs lg:text-sm p-2 px-5 text-black bg-[#f7f2e8] cursor-pointer"
        style="border-radius: 15px; border: #cfb16d solid 3px"
      >
        Our Team
      </div>
    </div>

    <div class="text-center space-y-8 max-w-5xl mx-auto bg-white">
      <h1 class="text-black text-center text-[2rem] lg:text-6xl max-lg:px-2">
        Meet our
        <span class="font-instrument-serif italic font-normal">
          visionary team.
        </span>
      </h1>

      <div class="w-full flex justify-center">
        <p
          class="text-center text-[#707070] text-md lg:text-xl max-w-[45rem] mx-auto px-2"
        >
          Our team is composed of top-tier experts, innovators, and
          strategists—united by a mission to drive real impact.
        </p>
      </div>
    </div>

    <div class="flex flex-col lg:flex-row justify-center items-center pt-8 pb-5">
      <div
        class="text-sm lg:text-lg p-2 px-5 text-white bg-[#CFB16D] cursor-pointer"
        style="border-radius: 15px; border: #cfb16d solid 3px"
      >
        Book a 20 Minutes call
        <i class="fas fa-arrow-right text-white"></i>
      </div>
    </div>

    <section :class="$style.section" style="padding: 0; position: relative">
      <AppWrapper class="pt-8 pb-8">
        <TeamSlider :teams="team"/>
      </AppWrapper>
    </section>

    <div
      class="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto h-full py-12 p-2"
    >
      <div
        class="relative flex justify-center items-center h-full border-2 border-[#cfb16d] overflow-hidden"
        style="border-radius: 2rem"
      >
        <img
          :src="Faq1"
          alt="Office Design"
          class="shadow-lg w-full h-full object-cover"
        />
        <div class="absolute inset-0 flex justify-center items-center">
          <h1 class="text-white text-5xl px-4 py-2 rounded-lg max-lg:text-4xl">
            <span class="text-[#cfb16d]">Guide</span>Book
            <br />
            &
            <span class="text-[#cfb16d]">Grace</span>AI
          </h1>
        </div>
      </div>
      <div
        class="p-8 pr-0 text-center flex flex-col justify-between h-full space-y-6 max-lg:p-2"
        style="border-radius: 0.5rem"
      >
        <h1
          class="text-4xl font-bold text-[#cfb16d] text-start max-lg:text-2xl"
        >
          Guide<span class="text-custom-dark">Book</span>
          <span class="text-custom-dark"> &</span>
          Grace<span class="text-custom-dark">AI</span>
        </h1>
        <p class="text-custom-dark max-lg:text-sm text-justify">
          Your real-time AI companions for exploring the Future Multiverse
          platform. Ask questions, stay updated on developments, and discover
          new opportunities for growth - instantly and intuitively.
        </p>
        <div class="space-y-4">
          <Accordion type="single" class="w-full space-y-5" collapsible>
                  <AccordionItem v-for="item in accordionItems" :key="item.id" :value="item.id">
                     <div class="relative border border-[#cfb16d] px-4 rounded-lg space-x-2 bg-[#f5efe5]" style="border-radius: 0.5rem;">
                        <AccordionTrigger class="flex justify-between text-sm font-semibold text-custom-dark text-start max-lg:text-sm py-2  [&>svg]:hidden after:hidden group hover:no-underline">
                           <span>{{ item.title }}</span> 
                           <span class="text-xl transition-transform duration-300 group-data-[state=open]:rotate-45">+</span>
                        </AccordionTrigger>
                        <AccordionContent class=" text-sm text-custom-dark text-start max-lg:text-sm ml-0 mr-0">{{ item.content }}</AccordionContent>
                     </div>
                  </AccordionItem>
               </Accordion>
        </div>
        <div class="relative">
          <i
            class="fas fa-search absolute right-3 top-1/2 transform -translate-y-1/2 text-custom-dark"
          ></i>
          <input
            class="border-2 border-[#cfb16d] px-4 py-3 rounded-lg w-full bg-white text-custom-dark placeholder:text-custom-dark pl-3 focus:border-gold-light"
            placeholder="Search..."
            style="border-radius: 0.5rem"
          />
        </div>
      </div>
    </div>

    <section
      class="w-full p-2 pb-16 bg-cover bg-center max-w-5xl mx-auto"
      :style="{ backgroundImage: `url(${bgImage})` }"
    >
      <div
        class="flex items-center flex-col justify-center border-2 border-[#cfb16d] p-12 max-lg:px-2 bg-gold-light bg-opacity-40 max-w-7xl mx-auto"
        style="border-width: 2px; border-radius: 1.5rem"
      >
        <div class="text-center space-y-8 max-w-5xl mx-auto">
          <h1
            class="text-5xl text-white max-lg:text-3xl max-w-[35rem] mx-auto"
          >
            Ready to shift your
            <span
              class="text-[#cfb16d] font-instrument-serif italic font-normal"
            >
              future
              <span class="text-white"></span>
            </span>
            to the next dimension?
          </h1>
        </div>
        <p
          class="text-white text-xl text-center py-8 max-lg:text-lg max-w-[40rem] mx-auto"
        >
          Join us to catalyze your growth, scale your impact, and pioneer the
          next dimension of global innovation with us.
        </p>

        <div
          class="flex flex-col lg:flex-row justify-center items-center max-lg:space-y-4 lg:space-x-4 text-lg"
        >
          <NuxtLink to=""  @click.prevent="$emit('goToPricing')"
            class="bg-[#cfb16d] p-2 cursor-pointer text-white rounded-lg border-2 border-gold-light"
          >
            Explore Our Offers
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import bgImage from '~/assets/images/background1.png';
import axios from 'axios';
import Faq1 from '~/assets/images/faq1.jpg';
import { onMounted, ref } from 'vue';
import AppWrapper from '~/components/AppWrapper/ProductsAppWrapper.vue';
import img2 from '~/assets/images/teamTwo.jpg';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import TeamSlider from './TeamSlider.vue';
import Simon from '~/assets/images/simon.jpeg';
import Power from '~/assets/images/7.jpg';
import BotswanaTeam from '~/assets/images/botswanaTeam.jpeg';
import teamMembers from '~/assets/images/team.jpg';

interface AccordionItemType {
  id: string;
  title: string;
  content: string;
}
const accordionItems = ref<AccordionItemType[]>([]);
const config = useRuntimeConfig();
const baseURL = config.public.baseURL;

const team = [
  { title: "Space Blue, Being Investments & Future Trends Multiverse", description: "", image: teamMembers },
  { title: "Simon, Stefanie & Farzam", description: "Founders & Chairs of Future Trends Multiverse", image: img2 },
  { title: "Stefanie & Simon", description: "Founders of Future Catalyst & Multiverse", image: Simon },
  { title: "Power-Team of 250+", description: "Core, Design, DEV, PR, Marketing/Sales, Administration, Support & Compliance", image: Power },
  { title: "Multiverse Botswana", description: "Presindential Envoy Core Team", image: BotswanaTeam },
]

const slider = ref<HTMLElement | null>(null);

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

const fetchFaqs = async (): Promise<void> => {
      const cached = localStorage.getItem("faqsCache");
      if (cached) {
        accordionItems.value = JSON.parse(cached);
      }

      try {
        const response = await axios.get("/api/faq");


    if (response.status === 200) {
      const data = response.data.data;
      accordionItems.value = data.map((faq: any) => ({
        id: faq._id.$oid,
        title: faq.question,
        content: faq.description
      }));
    } else {
      console.error(`Error fetching FAQs: ${response.status}`);
    }

  } catch (error) {
    console.error('Error fetching FAQs:', error instanceof Error ? error.message : error);
  }
};

onMounted( async () => {
  const animateSlider = (sliderRef: HTMLElement | null) => {
    if (sliderRef) {
      let position = 0;
      const speed = 0.5; // Adjust speed for animation
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
  await Promise.all([
    fetchFaqs(),
  ]);
});
</script>

<style lang="scss" module>
.font-pattaya {
  font-family: 'Pattaya', sans-serif;
}
</style>
