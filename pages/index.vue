<template>
	<div v-if="futureMultiverseName">
		<div :class="$style.main">
			<div :class="$style.bg">
				<div
					:class="$style.el"
					class="grid grid-cols-1 sm:pb-20 pb-20 gap-2 h-svh">
					<div
						:class="$style.body"
						class="flex flex-col items-center justify-center">
						<div class="justify-center items-center">
							<div
								class="text-center inline-block align-middle space-y-8 sm:space-y-10 3xl:space-y-20 lg:mt-28">
								<div
									class="flex flex-col font-bold text-gold-light items-center justify-center">
									<p
										class="text-xl lg:text-4xl leading-tight tracking-wide lg:tracking-normal">
										ENTER<span class="text-white"> & </span>EXPERIENCE
										<span class="text-white"><span>&nbsp;</span>THE </span>
									</p>
									<p
										class="text-5xl lg:text-[5.2rem] leading-[1.1] tracking-wide">
										LUNAPRISE
									</p>
									<p class="text-white text-5xl lg:text-[5rem] leading-[1.1] lg:tracking-wide">
										METAVERSE
									</p>
								</div>

								<div class="space-y-4 2xl:space-y-6 justify-center">
									<div class="">
										<h4
											class="lg:text-xl md:text-sm text-[15px] text-center font-semibold 3xl:text-2xl">
											Experience the Lunaprise Mission
											<span class="text-gold-light">today</span>
											:
										</h4>
									</div>
									<div class="flex justify-center items-center">
										<div
											class="flex justify-center md:justify-end items-center">
											<NuxtLink
												to="/enter_game"
												class="flex justify-between items-center border-2 px-6 border-gold-light rounded-[10px] 3xl:text-xl sm:text-lg text-xs text-white py-2.5 cursor-pointer">
												<div class="flex items-center justify-center font-bold">
													<p>
														ENTER <span class="text-gold-light">LUNAPRISE</span>
														<br />
														IN THE MULTIVERSE
													</p>
												</div>
												<DegreeGreyIcon
													class="sm:mt-1 md:mt-six_margin_top"
													style="
														float: right;
														color: white;
														height: 17px;
														margin-left: 12px;
														width: rem-calc(30px);
													" />
											</NuxtLink>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div :class="$style.main" class="h-screen" v-else>
		<div :class="$style.bg" class="h-svh flex justify-center items-center">
			<div class="space-y-8 sm:space-y-10 3xl:space-y-20 mt-10 lg:mt-28">
				<div
					class="flex flex-col font-bold text-gold-light items-center justify-center">
					<p
						class="text-xl lg:text-4xl leading-tight tracking-wide lg:tracking-normal">
						ENTER<span class="text-white"> & </span>EXPERIENCE
						<span class="text-white"><span>&nbsp;</span>THE </span>
					</p>
					<p class="text-5xl lg:text-[5.2rem] leading-[1.1] tracking-wide">
						LUNAPRISE
					</p>
					<p
						class="text-white text-5xl lg:text-[5rem] leading-[1.1] lg:tracking-wide">
						METAVERSE
					</p>
				</div>

				<div class="space-y-4 2xl:space-y-6 justify-center">
					<div class="">
						<h4
							class="lg:text-xl md:text-sm text-[15px] text-center font-semibold 3xl:text-2xl">
							Experience the Lunaprise Mission
							<span class="text-gold-light">today</span>
							:
						</h4>
					</div>

					<div
						class="flex flex-col md:flex-row justify-center items-center gap-4">
						<div class="flex justify-center md:justify-end items-center">
							<button
								class="flex justify-between items-center border-2 px-6 border-gray-400 rounded-[10px] text-xs sm:text-sm text-gray-400 py-2.5 cursor-not-allowed"
								:disabled="true">
								<div class="flex items-center justify-center font-bold">
									ENTER LUNAPRISE
									<br />
									IN THE MULTIVERSE
								</div>
								<DegreeGreyIcon
									class="sm:mt-1 md:mt-six_margin_top"
									style="
										float: right;
										color: white;
										height: 17px;
										margin-left: 12px;
										width: rem-calc(30px);
									" />
							</button>
						</div>
						<div class="flex justify-center md:justify-start items-center">
							<button
								class="btn btn-outline-primary rounded-[10px] btn-white-text text-sm border-2 px-6 border-gold-light py-4 lg:py-5"
								@click="handleOnboard"
								:disabled="isConnecting"
								:class="{ 'cursor-not-allowed': isConnecting }">
								{{ isConnecting ? "Connecting..." : "CONNECT & ONBOARD" }}
							</button>
						</div>
					</div>

					<div class="lg:text-lg sm:text-sm text-xs text-center pb-10">
						Connect via Google, LinkedIn, X or Blockchain Wallet / Account
						<br />
						to Enter the Lunaprise Metaverse in the Future Trends Multiverse
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import AppHeader from "~/components/AppHeader.vue";
import DegreeGreyIcon from "@/icons/DegreeGreyIcon.vue";
import { ref, onMounted } from "vue";
import AppFooter from "~/components/AppFooter.vue";

const futureMultiverseName = ref<string>("");
const isConnecting = ref(false);
const userStatus = ref<string>("");

onMounted(() => {
	const getCookie = (name: string): string | null =>
		(
			document.cookie
				.split("; ")
				.find((cookie) => cookie.startsWith(name + "=")) || ""
		).split("=")[1] || null;

	const cookieValue = getCookie("futuremultiversename");
	futureMultiverseName.value = cookieValue !== null ? cookieValue : "";
	userStatus.value = futureMultiverseName.value;

	if (!futureMultiverseName.value) {
		const domain = window.location.hostname.split(".").slice(-2).join(".");
		document.cookie = `futuremultiversename=; path=/; domain=${domain}; SameSite=None; Secure`;
	}
});

// Interface for the request body
interface OnboardRequest {
	callback_uri: string;
	source_platform: string;
}

// const intercom = Intercom({
//   app_id: 'q8wn4ojz',
//   user_id: '12000',
//   name: 'Simon Volk',
//   email: 'futurecatalystlab@gmail.com',
//   created_at: 20241031,
// });

const handleOnboard = async (): Promise<void> => {
	isConnecting.value = true;
	const requestData: OnboardRequest = {
		callback_uri: `${window.location.origin}` || "http://localhost:3000",
		source_platform: "lunaprise_metaverse",
	};

	try {
		const response = await fetch(
			"https://api.auth.futuremultiverse.com/api/v1/account/connect/request",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(requestData),
			}
		);

		if (!response.ok) {
			console.error(`HTTP error! status: ${response.status}`);
		} else {
			const onboardResponse = await response.json(); // Parse the JSON response
			console.log(onboardResponse);

			if (onboardResponse.status == 1) {
				window.location.href = `https://auth.futuremultiverse.com/?source_platform=${requestData.source_platform}&request=${onboardResponse.data.reference}&sponsor=FCL-QW3RTY`;
			} else {
				console.error("Missing reference in response");
			}
		}
	} catch (error) {
		console.error(
			"Error during onboard:",
			error instanceof Error ? error.message : error
		);
	} finally {
		isConnecting.value = false;
	}
};

type Props = {
	title?: string | string[];
};

const props = defineProps<Props>();

const SEPARATOR = " - ";
const title = computed(() =>
	Array.isArray(props.title) ? props.title.join(SEPARATOR) : props.title
);
</script>

<style lang="scss" module>
.main {
	color: #fff;
	// overflow: scroll;
}
.btn77 {
	border: 2px solid #cfb16d !important;
	color: #fff !important;
	//font-size: 14px;
	text-align: left;
	padding-bottom: 8px !important;
	padding-top: 8px !important;
	font-weight: 600;
}
.btnDisabled {
	border: 2px solid #ababab !important;
	color: #ababab !important;
}
.btnDisabled77 {
	border: 2px solid #ababab !important;
	color: #ababab !important;
	//font-size: 14px;
	text-align: left;
	padding-bottom: 8px !important;
	padding-top: 8px !important;
	font-weight: 600;
}
.btn7 {
	color: gray !important;
}
.logo_style {
	padding-right: 20px;
	margin-top: 20px;
	margin-bottom: 20px;
	margin-left: 21px;
}
.el {
	//background-color: $dark;
	color: #fff;
	//min-height: 100vh;
}

.bg {
	// height: 120vh;
	background: url("@/assets/images/bg_lunaprise.png");
	background-repeat: no-repeat;
	background-color: #000000;
	// background-size: cover !important;
}

@media (min-width: 968px) {
	.bg {
		background-size: cover !important;
	}
}

.form {
	max-width: 100%;
	align-content: center;
	margin: 0 auto;
	margin-top: 4%;
	display: flex;
	align-items: center;
	min-width: rem-calc(10%);
}
.input {
	padding-top: 5px;
	padding-bottom: 5px;
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 8px;
	width: 60%;
	@media (max-width: 641px) {
		width: 55%;
	}
}

.logo2 {
	margin-top: 200px;
	margin-left: 103%;
	margin-bottom: -50px;
	width: 7%;
	min-width: 7%;
	@media (max-width: 641px) {
		width: 12%;
	}
}

.logo4 {
	width: 20%;
	min-width: 20%;
}

.logo5 {
	width: 13%;
	min-width: 13%;
	@media (max-width: 600px) {
		width: 1%;
		min-width: 1%;
	}
}

.chat_message {
	width: 100%;
	height: 40px;
	border: none;
	outline: none;
}
.chat_message::placeholder {
	font-weight: 600;
	color: black;
}

.formimage1 {
	width: 30px;
	min-width: 30px;
	margin-left: auto;
	float: right;
	margin-right: auto;
	cursor: pointer;
	padding-right: 5px;
}

.text3 {
	font-weight: 600;
	margin: 0 auto;
	text-align: center;
}

.text2 {
	font-size: 23px;
	line-height: divide(30, 22);
	text-align: center;
	font-weight: 500;
}

.btnRow {
	--gutter-x: #{rem-calc(32px)};
	--gutter-y: #{rem-calc(16px)};
	justify-content: center;

	:global(.col-auto) {
		flex: 0 0 rem-calc(262px);
	}
}

.btn {
	display: inline-block;
	width: 100%;
	font-size: 12px;
	margin-bottom: 14%;
}

.btn span {
	color: #fff;
}
</style>
