<template>
	<div
		v-if="showModal"
		class="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
		<div
			class="bg-white p-6 rounded-[10px] border-2 border-gold-light shadow-lg w-80">
			<h3 class="text-lg text-center font-semibold">
				Do you want to Disconnect?
			</h3>
			<div class="mt-4 flex justify-center space-x-4">
				<!-- Cancel Button -->
				<button
					@click="showModal = false"
					class="flex-1 py-2 bg-gray-300 text-gray-700 rounded-[10px] hover:bg-gray-400 focus:outline-none text-center">
					Cancel
				</button>

				<!-- Yes Button -->
				<button
					@click="handleSignOut"
					class="flex-1 py-2 bg-red-600 text-white rounded-[10px] hover:bg-red-700 focus:outline-none text-center">
					Yes
				</button>
			</div>
		</div>
	</div>
	<nav
		class="lg:hidden lg:px-16 px-6 bg-white text-white shadow-md flex flex-wrap items-center lg:py-0 py-2"
		style="background-color: #0c0f22">
		<div class="flex-1 flex justify-between items-center">
			<a href="/" class="flex text-lg font-semibold">
				<img
					src="@/assets/images/image2.png"
					class="w-10"
					alt="logo" />
			</a>
		</div>
		<label class="relative z-40 cursor-pointer px-3 py-6" for="mobile-menu">
			<input class="peer hidden" type="checkbox" id="mobile-menu" />
			<div
				class="relative z-50 block h-[1px] w-7 bg-white content-[''] before:absolute before:top-[-0.35rem] before:z-50 before:block before:h-full before:w-full before:bg-white before:transition-all before:duration-200 before:ease-out before:content-[''] after:absolute after:right-0 after:bottom-[-0.35rem] after:block after:h-full after:w-full after:bg-white after:transition-all after:duration-200 after:ease-out after:content-[''] peer-checked:bg-transparent before:peer-checked:top-0 before:peer-checked:w-full before:peer-checked:rotate-45 before:peer-checked:transform after:peer-checked:bottom-0 after:peer-checked:w-full after:peer-checked:-rotate-45 after:peer-checked:transform"></div>
			<div
				class="fixed inset-0 z-40 hidden h-full w-full backdrop-blur-sm peer-checked:block"></div>

			<!-- Mobile nav -->
			<div
				class="fixed top-0 left-0 z-40 h-full w-full translate-x-full overflow-y-auto overscroll-y-none transition duration-500 peer-checked:translate-x-0">
				<Accordion
					type="single"
					class="bg-[#0C0F22] py-2 items-center sticky left-0">
					<AccordionItem value="item-1" class="border-none">
						<img
							src="@/assets/images/image2.png"
							class="w-10 h-auto ml-7 mt-1"
							alt="logo" />
					</AccordionItem>
				</Accordion>
				<div
					class="float-left min-h-full w-[80%] px-8 pt-10 space-y-4 shadow-2xl"
					style="background-color: #1a1c37">
					<menu>
						<Accordion type="single" collapsible>
							<AccordionItem
								value="item-1"
								style="
									font-size: 1rem;
									color: white;
									margin-bottom: 1rem;
									border: none;
								">
								<NuxtLink to="/" class="font-white font-medium">
									Home
								</NuxtLink>
							</AccordionItem>

							<AccordionItem value="future-multiverse" class="border-none">
								<AccordionTrigger
									class="text-white hover-color data-[state=open]:text-gold-light [&>svg]:hidden after:hidden">
									Lunaprise Metaverse
								</AccordionTrigger>
								<AccordionContent
									class="text-white"
									style="margin-left: 0.1rem; width: 20rem">
									<li class="col-span-2 flex ml-4 flex-col items-left">
										<ul class="grid grid-cols-1 gap-2">
											<li class="col-span-1 flex flex-col items-left">
												<div
													class="flex items-center hover:bg-custom-dark p-2 rounded-[10px] group">
													<div
														class="p-1 rounded group-hover:bg-gold-light bg-slate-50">
														<EnterFutureIcon class="p-1 w-8 h-auto ml-0" />
													</div>
													<div class="pl-3">
														<NuxtLink to="/">
															<p
																class="text-sm font-medium text-white group-hover:text-gold-light">
																Enter Lunaprise Metaverse
															</p>
															<p
																class="text-xs text-gray-400 group-hover:text-white">
																In the Multiverse
															</p>
														</NuxtLink>
													</div>
												</div>
												<div
													class="flex items-center hover:bg-custom-dark p-2 rounded-[10px] group">
													<div
														class="p-1 rounded group-hover:bg-gold-light bg-slate-50">
														<ProductsServicesIcon class="p-1 w-8 h-auto ml-0" />
													</div>
													<div class="pl-3">
														<NuxtLink to="/products_and_services">
															<p
																class="text-sm font-medium text-white group-hover:text-gold-light">
																Products & Services
															</p>
															<p
																class="text-xs text-gray-400 group-hover:text-white">
																Lunaprise Metaverse Offerings
															</p>
														</NuxtLink>
													</div>
												</div>
											</li>

											<li class="col-span-1 flex flex-col items-right">
												<div
													class="flex items-center hover:bg-custom-dark p-2 rounded-[10px] group">
													<div
														class="p-1 rounded group-hover:bg-gold-light bg-slate-50">
														<StarIcon class="p-1 w-8 h-auto ml-0" />
													</div>
													<div class="pl-3">
														<NuxtLink
															to="https://www.spaceblue.club">
															<p
																class="text-sm font-medium text-white group-hover:text-gold-light">
																Lunaprise Museum
															</p>
															<p
																class="text-xs text-gray-400 group-hover:text-white">
																First Timecapsule on the Moon
															</p>
														</NuxtLink>
													</div>
												</div>
												<div
													class="flex items-center hover:bg-custom-dark p-2 rounded-[10px] group">
													<div
														class="p-1 rounded group-hover:bg-gold-light bg-slate-50">
														<SearchHeaderIcon class="p-1 w-8 h-auto ml-0" />
													</div>
													<div class="pl-3">
														<NuxtLink
															to="https://guidebook.lunaprisemetaverse.com">
															<p
																class="text-sm font-medium text-white group-hover:text-gold-light">
																Lunaprise GuideBook
															</p>
															<p
																class="text-xs text-gray-400 group-hover:text-white">
																Your AI Based Future Guide
															</p>
														</NuxtLink>
													</div>
												</div>
											</li>
										</ul>
									</li>
								</AccordionContent>
							</AccordionItem>

							<AccordionItem value="movement" class="border-none">
								<AccordionTrigger
									class="text-white data-[state=open]:text-gold-light [&>svg]:hidden after:hidden">
									Mission & Movement
								</AccordionTrigger>
								<AccordionContent
									class="text-white"
									style="margin-left: 0.1rem; width: 20rem">
									<li class="col-span-2 flex ml-4 flex-col items-left">
										<ul class="grid grid-cols-1 gap-2">
											<li class="col-span-1 flex flex-col items-left">
												<div
													class="flex items-center hover:bg-custom-dark p-2 rounded-[10px] group">
													<div
														class="p-1 rounded group-hover:bg-gold-light bg-slate-50">
														<ConnectIcon class="p-1 w-8 h-auto ml-0" />
													</div>
													<div class="pl-3">
														<NuxtLink to="/">
															<p
																class="text-sm font-medium text-white group-hover:text-gold-light">
																Lunaprise Mission
															</p>
															<p
																class="text-xs text-gray-400 group-hover:text-white">
																Lunaprise Metaverse &times; Lunarbits
															</p>
														</NuxtLink>
													</div>
												</div>
												<div
													class="flex items-center hover:bg-custom-dark p-2 rounded-[10px] group">
													<div
														class="p-1 rounded group-hover:bg-gold-light bg-slate-50">
														<ConnectIcon class="p-1 w-8 h-auto ml-0" />
													</div>
													<div class="pl-3">
														<NuxtLink to="https://www.spaceblue.club">
															<p
																class="text-sm font-medium text-white group-hover:text-gold-light">
																Space Blue, Artists, Partners
															</p>
															<p
																class="text-xs text-gray-400 group-hover:text-white">
																Lunaprise Mission Curator
															</p>
														</NuxtLink>
													</div>
												</div>
												<div
													class="flex items-center hover:bg-custom-dark p-2 rounded-[10px] group">
													<div
														class="p-1 rounded group-hover:bg-gold-light bg-slate-50">
														<ConnectIcon class="p-1 w-8 h-auto ml-0" />
													</div>
													<div class="pl-3">
														<NuxtLink to="https://guidebook.lunaprisemetaverse.com">
															<p
																class="text-sm font-medium text-white group-hover:text-gold-light">
																Press, Media & Community
															</p>
															<p
																class="text-xs text-gray-400 group-hover:text-white">
																Lunaprise &times; FTMV Family
															</p>
														</NuxtLink>
													</div>
												</div>
												<div
													class="flex items-center hover:bg-custom-dark p-2 rounded-[10px] group">
													<div
														class="p-1 rounded group-hover:bg-gold-light bg-slate-50">
														<InitiativeIcon class="p-1 w-8 h-auto ml-0" />
													</div>
													<div class="pl-3">
														<NuxtLink to="https://www.futuremultiverse.dev/mission_and_movement">
															<p
																class="text-sm font-medium text-white group-hover:text-gold-light">
																FMV Mission & Movement
															</p>
															<p
																class="text-xs text-gray-400 group-hover:text-white">
																Core Values & Driving Force
															</p>
														</NuxtLink>
													</div>
												</div>
												<div
													class="flex items-center hover:bg-custom-dark p-2 rounded-[10px] group">
													<div
														class="p-1 rounded group-hover:bg-gold-light bg-slate-50">
														<FutureTrendsIcon class="p-1 w-8 h-auto ml-0" />
													</div>
													<div class="pl-3">
														<NuxtLink to="https://www.futuretrendsmatrix.com">
															<p
																class="text-sm font-medium text-white group-hover:text-gold-light">
																Future Trends Group
															</p>
															<p
																class="text-xs text-gray-400 group-hover:text-white">
																Global Matrix, Influence & Impact
															</p>
														</NuxtLink>
													</div>
												</div>
												<div
													class="flex items-center hover:bg-custom-dark p-2 rounded-[10px] group">
													<div
														class="p-1 rounded group-hover:bg-gold-light bg-slate-50">
														<AcadamyIcon class="p-1 w-8 h-auto ml-0" />
													</div>
													<div class="pl-3">
														<NuxtLink
															to="https://guidebook.lunaprisemetaverse.com">
															<p
																class="text-sm font-medium text-white group-hover:text-gold-light">
																In A Nutshell (LinkTree)
															</p>
															<p
																class="text-sm text-gray-400 group-hover:text-white">
																Everything to Learn & Share
															</p>
														</NuxtLink>
													</div>
												</div>
											</li>
										</ul>
									</li>
								</AccordionContent>
							</AccordionItem>

							<!-- <AccordionItem value="search" class="border-none">
								<AccordionTrigger
									class="text-white flex justify-normal data-[state=open]:text-gold-light [&>svg]:hidden after:hidden no-underline hover:no-underline">
									<img
										src="~/assets/images/drop_menu/magnifier_white.png"
										class="w-4 h-4"
										alt="search_image" />
									<span class="no-underline hover:no-underline"
										>&nbsp;Search</span
									>
								</AccordionTrigger>
								<AccordionContent
									class="text-white"
									style="margin-left: 0.1rem; width: 20rem">
									<li class="col-span-2 flex ml-4 flex-col items-left">
										<ul class="grid grid-cols-1 gap-2">
											<div
												class="flex items-center mb-4"
												:class="$style.hover_color">
												<div
													class="p-1 rounded border-2 border-solid border-slate-50 bg-slate-50">
													<img
														class="p-1"
														src="~/assets/images/drop_menu/graceai.png" />
												</div>
												<div class="pl-3">
													<NuxtLink to="https://guidebook.lunaprisemetaverse.com">
														<p class="text-sm font-medium dark:text-white">
															GraceAI
														</p>
														<p class="text-xs font-semibold text-slate-400">
															Your AI based Future Guide
														</p>
													</NuxtLink>
												</div>
											</div>
											<div
												class="flex items-center mb-4"
												:class="$style.hover_color">
												<div
													class="p-1 rounded border-2 border-solid border-slate-50 bg-slate-50"
													:class="$style.icon_bg">
													<img
														class="p-1"
														style="width: 30px !important"
														src="~/assets/images/drop_menu/guidebook.png" />
												</div>
												<div class="pl-3">
													<NuxtLink to="https://guidebook.lunaprisemetaverse.com">
														<p class="text-sm font-medium dark:text-white">
															GuideBook
														</p>
														<p class="text-xs font-semibold text-slate-400">
															Your AI based Future Guide
														</p>
													</NuxtLink>
												</div>
											</div>
											<div class="flex items-center mb-4">
												<div class="flex">
													<div class="flex-1">
														<p
															class="text-sm text-white font-medium dark:text-white">
															Search / Ask your Question:
														</p>

														<p class="text-xs text-white">
															Search Future Multiverse / Ask GraceAI
														</p>
													</div>
												</div>
											</div>
											<div class="flex items-center mb-4">
												<div class="relative">
													<div
														class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
														<svg
															style="color: #b8b34b !important"
															class="w-5 h-5 text-gray-500"
															fill="none"
															stroke="currentColor"
															viewBox="0 0 24 24"
															xmlns="http://www.w3.org/2000/svg">
															<path
																stroke-linecap="round"
																stroke-linejoin="round"
																stroke-width="2"
																d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
														</svg>
													</div>
													<input
														id="search_bar"
														type="text"
														class="block md:w-full w-52 pl-10 text-custom-dark pr-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
														:class="$style.input_search"
														placeholder="Search / Ask" />
												</div>
											</div>
										</ul>
									</li>
								</AccordionContent>
							</AccordionItem> -->

							<AccordionItem
								value="onboard"
								style="padding-bottom: 10px; padding-top: 18px; border: none">
								<div>
									<div>
										<div class="flex sm:justify-end space-x-2">
											<button
												@click="handleOnboard"
												:disabled="true"
												class="cursor-not-allowed px-2 py-2 text-medium text-white font-medium"
												style="
													padding-right: 16px;
													padding-left: 16px;
													border: 2px solid #fde8ae;
													background-color: #1a1c37;
													border-radius: 10px;
												">
												{{
													isConnecting ? "Connecting..." : "Connect / Onboard"
												}}
											</button>
										</div>
									</div>
								</div>
							</AccordionItem>
						</Accordion>
					</menu>
				</div>
			</div>
		</label>
	</nav>

	<header
		:class="$style.el"
		class="hidden lg:flex justify-center text-white">
		<div class="flex justify-center text-white">
			<NavigationMenu>
				<NavigationMenuList>
					<!-- Logo -->
					<NavigationMenuItem>
						<NavigationMenuLink>
							<img
								src="@/assets/images/image2.png"
								class="w-12 h-auto pr-2"
								alt="logo" />
						</NavigationMenuLink>
					</NavigationMenuItem>
					<!-- end Logo -->
					<!-- Home -->
					<NavigationMenuItem>
						<NavigationMenuLink>
							<NuxtLink to="/">
								<p class="text-lg font-medium hover:text-gold-light px-4">
									Home
								</p>
							</NuxtLink>
						</NavigationMenuLink>
					</NavigationMenuItem>
					<!-- end Home -->
					<!-- Future Multiverse -->
					<NavigationMenuItem>
						<NavigationMenuTrigger class="data-[state=open]:text-gold-light">
							<p class="text-lg">Lunaprise Metaverse</p>
						</NavigationMenuTrigger>
						<NavigationMenuContent
							class="w-full general_nav_width bg-white absolute flex justify-center"
							style="border: 0px; margin-top: 0.8rem">
							<ul
								class="w-full grid grid-cols-3 gap-4"
								style="width: 920px; border: 0px; padding-right: 0px">
								<li class="col-span-2 flex flex-col items-left pt-5 pl-5 pr-3">
									<ul class="grid grid-cols-2 gap-3 p-1">
										<li class="col-span-1 flex flex-col items-left">
											<div
												class="flex items-center hover:bg-custom-dark p-2 rounded-[10px] group">
												<div
													class="p-1 rounded group-hover:bg-gold-light bg-slate-50">
													<EnterFutureIcon class="p-1 w-8 h-auto ml-0" />
												</div>
												<div class="pl-3">
													<NuxtLink to="/">
														<p
															class="text-sm text-gray-700 font-bold dark:text-white group-hover:text-gold-light">
															Enter Lunaprise Metaverse
														</p>
														<p
															class="text-xs text-gray-400 group-hover:text-white">
															In the Multiverse
														</p>
													</NuxtLink>
												</div>
											</div>
											<div
												class="flex items-center hover:bg-custom-dark p-2 rounded-[10px] group">
												<div
													class="p-1 rounded group-hover:bg-gold-light bg-slate-50">
													<ProductsServicesIcon class="p-1 w-8 h-auto ml-0" />
												</div>
												<div class="pl-3">
													<NuxtLink to="/products_and_services">
														<p
															class="text-sm text-gray-700 font-bold dark:text-white group-hover:text-gold-light">
															Products & Services
														</p>
														<p
															class="text-xs text-gray-400 group-hover:text-white">
															Lunaprise Metaverse Offerings
														</p>
													</NuxtLink>
												</div>
											</div>
										</li>

										<li class="col-span-1 flex flex-col items-right">
											<div
												class="flex items-center hover:bg-custom-dark p-2 rounded-[10px] group">
												<div
													class="p-1 rounded group-hover:bg-gold-light bg-slate-50">
													<StarIcon class="p-1 w-8 h-auto ml-0" />
												</div>
												<div class="pl-3">
													<NuxtLink to="https://www.spaceblue.club">
														<p
															class="text-sm text-gray-700 font-bold dark:text-white group-hover:text-gold-light">
															Lunaprise Museum
														</p>
														<p
															class="text-xs text-gray-400 group-hover:text-white">
															First Timecapsule on the Moon
														</p>
													</NuxtLink>
												</div>
											</div>
											<div
												class="flex items-center hover:bg-custom-dark p-2 rounded-[10px] group">
												<div
													class="p-1 rounded group-hover:bg-gold-light bg-slate-50">
													<SearchHeaderIcon class="p-1 w-8 h-auto ml-0" />
												</div>
												<div class="pl-3">
													<NuxtLink
														to="https://guidebook.lunaprisemetaverse.com">
														<p
															class="text-sm text-gray-700 font-bold dark:text-white group-hover:text-gold-light">
															Lunaprise GuideBook
														</p>
														<p
															class="text-xs text-gray-400 group-hover:text-white">
															Your AI Based Future Guide
														</p>
													</NuxtLink>
												</div>
											</div>
										</li>
										<li
											class="col-span-3 flex flex-col items-left pt-3 border-t-2 border-dashed border-gray-300">
											<div class="flex pt-2">
												<div class="flex-1">
													<p
														class="text-base text-gray-700 font-bold dark:text-white">
														Enter the Lunaprise Metaverse:
													</p>

													<p
														class="text-sm text-gray-400 group-hover:text-white">
														Lunaprise Mission &times; Future Trends Multiverse.
													</p>
												</div>
												<div class="flex justify-end space-x-2">
													<button
														@click="goToExperience"
														class="px-2 py-0.5 pl-6 pr-6 text-sm text-white font-medium hover:bg-gold-light"
														style="
															background-color: #1a1c37;
															border-radius: 4px;
														">
														Maps
													</button>
													<button
														@click="goToExperience"
														class="px-1 py-0.5 pl-4 pr-4 text-sm text-white font-medium rounded-md hover:bg-gold-light"
														style="
															background-color: #cfb16d;
															border-radius: 4px;
														">
														Enter & Experience
													</button>
												</div>
											</div>
										</li>
									</ul>
								</li>
								<li
									class="col-span-1 flex flex-col items-right h-[18rem] w-full">
									<img
										src="~/assets/images/header.png"
										style="width: 100%; height: 100%"
										alt="Curve Ball Image"
										class="object-cover overflow-hidden" />
								</li>
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
					<!-- end Future Multiverse -->
					<!-- Future Trends Catalyst -->
					<!-- <NavigationMenuItem>
						<NavigationMenuTrigger class="data-[state=open]:text-gold-light">
							<p class="text-lg">Future Trends Catalyst</p>
						</NavigationMenuTrigger>
						<NavigationMenuContent
							class="w-full general_nav_width bg-white absolute flex justify-center"
							style="border: 0px; margin-top: 0.8rem">
							<ul
								class="w-full grid grid-cols-3 gap-4"
								style="width: 920px; border: 0px; padding-right: 0px">
								<li class="col-span-2 flex flex-col items-left pt-5 pl-5 pr-3">
									<ul class="grid grid-cols-2 gap-3 p-1">
										<li class="col-span-1 flex flex-col items-left">
											<div
												class="flex items-center hover:bg-custom-dark p-2 rounded-[10px] group">
												<div
													class="p-1 rounded group-hover:bg-gold-light bg-slate-50">
													<FutureIcon class="p-1 w-8 h-auto ml-0" />
												</div>
												<div class="pl-3">
													<NuxtLink to="https://www.futuremultiverse.dev/welcome_and_overview">
														<p
															class="text-sm font-bold text-gray-700 dark:text-white group-hover:text-gold-light">
															Welcome
														</p>
														<p
															class="text-xs text-gray-400 group-hover:text-white">
															Overview & Examples
														</p>
													</NuxtLink>
												</div>
											</div>
											<div
												class="flex items-center hover:bg-custom-dark p-2 rounded-[10px] group">
												<div
													class="p-1 rounded group-hover:bg-gold-light bg-slate-50">
													<RocketIcon class="p-1 w-8 h-auto ml-0" />
												</div>
												<div class="pl-3">
													<NuxtLink to="https://launchpad.futuremultiverse.dev">
														<p
															class="text-sm text-gray-700 font-bold dark:text-white group-hover:text-gold-light">
															LaunchPad
														</p>
														<p
															class="text-xs text-gray-400 group-hover:text-white">
															Launch & Accelerate
														</p>
													</NuxtLink>
												</div>
											</div>
											<div
												class="flex items-center hover:bg-custom-dark p-2 rounded-[10px] group">
												<div
													class="p-1 rounded group-hover:bg-gold-light bg-slate-50">
													<MarketplaceIcon class="p-1 w-8 h-auto ml-0" />
												</div>
												<div class="pl-3">
													<NuxtLink
														to="https://marketplace.futuremultiverse.dev">
														<p
															class="text-sm text-gray-700 font-bold dark:text-white group-hover:text-gold-light">
															Marketplace
														</p>
														<p
															class="text-xs text-gray-400 group-hover:text-white">
															Do Business & Scale
														</p>
													</NuxtLink>
												</div>
											</div>
										</li>

										<li class="col-span-1 flex flex-col items-right">
											<div
												class="flex items-center hover:bg-custom-dark p-2 rounded-[10px] group">
												<div
													class="p-1 rounded group-hover:bg-gold-light bg-slate-50">
													<FutureIcon class="p-1 w-8 h-auto ml-0" />
												</div>
												<div class="pl-3">
													<NuxtLink to="https://www.futuremultiverse.dev/future_studios">
														<p
															class="text-sm text-gray-700 font-bold dark:text-white group-hover:text-gold-light">
															Future Studios
														</p>
														<p
															class="text-xs text-gray-400 group-hover:text-white">
															Creation for your Future.
														</p>
													</NuxtLink>
												</div>
											</div>
											<div
												class="flex items-center hover:bg-custom-dark p-2 rounded-[10px] group">
												<div
													class="p-1 rounded group-hover:bg-gold-light bg-slate-50">
													<StarIcon class="p-1 w-8 h-auto ml-0" />
												</div>
												<div class="pl-3">
													<NuxtLink to="https://guidebook.futuremultiverse.com">
														<p
															class="text-sm text-gray-700 font-bold dark:text-white group-hover:text-gold-light">
															LAB
														</p>
														<p
															class="text-xs text-gray-400 group-hover:text-white">
															Future Trends Catalyst Solutions
														</p>
													</NuxtLink>
												</div>
											</div>
											<div
												class="flex items-center hover:bg-custom-dark p-2 rounded-[10px] group">
												<div
													class="p-1 rounded group-hover:bg-gold-light bg-slate-50">
													<BlockchainIcon class="p-1 w-8 h-auto ml-0" />
												</div>
												<div class="pl-3">
													<NuxtLink to="https://guidebook.futuremultiverse.com">
														<p
															class="text-sm text-gray-700 font-bold dark:text-white group-hover:text-gold-light">
															Blockchain
														</p>
														<p
															class="text-xs text-gray-400 group-hover:text-white">
															The FMV Cross-Chain
														</p>
													</NuxtLink>
												</div>
											</div>
										</li>
										<li
											class="col-span-3 flex flex-col items-left pt-3 border-t-2 border-dashed border-gray-300">
											<div class="flex pt-2">
												<div class="flex-1">
													<p
														class="text-base text-gray-700 font-bold dark:text-white">
														Enter the Lunaprise Metaverse:
													</p>

													<p
														class="text-sm text-gray-400 group-hover:text-white">
														Lunaprise Mission &times; Future Trends Multiverse.
													</p>
												</div>
												<div class="flex justify-end space-x-2">
													<button
														@click="goToExperience"
														class="px-2 py-0.5 pl-6 pr-6 text-sm text-white font-medium hover:bg-gold-light"
														style="
															background-color: #1a1c37;
															border-radius: 4px;
														">
														Maps
													</button>
													<button
														@click="goToExperience"
														class="px-1 py-0.5 pl-4 pr-4 text-sm text-white font-medium rounded-md hover:bg-gold-light"
														style="
															background-color: #cfb16d;
															border-radius: 4px;
														">
														Enter & Experience
													</button>
												</div>
											</div>
										</li>
									</ul>
								</li>
								<li
									class="col-span-1 flex flex-col items-right h-[18rem] w-full">
									<img
										src="~/assets/images/header.png"
										style="width: 100%; height: 100%"
										alt="Curve Ball Image"
										class="object-cover overflow-hidden" />
								</li>
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem> -->
					<!-- end Future Trends Catalyst -->
					<!-- Mission -->
					<NavigationMenuItem>
						<NavigationMenuTrigger class="data-[state=open]:text-gold-light">
							<p class="text-lg">Mission & Movement</p>
						</NavigationMenuTrigger>
						<NavigationMenuContent
							class="w-full bg-white flex justify-center"
							style="border: 0px; margin-top: 0.8rem">
							<ul
								class="w-full grid grid-cols-3 gap-4"
								style="width: 920px; border: 0px; padding-right: 0px">
								<li class="col-span-2 flex flex-col items-left pt-5 pl-5 pr-3">
									<ul class="grid grid-cols-2 gap-3 p-1">
										<li class="col-span-1 flex flex-col items-left">
											<div
												class="flex items-center hover:bg-custom-dark p-2 rounded-[10px] group">
												<div
													class="p-1 rounded group-hover:bg-gold-light bg-slate-50">
													<ConnectIcon class="p-1 w-8 h-auto ml-0" />
												</div>
												<div class="pl-3">
													<NuxtLink to="https://www.futuremultiverse.dev/mission_and_movement">
														<p
															class="text-sm text-gray-700 font-bold dark:text-white group-hover:text-gold-light">
															Lunaprise Mission
														</p>
														<p
															class="text-xs text-gray-400 group-hover:text-white">
															Lunaprise Metaverse &times; Lunarbits
														</p>
													</NuxtLink>
												</div>
											</div>
											<div
												class="flex items-center hover:bg-custom-dark p-2 rounded-[10px] group">
												<div
													class="p-1 rounded group-hover:bg-gold-light bg-slate-50">
													<ConnectIcon class="p-1 w-8 h-auto ml-0" />
												</div>
												<div class="pl-3">
													<NuxtLink to="https://www.spaceblue.club">
														<p
															class="text-sm text-gray-700 font-bold dark:text-white group-hover:text-gold-light">
															Space Blue, Artists, Partners
														</p>
														<p
															class="text-xs text-gray-400 group-hover:text-white">
															Lunaprise Mission Curator
														</p>
													</NuxtLink>
												</div>
											</div>
											<div
												class="flex items-center hover:bg-custom-dark p-2 rounded-[10px] group">
												<div
													class="p-1 rounded group-hover:bg-gold-light bg-slate-50">
													<ConnectIcon class="p-1 w-8 h-auto ml-0" />
												</div>
												<div class="pl-3">
													<NuxtLink to="https://guidebook.lunaprisemetaverse.com">
														<p
															class="text-sm text-gray-700 font-bold dark:text-white group-hover:text-gold-light">
															Press, Media & Community
														</p>
														<p
															class="text-xs text-gray-400 group-hover:text-white">
															Lunaprise &times; FTMV Family
														</p>
													</NuxtLink>
												</div>
											</div>
										</li>

										<li class="col-span-1 flex flex-col items-right">
											<div
												class="flex items-center hover:bg-custom-dark p-2 rounded-[10px] group">
												<div
													class="p-1 rounded group-hover:bg-gold-light bg-slate-50">
													<InitiativeIcon class="p-1 w-8 h-auto ml-0" />
												</div>
												<div class="pl-3">
													<NuxtLink to="https://www.futuremultiverse.dev/mission_and_movement">
														<p
															class="text-sm text-gray-700 font-bold dark:text-white group-hover:text-gold-light">
															FMV Mission & Movement
														</p>
														<p
															class="text-xs text-gray-400 group-hover:text-white">
															Core Values & Driving Force
														</p>
													</NuxtLink>
												</div>
											</div>
											<div
												class="flex items-center hover:bg-custom-dark p-2 rounded-[10px] group">
												<div
													class="p-1 rounded group-hover:bg-gold-light bg-slate-50">
													<FutureTrendsIcon class="p-1 w-8 h-auto ml-0" />
												</div>
												<div class="pl-3">
													<NuxtLink to="https://www.futuretrendsmatrix.com">
														<p
															class="text-sm text-gray-700 font-bold dark:text-white group-hover:text-gold-light">
															Future Trends Group
														</p>
														<p
															class="text-xs text-gray-400 group-hover:text-white">
															Global Matrix, Influence & Impact
														</p>
													</NuxtLink>
												</div>
											</div>
											<div
												class="flex items-center hover:bg-custom-dark p-2 rounded-[10px] group">
												<div
													class="p-1 rounded group-hover:bg-gold-light bg-slate-50">
													<AcadamyIcon class="p-1 w-8 h-auto ml-0" />
												</div>
												<div class="pl-3">
													<NuxtLink to="https://guidebook.lunaprisemetaverse.com">
														<p
															class="text-sm text-gray-700 font-bold dark:text-white group-hover:text-gold-light">
															In A Nutshell (LinkTree)
														</p>
														<p
															class="text-sm text-gray-400 group-hover:text-white">
															Everything to Learn & Share
														</p>
													</NuxtLink>
												</div>
											</div>
										</li>

										<li
											class="col-span-3 flex flex-col items-left pt-3 border-t-2 border-dashed border-gray-300">
											<div class="flex pt-2">
												<div class="flex-1">
													<p
														class="text-base text-gray-700 font-bold dark:text-white">
														Enter the Lunaprise Metaverse:
													</p>

													<p
														class="text-sm text-gray-400 group-hover:text-white">
														Lunaprise Mission &times; Future Trends Multiverse.
													</p>
												</div>
												<div class="flex justify-end space-x-2">
													<button
														@click="goToExperience"
														class="px-2 py-0.5 pl-6 pr-6 text-sm text-white font-medium hover:bg-gold-light"
														style="
															background-color: #1a1c37;
															border-radius: 4px;
														">
														Maps
													</button>
													<button
														@click="goToExperience"
														class="px-1 py-0.5 pl-4 pr-4 text-sm text-white font-medium rounded-md hover:bg-gold-light"
														style="
															background-color: #cfb16d;
															border-radius: 4px;
														">
														Enter & Experience
													</button>
												</div>
											</div>
										</li>
									</ul>
								</li>
								<li
									class="col-span-1 flex flex-col items-right h-[18rem] w-full">
									<img
										src="~/assets/images/header.png"
										style="width: 100%; height: 100%"
										alt="Curve Ball Image"
										class="object-cover overflow-hidden" />
								</li>
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
					<!-- end Movement -->
					<!-- end Search -->
					<!-- <NavigationMenuItem>
						<NavigationMenuTrigger>
							<img
								src="~/assets/images/drop_menu/magnifier_white.png"
								style="width: auto; height: 100%"
								alt="Curve Ball Image"
								class="navigation_image" />
						</NavigationMenuTrigger>
						<NavigationMenuContent
							class="w-full bg-white flex justify-center"
							style="border: 0px; height: 100% !important; margin-top: 0.8rem">
							<ul
								class="grid grid-cols-3 gap-4 overflow-hidden"
								style="width: 950px; border: 0px; padding-right: 0px">
								<li class="col-span-2 flex flex-col items-left pt-5 pl-5 pr-3">
									<ul class="grid grid-cols-1 gap-2 p-1">
										<div class="flex items-center mb-1">
											<div class="flex">
												<div class="flex-1">
													<p
														class="text-base text-gray-700 font-bold dark:text-white">
														Search / Ask your Question:
													</p>
													<p class="text-xs text-gray-400">
														Search Lunaprise Metaverse / Ask GraceAI / Guidebook
													</p>
													<div class="flex items-center mb-2 mt-2">
														<div class="relative">
															<div
																class="absolute inset-y-0 left-0 flex items-center pointer-events-none"
																style="padding-left: 40%">
																<svg
																	v-if="!searchQuery"
																	style="color: #b8b34b !important"
																	class="w-5 h-5 text-gray-500"
																	fill="none"
																	stroke="currentColor"
																	viewBox="0 0 24 24"
																	xmlns="http://www.w3.org/2000/svg">
																	<path
																		stroke-linecap="round"
																		stroke-linejoin="round"
																		stroke-width="2"
																		d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
																</svg>
															</div>
															<input
																v-model="searchQuery"
																id="search_bar"
																type="text"
																class="block pl-10 pr-4 py-2 text-custom-dark rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
																:class="$style.input_search_desktop"
																placeholder="Search / Ask" />
														</div>
													</div>
												</div>
											</div>
										</div>
									</ul>
									<ul class="grid grid-cols-2 gap-3 p-1">
										<li class="col-span-1 flex flex-col items-left">
											<div
												class="flex items-center mb-4 hover:bg-custom-dark p-2 rounded-[10px] group">
												<div
													class="p-1 rounded border-2 border-solid border-slate-50 group-hover:bg-gold-light group-hover:border-gold-light bg-slate-50">
													<img
														class="p-1"
														style="width: 30px !important"
														src="~/assets/images/drop_menu/guidebook.png" />
												</div>
												<div class="pl-3">
													<NuxtLink to="https://guidebook.lunaprisemetaverse.com">
														<p
															class="text-base text-gray-700 font-bold group-hover:text-gold-light">
															GuideBook
														</p>
														<p
															class="text-sm text-gray-400 group-hover:text-white">
															Your AI based Future Guide
														</p>
													</NuxtLink>
												</div>
											</div>
										</li>
										<li class="col-span-1 flex flex-col items-left">
											<div
												class="flex items-center mb-4 hover:bg-custom-dark p-2 rounded-[10px] group">
												<div
													class="p-1 rounded border-2 border-solid border-slate-50 group-hover:bg-gold-light group-hover:border-gold-light bg-slate-50">
													<img
														class="p-1"
														style="width: 30px !important"
														src="~/assets/images/drop_menu/graceai.png" />
												</div>
												<div class="pl-3">
													<NuxtLink to="https://guidebook.lunaprisemetaverse.com">
														<p
															class="text-base text-gray-700 font-bold group-hover:text-gold-light">
															GraceAI
														</p>
														<p
															class="text-sm text-gray-400 group-hover:text-white">
															Your AI based Future Guide
														</p>
													</NuxtLink>
												</div>
											</div>
										</li>
										<li
											class="col-span-3 flex flex-col items-left pt-3 border-t-2 border-dashed border-gray-300">
											<div class="flex pt-2">
												<div class="flex-1">
													<p
														class="text-base text-gray-700 font-bold dark:text-white">
														Enter the Lunaprise Metaverse:
													</p>

													<p
														class="text-sm text-gray-400 group-hover:text-white">
														Lunaprise Mission &times; Future Trends Multiverse.
													</p>
												</div>
												<div class="flex justify-end space-x-2">
													<button
														@click="goToExperience"
														class="px-2 py-0.5 pl-6 pr-6 text-sm text-white font-medium hover:bg-gold-light"
														style="
															background-color: #1a1c37;
															border-radius: 4px;
														">
														Maps
													</button>
													<button
														@click="goToExperience"
														class="px-1 py-0.5 pl-4 pr-4 text-white font-medium rounded-md hover:bg-gold-light"
														style="
															background-color: #cfb16d;
															border-radius: 4px;
														">
														Enter & Experience
													</button>
												</div>
											</div>
										</li>
									</ul>
								</li>
								<li class="col-span-1 flex flex-col items-right h-[20rem]">
									<img
										src="~/assets/images/header.png"
										style="width: 100%; height: 100%"
										alt="Curve Ball Image"
										class="object-cover overflow-hidden" />
								</li>
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem> -->
					<!-- end Search -->
					<NavigationMenuItem class="ml-4">
						<NavigationMenuLink>
							<div>
								<div v-if="!futureMultiverseName">
									<div class="flex justify-end space-x-2">
										<button
											@click="handleOnboard"
											:disabled="true"
											:class="{
												'opacity-50 cursor-not-allowed': true,
											}"
											class="px-2 py-2 text-medium border-2 border-gold-light font-semibold text-gold-light rounded-[10px] bg-[#0C0F22]">
											{{ isConnecting ? "Connecting..." : "Connect / Onboard" }}
										</button>
									</div>
								</div>

								<div v-else>
									<div class="flex items-center space-x-4">
										<div
											@click="showModal = true"
											class="text-white text-lg px-2 py-2 text-medium border-2 border-gold-light font-semibold rounded-[10px] bg-[#0C0F22] cursor-pointer">
											{{ futureMultiverseName }}
										</div>
									</div>
								</div>
							</div>
						</NavigationMenuLink>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	</header>
</template>

<script lang="ts" setup>
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ref, onMounted } from "vue";
import FutureIcon from "~/icons/FutureIcon.vue";
import EnterFutureIcon from "@/icons/EnterFutureIcon.vue";
import ExploreCreateIcon from "@/icons/ExploreCreateIcon.vue";
import ProductsServicesIcon from "@/icons/ProductsServicesIcon.vue";
import StarIcon from "@/icons/StarIcon.vue";
import SearchHeaderIcon from "@/icons/SearchHeaderIcon.vue";
import MarketplaceIcon from "~/icons/MarketplaceIcon.vue";
import BlockchainIcon from "~/icons/BlockchainIcon.vue";
import ConnectIcon from "~/icons/ConnectIcon.vue";
import FutureTrendsIcon from "~/icons/FutureTrendsIcon.vue";
import AcadamyIcon from "~/icons/AcadamyIcon.vue";
import InitiativeIcon from "~/icons/InitiativeIcon.vue";
import RocketIcon from "~/icons/RocketIcon.vue";

const futureMultiverseName = ref<string>("");
const isConnecting = ref(false);
const searchQuery = ref("");
const showModal = ref(false);

onMounted(() => {
	const getCookie = (name: string): string | null =>
		(
			document.cookie
				.split("; ")
				.find((cookie) => cookie.startsWith(name + "=")) || ""
		).split("=")[1] || null;

	const cookieValue = getCookie("futuremultiversename");
	futureMultiverseName.value = cookieValue !== null ? cookieValue : "";

	if (!futureMultiverseName.value) {
		const domain = window.location.hostname.split(".").slice(-2).join(".");

		document.cookie = `futuremultiversename=; path=/; domain=${domain}; SameSite=None; Secure`;
	}
});

interface OnboardRequest {
	callback_uri: string;
	source_platform: string;
}

const goToExperience = () => {
	window.location.href = "/";
};

function closeMobileMenu() {
	const menu = document.getElementById("mobile-menu") as HTMLInputElement;
	if (menu) menu.checked = false;
}

const handleSignOut = () => {
	const domain = window.location.hostname.split(".").slice(-2).join(".");
	document.cookie = `futuremultiversename=; path=/; domain=${domain}; SameSite=None; Secure`;
	showModal.value = false;
	window.location.href = "/";
};

const handleOnboard = async (): Promise<void> => {
	isConnecting.value = true;
	const requestData: OnboardRequest = {
		callback_uri: window.location.href,
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
			const onboardResponse = await response.json();

			if (onboardResponse.status === 1) {
				localStorage.setItem(
					"futuremultiverseRedirectUrl",
					window.location.href
				);
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
</script>
<style lang="scss" module>
.el {
	padding: 12px 0px 12px 0;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 9999;
	background-color: #0c0f22;
}

#menu-toggle:checked + #menu {
	display: block;
}

.rounded {
	border-radius: 10px !important;
}
.input_search_desktop {
	text-align: center;
	background-color: #fcf2e1;
	// color: #BDB9BC;
	//width: 280px;
	width: 576px;
	border-radius: 20px;
	height: 43px;
}
.input_search {
	text-align: center;
	background-color: #fcf2e1;
	// color: #BDB9BC;
	//width: 280px;
	border-radius: 20px;
	height: 43px;
}
input::placeholder {
	color: #bdb9bc;
	font-weight: 600;
}
.custom-image {
	height: auto; /* Maintain aspect ratio */
	position: relative; /* Set position to relative */
	width: 120px;
	margin-top: 30px;
}
.hover_color:hover {
	color: #cfb16d !important;
}
.hover_color:hover .icon_bg {
	background-color: #cfb16d !important;
}
</style>
