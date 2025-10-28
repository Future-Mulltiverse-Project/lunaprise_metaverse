<template>
	<!-- <section
    v-if="isChecking"
    class="font-satoshi bg-white min-h-screen flex items-center justify-center"
  >
    <div class="flex flex-col items-center space-y-4">
      <div class="w-10 h-10 border-4 border-gray-300 border-t-[#C8AF57] rounded-full animate-spin"></div>
      <p class="text-gray-600 font-medium">Checking your session...</p>
    </div>
  </section> -->

	<div class="font-satoshi">
		<section v-if="showSection === 'intro'">
			<AboutProductsAndPackages
				@goToPricing="goToSection = 'pricing'"
				@showWelcome="handleShowSection('welcome')" />
			<PartnersProductsAndPackages @goToPricing="goToSection = 'pricing'" />
		</section>
		<section v-if="showSection === 'welcome'" class="py-10">
			<WelcomeToFuture
				@goToPricing="goToSection = 'pricing'"
				@showResults="handleShowSection('results')" />
		</section>
		<section v-if="showSection === 'results'" class="py-10">
			<ResultsProductsAndPackages @goToPricing="goToSection = 'pricing'" />
			<ExamplesProductsAndPackages @goToPricing="goToSection = 'pricing'" @showSupport="handleShowSection('support')"/>
		</section>
		<section v-if="showSection === 'support'" class="">
			<SupportExampleSection
				:goToSection="goToSection"
				@sectionNavigated="goToSection = null" />
		</section>
	</div>
</template>

<script lang="ts" setup>
import AboutProductsAndPackages from "~/components/AboutProductsAndPackages.vue";
import PartnersProductsAndPackages from "~/components/PartnersProductsAndPackages.vue";
import WelcomeToFuture from "~/components/WelcomeToFuture.vue";
import ResultsProductsAndPackages from "~/components/ResultsProductsAndPackages.vue";
import ExamplesProductsAndPackages from "~/components/ExamplesProductsAndPackages.vue";
import SupportExampleSection from "~/components/SupportExampleSection.vue";
import Team from "~/components/team.vue";
import { ref } from "vue";

const isChecking = ref(false);
const futureMultiverseName = ref<string>("");
const goToSection = ref<string | null>(null);
const showSection = ref("intro");

function handleShowSection(section: string) {
	showSection.value = section;
}

useHead({
	title: "Products and Services",
	meta: [
		{
			name: "description",
			content:
				"Learn more about our products and services at Lunaprise Metaverse.",
		},
	],
});

interface OnboardRequest {
	callback_uri: string;
	source_platform: string;
}

const handleOnboard = async (): Promise<void> => {
	const requestData: OnboardRequest = {
		callback_uri: window.location.href,
		source_platform: "website",
	};

	try {
		const response = await fetch(
			"https://api.auth.futuremultiverse.com/api/v1/account/connect/request",
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(requestData),
			}
		);

		const onboardResponse = await response.json();

		if (onboardResponse?.status === 1) {
			localStorage.setItem("futuremultiverseRedirectUrl", window.location.href);
			window.location.replace(
				`https://auth.futuremultiverse.com/?source_platform=website&request=${onboardResponse.data.reference}&sponsor=FCL-QW3RTY`
			);
		} else {
			alert(`Invalid response from onboard API: ${onboardResponse}`);
		}
	} catch (error) {
		console.error("Error during onboard:", error);
	}
};

const getCookie = (name: string): string | null => {
	const cookie = document.cookie
		.split("; ")
		.find((c) => c.startsWith(name + "="));
	return cookie ? decodeURIComponent(cookie.split("=")[1]) : null;
};

if (process.client) {
	const cookieValue = getCookie("futuremultiversename");
	futureMultiverseName.value = cookieValue || "";

	if (false) {
		handleOnboard();
	} else {
		const domain = window.location.hostname.split(".").slice(-2).join(".");
		document.cookie = `futuremultiversename=${futureMultiverseName.value}; path=/; domain=${domain}; SameSite=None; Secure`;
		isChecking.value = false;
	}
}
</script>
