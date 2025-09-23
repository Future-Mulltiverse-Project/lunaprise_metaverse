<template>
  <img :src="image" alt="icon" />
</template>
<script>
import image from '~/assets/images/initiative_icon.png';

export default {
  name: 'InitiativeIcon',
  data(){
    return {
      image
    }
  }
};
</script>
