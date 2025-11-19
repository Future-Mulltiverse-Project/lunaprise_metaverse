<template>
  <section :class="$style.section" class="font-satoshi">
    <div>
      <div class="row">
        <div class="">
          <!-- Card Slider -->
          <div :class="$style.sliderWrapper">
            <!-- Left Black Fade Effect -->
            <div :class="$style.fadeLeft"></div>
            <div ref="cardSlider" :class="$style.slider">
              <!-- Render cards dynamically -->
              <div
                v-for="(card, index) in filteredCards"
                :key="index"
                class="w-80 h-80"
                style="
                  border: 4px solid #cfb16d;
                  border-radius: 13px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  background-size: cover;
                  background-position: center;
                  flex-shrink: 0;
                "
                :style="{ backgroundImage: `url(${(card as CardType).image})` }"
              >
                <div class="flex aspect-square items-end justify-center w-full">
                  <!-- <div class="bg-black bg-opacity-20 w-full p-4" style="border-bottom-left-radius: 13px; border-bottom-right-radius: 13px;">
                    <p class="text-xl text-white  text-center text-wrap">{{ card.name }}</p>
                    <p class="text-sm text-white  text-center text-wrap">{{ card.description }}</p>

                    <div class="flex flex-row  space-x-4  justify-center items-center text-lg mt-4">
                      <div class="bg-[#cfb16d] text-white sm:text-sm text-xs p-2 cursor-pointer" style="border-radius: 12px; border: #CFB16D solid 3px;">
                        Register to receive Invitation
                      </div>
                       <div class="sm:text-sm p-2 text-xs text-black bg-white cursor-pointer" style="border-radius: 12px; border: #CFB16D solid 3px;">
                        Learn More
                      </div> 
                    </div>
                  </div> -->
                </div>
              </div>
              <!-- Duplicate cards for seamless looping -->
              <div
                v-for="(card, index) in filteredCards"
                :key="'dup' + index"
                class="w-80 h-80"
                style="
                  border: 4px solid #cfb16d;
                  border-radius: 13px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  background-size: cover;
                  background-position: center;
                  flex-shrink: 0;
                "
                :style="{ backgroundImage: `url(${card.image})` }"
              >
                <!-- <div class="flex aspect-square items-end justify-center w-full">
                  <div class="bg-black bg-opacity-20 w-full p-4" style="border-bottom-left-radius: 13px; border-bottom-right-radius: 13px;">
                    <p class="text-xl text-white text-center">{{ card.name }}</p>
                    <p class="text-sm text-white text-center">{{ card.description }}</p>

                    <div class="flex flex-row  space-x-4  justify-center items-center text-lg mt-4">
                      <div class="bg-[#cfb16d] text-white sm:text-sm text-xs p-2 cursor-pointer" style="border-radius: 12px; border: #CFB16D solid 3px;">
                        Register to receive Invitation
                      </div>
                       <div class="sm:text-sm p-2 text-xs text-black bg-white cursor-pointer" style="border-radius: 12px; border: #CFB16D solid 3px;">
                        Learn More
                      </div>
                    </div>
                  </div>
                </div> -->
              </div>
            </div>
            <!-- Right Black Fade Effect -->
            <div :class="$style.fadeRight"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted, toRefs, computed, watch } from 'vue';

interface CardType {
  image: string;
  name: string;
  description: string;
  category: string;
}

const props = defineProps({
  selectedItem: {
    type: String,
    default: "",
  },
  cards: {
    type: Array as () => CardType[],
    default: () => []
  }
});

const { $openChat } = useNuxtApp()

const handleRegisterInvitation = () => {
  // Preferred Nuxt way
  $openChat()

  // Or, if you prefer to follow RYU.md literally:
  // if (window.$chatWidget?.openChat) {
  //   window.$chatWidget.openChat()
  // }
}

const { selectedItem, cards } = toRefs(props);

const filteredCards = computed(() => {
  if (selectedItem.value === "All" || !selectedItem.value) return cards.value;
  return cards.value.filter(
    (card: any) => card.category.toLowerCase() === selectedItem.value.toLowerCase()
  );
});


const cardSlider = ref<HTMLElement | null>(null);
let animationFrameId: number;

const startSliderAnimation = (sliderRef: HTMLElement | null) => {
  if (!sliderRef) return;

  let position = 0;
  const speed = 1.5;

  const animate = () => {
    position -= speed;
    if (Math.abs(position) >= sliderRef.scrollWidth / 2) {
      position = 0;
    }
    sliderRef.style.transform = `translateX(${position}px)`;
    animationFrameId = requestAnimationFrame(animate);
  };

  cancelAnimationFrame(animationFrameId); // Clear any previous animation
  animate();
};

onMounted(() => {
  startSliderAnimation(cardSlider.value);
});

// Restart animation when filteredCards change
watch(filteredCards, () => {
  startSliderAnimation(cardSlider.value);
});
</script>

<style lang="scss" module>
.section {
  padding: 0;
}

.sliderWrapper {
  overflow: hidden;
  white-space: nowrap;

  position: relative;
  width: 100%;
}




.slider {
  display: flex;
  gap: 15px;
}
</style>