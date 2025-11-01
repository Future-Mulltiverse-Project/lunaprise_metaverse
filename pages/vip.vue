<template>
	<section class="pt-14 font-satoshi">
        <WelcomeToFuture />
		<PartnersProductsAndPackages @goToPricing="goToSection = 'pricing'" />
	</section>
</template>
<script lang="ts" setup>
import WelcomeToFuture from "~/components/WelcomeToFuture.vue";
import PartnersProductsAndPackages from "~/components/PartnersProductsAndPackages.vue"
import { ref } from "vue";

const goToSection = ref<string | null>(null);
</script>
