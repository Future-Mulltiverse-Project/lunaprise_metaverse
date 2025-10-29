<template>
	<section class="pt-14 font-satoshi">
        <!-- <PlatformsAndServicesSection />
		<Team @goToPricing="goToSection = 'pricing'" /> -->
	</section>
</template>
<script lang="ts" setup>
import SupportExampleSection from '~/components/SupportExampleSection.vue';
import Team from '~/components/team.vue';
import { ref } from "vue";

const goToSection = ref<string | null>(null);
</script>
