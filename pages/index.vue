<template>
    <WelcomeToLunaprise />
    <Sliders />
    <PartnersProductsAndPackages @goToPricing="goToSection = 'pricing'" class="mt-8"/>
    <JoinUs />
</template>
<script lang="ts" setup>
import PartnersProductsAndPackages from "~/components/PartnersProductsAndPackages.vue"
import WelcomeToLunaprise from "~/components/WelcomeToLunaprise.vue";
import JoinUs from "~/components/JoinUs.vue";
import Sliders from "~/components/Sliders.vue";
import { ref } from "vue";

const goToSection = ref<string | null>(null);
</script>
