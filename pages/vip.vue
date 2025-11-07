<template>
	<section class="pt-14 font-satoshi">
        <WelcomeToFuture />
		<Sliders />
		<PartnersProductsAndPackages @goToPricing="goToSection = 'pricing'" class="mt-10"/>
	</section>
</template>
<script lang="ts" setup>
import WelcomeToFuture from "~/components/WelcomeToFuture.vue";
import PartnersProductsAndPackages from "~/components/PartnersProductsAndPackages.vue"
import { ref } from "vue";
import Sliders from "~/components/Sliders.vue";

const goToSection = ref<string | null>(null);
</script>
