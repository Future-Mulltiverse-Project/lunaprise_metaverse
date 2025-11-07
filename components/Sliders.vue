<template>
    <section class="relative max-w-7xl mx-auto py-4">
            <!-- Left Black Fade Effect -->
            <div :class="$style.fadeLeft"></div>
            <All :cards="slide1"/>
            <!-- Right Black Fade Effect -->
            <div :class="$style.fadeRight"></div>
    </section>
    <section class="relative max-w-7xl mx-auto py-4">
            <!-- Left Black Fade Effect -->
            <div :class="$style.fadeLeft"></div>
            <All :cards="slide2"/>
            <!-- Right Black Fade Effect -->
            <div :class="$style.fadeRight"></div>
    </section>
    <section class="relative max-w-7xl mx-auto py-4">
            <!-- Left Black Fade Effect -->
            <div :class="$style.fadeLeft"></div>
            <All :cards="slide3"/>
            <!-- Right Black Fade Effect -->
            <div :class="$style.fadeRight"></div>
    </section>
</template>
<script setup>
import Cyprus from "~/assets/images/cyprus.jpeg";
import Germany from "~/assets/images/germany.jpg";
import Miami from "~/assets/images/miami.webp";
import Tokyo from "~/assets/images/tokyo.jpg";
import LosAngeles from "~/assets/images/losangeles.jpg";
import Dubai from "~/assets/images/dubai.webp";
import img1 from "~/assets/images/image1.jpg";
import img2 from "~/assets/images/image2.jpg";
import img3 from "~/assets/images/image3.jpg";
import img4 from "~/assets/images/image4.jpg";
import img5 from "~/assets/images/image5.jpg";
import img6 from "~/assets/images/image6.jpg";
import img7 from "~/assets/images/image7.jpg";
import img8 from "~/assets/images/image8.jpg";
import img9 from "~/assets/images/image9.jpg";
import img10 from "~/assets/images/image10.jpg";
import img11 from "~/assets/images/image11.jpg";
import img12 from "~/assets/images/image12.jpg";
import img13 from "~/assets/images/image13.jpg";
import img14 from "~/assets/images/image14.jpg";
import img15 from "~/assets/images/image15.jpg";
import img16 from "~/assets/images/image16.jpg";
import img17 from "~/assets/images/image17.jpg";
import img18 from "~/assets/images/image18.jpg";
import img19 from "~/assets/images/image19.jpg";
import img20 from "~/assets/images/image20.jpg";
import img21 from "~/assets/images/image21.jpg";
import img22 from "~/assets/images/image22.jpg";
import img23 from "~/assets/images/image23.jpg";
import img24 from "~/assets/images/image24.jpg";
import img25 from "~/assets/images/image25.jpg";
import img26 from "~/assets/images/image26.jpg";
import img27 from "~/assets/images/image27.jpg";

const slide1 = [
  { name: 'Cyprus', description: 'Europe', category: "Space EXPO on FXPO", image: img1 },
  { name: 'Germany (Ulm)', description: 'Europe', category: "Space Blue Offece", image: img2 },
  { name: 'Tokyo', description: 'Japan', category: "Spaceports", image: img3 },
  { name: 'Los Angeles', description: 'United States of America', category: "Spaceports", image: img4 },
  { name: 'Miami', description: 'United States of America', category: "Spaceports", image: img5 },
]
const slide2 = [
  { name: 'Cyprus', description: 'Europe', category: "Space EXPO on FXPO", image: img6 },
  { name: 'Germany (Ulm)', description: 'Europe', category: "Space Blue Offece", image: img7 },
  { name: 'Tokyo', description: 'Japan', category: "Spaceports", image: img8 },
  { name: 'Los Angeles', description: 'United States of America', category: "Spaceports", image: img9 },
  { name: 'Miami', description: 'United States of America', category: "Spaceports", image: img10 },
  { name: 'Dubai', description: 'United Arab Emirates', category: "Spaceports", image: img11 },
  { name: 'Dubai', description: 'United Arab Emirates', category: "Spaceports", image: img12 },
]
const slide3 = [
  { name: 'Cyprus', description: 'Europe', category: "Space EXPO on FXPO", image: img13 },
  { name: 'Germany (Ulm)', description: 'Europe', category: "Space Blue Offece", image: img14 },
  { name: 'Tokyo', description: 'Japan', category: "Spaceports", image: img15 },
  { name: 'Los Angeles', description: 'United States of America', category: "Spaceports", image: img16 },
  { name: 'Miami', description: 'United States of America', category: "Spaceports", image: img17 },
  { name: 'Dubai', description: 'United Arab Emirates', category: "Spaceports", image: img18 },
  { name: 'Dubai', description: 'United Arab Emirates', category: "Spaceports", image: img19 },
  { name: 'Cyprus', description: 'Europe', category: "Space EXPO on FXPO", image: img20 },
  { name: 'Germany (Ulm)', description: 'Europe', category: "Space Blue Offece", image: img21 },
  { name: 'Tokyo', description: 'Japan', category: "Spaceports", image: img22 },
  { name: 'Los Angeles', description: 'United States of America', category: "Spaceports", image: img23 },
  { name: 'Miami', description: 'United States of America', category: "Spaceports", image: img24 },
  { name: 'Dubai', description: 'United Arab Emirates', category: "Spaceports", image: img25 },
  { name: 'Dubai', description: 'United Arab Emirates', category: "Spaceports", image: img26 },
  { name: 'Cyprus', description: 'Europe', category: "Space EXPO on FXPO", image: img27 },
]
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