<template>
    <div>
        <AppHeader />
        <slot />
        <ClientOnly>
            <OuterBotUi />
            <OuterAppStyle />
        </ClientOnly>
        <AppFooter />
  </div>
</template>

<script setup>
    import AppHeader from '~/components/AppHeader.vue';
    import AppFooter from '~/components/AppFooter.vue';

    const chatOpen = useState('ryuChatOpen', () => false)
</script>