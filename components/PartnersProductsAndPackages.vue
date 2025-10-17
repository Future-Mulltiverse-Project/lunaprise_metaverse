<template>
  <section :class="$style.section" class="font-satoshi border-[3px] border-gold-light bg-custom-dark">
    <!-- Left Black Fade Effect -->
    <div :class="$style.fadeLeft"></div>
    <section class="pt-8 pb-5">
      <div class="row" :class="$style.row">
        <p style="text-align: center;" class="font-semibold text-sm lg:text-xl">
          <span style="color: #CFB16D">You're in the best hands:</span>
        </p>
        <p style="text-align: center;" class="font-semibold pt-3 pb-1 text-sm lg:text-xl">
          <span style="color: #ffffff">Some of our Business & Technology Partners</span>
        </p>
      </div>
      <div class="row">
        <div class="col-md-12">
          <!-- First Slider: Images 1-13 -->
          <div :class="$style.sliderWrapper">
            <div ref="slider1" :class="$style.slider">
              <img class="w-auto h-12 lg:h-20" v-for="(img, index) in firstImages" :key="index" :src="img" :alt="'Partner ' + (index + 1)" />
              <img class="w-auto h-12 lg:h-20" v-for="(img, index) in firstImages" :key="'dup' + index" :src="img" :alt="'Partner ' + (index + 1)" />
            </div>
          </div>

          <!-- Second Slider: Images 14-25 -->
          <div :class="$style.sliderWrapper">
            <div ref="slider2" :class="$style.slider">
              <img class="w-auto h-12 lg:h-20" v-for="(img, index) in secondImages" :key="index" :src="img" :alt="'Partner ' + (index + 14)" />
              <img class="w-auto h-12 lg:h-20" v-for="(img, index) in secondImages" :key="'dup' + index" :src="img" :alt="'Partner ' + (index + 14)" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Right Black Fade Effect -->
    <div :class="$style.fadeRight"></div>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import img1 from '~/assets/images/partners/image1.png';
import img2 from '~/assets/images/partners/image2.png';
import img3 from '~/assets/images/partners/image3.png';
import img4 from '~/assets/images/partners/image4.jpg';
import img5 from '~/assets/images/partners/image5.png';
import img6 from '~/assets/images/partners/image6.png';
import img7 from '~/assets/images/partners/image7.jpg';
import img8 from '~/assets/images/partners/image8.jpg';
import img9 from '~/assets/images/partners/image9.png';
import img10 from '~/assets/images/partners/image10.png';
import img11 from '~/assets/images/partners/image11.png';
import img12 from '~/assets/images/partners/image12.png';
import img13 from '~/assets/images/partners/image13.jpg';
import img14 from '~/assets/images/partners/image14.png';
import img15 from '~/assets/images/partners/image15.png';
import img19 from '~/assets/images/partners/image19.png';
import img20 from '~/assets/images/partners/image20.png';
import img21 from '~/assets/images/partners/image21.png';
import img23 from '~/assets/images/partners/image23.png';
import img24 from '~/assets/images/partners/image24.png';
import img25 from '~/assets/images/partners/image25.png';
import img26 from '~/assets/images/partners/image26.png';
import img27 from '~/assets/images/partners/image27.png';
import img28 from '~/assets/images/partners/image28.png';
import img29 from '~/assets/images/partners/image29.png';
import img30 from '~/assets/images/partners/image30.png';
import img31 from '~/assets/images/partners/image31.png';
import img32 from '~/assets/images/partners/image32.png';
import img33 from '~/assets/images/partners/image33.png';
import img35 from '~/assets/images/partners/image35.png';
import img36 from '~/assets/images/partners/image36.png';
import img37 from '~/assets/images/partners/image37.png';
import img38 from '~/assets/images/partners/image38.png';
import img39 from '~/assets/images/partners/image39.png';
import img40 from '~/assets/images/partners/image40.png';
import img41 from '~/assets/images/partners/image41.webp';

// Split images into two parts
const firstImages = ref([img6, img5, img10, img3, img11, img4, img12, img2, img40, img25, img13, img1, img23, img7, img8, img15, img26, img27, img28, img29, img30, img41, img9]);
const secondImages = ref([img26, img39, img38, img37, img36, img14, img24, img35, img20, img33, img21, img19, img32, img31, img15]);

const slider1 = ref<HTMLElement | null>(null);
const slider2 = ref<HTMLElement | null>(null);

onMounted(() => {
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

const animateSlider2 = (sliderRef: HTMLElement | null) => {
  if (!sliderRef) return;

  const speed = 0.5;
  const firstImg = sliderRef.querySelector('img');
  if (!firstImg) return;

  const startAnimation = () => {
    const imageWidth = firstImg.offsetWidth;
    // const gap = 15;
    const imageCount = secondImages.value.length;
    const totalWidth = (imageWidth) * imageCount;

    let position = -totalWidth;

    const animate = () => {
      position += speed;

      // When we're fully back at the starting position, reset to the left side again
      if (position >= 0) {
        position = -totalWidth;
      }

      sliderRef.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    };

    // Trigger after load
    setTimeout(() => {
      animate();
    }, 300);
  };

  if (firstImg.complete) {
    startAnimation();
  } else {
    firstImg.onload = startAnimation;
  }
};



  animateSlider(slider1.value);
  animateSlider2(slider2.value);
});
</script>

<style lang="scss" module>
.section {
  padding: 0;
  position: relative;
}

.sliderWrapper {
  overflow: hidden;
  white-space: nowrap;
  margin: 20px 0;
  position: relative;
  width: 100%;
}

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
  background: linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
}

.fadeRight {
  right: 0;
  background: linear-gradient(to left, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
}

.slider {
  display: flex;
  gap: 30px;
  width: max-content;
}
</style>
