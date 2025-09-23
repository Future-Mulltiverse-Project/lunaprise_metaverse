<template>
    <img :src="image" alt="icon"/>
</template>
<script>
import image from '@/assets/images/future_trends_icon.png';
    export default {
        name: 'FutureTrendsIcon',
        data() {
    return {
      image
    }
  }
    }
</script>