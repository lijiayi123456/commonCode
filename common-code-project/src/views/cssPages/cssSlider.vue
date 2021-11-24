<template>
    <div>
        一、手动切换的轮播图
        <slide></slide>
    </div>
    <div>
        二、自动切换的轮播图
        <slide-auto></slide-auto>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Slide from '@/components/Slide.vue';
import SlideAuto from '@/components/SlideAuto.vue';

export default defineComponent({
    components: {
        Slide,
        SlideAuto
    },
    setup() {
        
    },
})
</script>


<style lang="scss" scoped>

</style>
