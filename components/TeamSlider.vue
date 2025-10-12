<template>
  <section :class="$style.section" class="font-satoshi bg-white">
    <div ref="cardSlider" :class="$style.sliderWrapper">
  <div ref="sliderTrack" :class="$style.slider">
        <!-- Original Cards -->
        <div
          v-for="(member, index) in members"
          :key="'main-' + index"
          class="w-60 h-60 md:w-80 md:h-80 relative bg-transparent flex-shrink-0"
        >
          <img
            :src="member.image"
            :alt="'Partner ' + (index + 1)"
            class="w-full h-full object-cover rounded-2xl"
          />
          <div class="card-content bg-black bg-opacity-40 absolute bottom-0 left-0 w-full text-white px-4 py-2 rounded-b-2xl text-center">
            <p class="font-medium text-lg">{{ member.title }}</p>
            <p class="text-xs">{{ member.description }}</p>
          </div>
        </div>

        <!-- Duplicate Cards -->
        <div
          v-for="(member, index) in members"
          :key="'dup-' + index"
          class="w-60 h-60 md:w-80 md:h-80 relative bg-transparent flex-shrink-0"
        >
          <img
            :src="member.image"
            :alt="'Partner ' + (index + 1)"
            class="w-full h-full object-cover rounded-2xl"
          />
          <div class="card-content bg-black bg-opacity-40 absolute bottom-0 left-0 w-full text-white px-4 py-2 rounded-b-2xl text-center">
            <p class="font-medium text-lg">{{ member.title }}</p>
            <p class="text-xs">{{ member.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue';

interface MemberType {
  image: string;
  title: string;
  description: string;
}

const props = defineProps({
  teams: {
    type: Array as () => MemberType[],
    default: () => []
  }
});

const members = props.teams;

const cardSlider = ref<HTMLElement | null>(null);
const sliderTrack = ref<HTMLElement | null>(null);

onMounted(() => {
  const animateSlider = () => {
    if (!sliderTrack.value) return;

    let position = 0;
    const speed = 0.5;

    const animate = () => {
      position -= speed;
      const resetPoint = sliderTrack.value!.scrollWidth / 2;

      if (Math.abs(position) >= resetPoint) {
        position = 0;
      }

      sliderTrack.value!.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    };

    animate();
  };

  animateSlider();
});
</script>

<style lang="scss" module>
.section {
  padding: 0;
}

.sliderWrapper {
  overflow: hidden;
  position: relative;
  width: 100%;
}

.slider {
  display: flex;
  gap: 15px;
  transition: transform 0.1s linear;
  will-change: transform;
}
</style>
