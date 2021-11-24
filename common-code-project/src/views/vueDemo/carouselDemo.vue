<template>
    <!-- <SlideImage></SlideImage> -->
    <one-carousel :items="items" :height="200">
        <!-- <img :src="item.img" alt="" v-for="(item,index) in items" :key="index"> -->
        <template  v-slot="{item}">
            <img :src="item.img" alt="" style="height:100%;">
        </template>
        <template #leftButton>
            <span>左按钮</span>
        </template>
        <template #rightButton>
            <span>右按钮</span>
        </template>
    </one-carousel>
</template>

<script lang="ts">
import { defineComponent,ref,reactive,onMounted } from 'vue';
import SlideImage from '@/components/SlideImage.vue';
import OneCarousel from '@/components/oneCarousel.vue';


// 若src定义在 html中，使用相对地址，若定义在js中，使用绝对地址
export default defineComponent({
    components: {
        SlideImage,
        OneCarousel
        //  Slide
    },
    setup(props,ctx) {
        let items = ref([
                        {'img':"./img/tencent/brief-1-1.jpg"},
                        {'img':"./img/tencent/img.png"},
                        {'img':"./img/tencent/brief-3.jpg"},
                    ])

        return {
            items
        }
    },
})
</script>

<style lang="scss" scoped>
    
</style>
