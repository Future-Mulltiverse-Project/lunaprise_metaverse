<template>
    <img :src="image" alt="icon" />
</template>
<script>
import image from '@/assets/images/future_icon.png';

    export default {
        name: 'FutureIcon',
        data(){
            return {
                image
            }
        }
    }
</script>