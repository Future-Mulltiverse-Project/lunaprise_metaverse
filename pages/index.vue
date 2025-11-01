<template>
    <WelcomeToLunaprise />
    <PartnersProductsAndPackages @goToPricing="goToSection = 'pricing'" />
    <JoinUs />
</template>
<script lang="ts" setup>
import PartnersProductsAndPackages from "~/components/PartnersProductsAndPackages.vue"
import WelcomeToLunaprise from "~/components/WelcomeToLunaprise.vue";
import JoinUs from "~/components/JoinUs.vue";
import { ref } from "vue";

const goToSection = ref<string | null>(null);
</script>