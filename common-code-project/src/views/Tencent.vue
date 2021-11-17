<template>
    <div>
        <div class="uls">
            <!-- <ul> -->
                 
                <transition name="slide-trans">
                    <img v-if="isShow" :src="sliders[showIndex]" >
                </transition> 
                <transition name="slide-trans-old">
                    <img v-if="!isShow" :src="sliders[showIndex]">
                </transition> 
                   
            <!-- </ul> -->
            <div class="uls-button">
                <span><i class="iconfont icon-icon-test41" @click="goto(1)"></i></span>
                <span><i class="iconfont icon-icon-test56" @click="goto(-1)"></i></span>
            </div>
        </div>
        
    </div>
</template>

<script lang="ts">
import { defineComponent,ref,reactive } from 'vue'

// 若src定义在 html中，使用相对地址，若定义在js中，使用绝对地址
export default defineComponent({
    setup() {
        let isShow = ref(true); 
        let showIndex = ref(0);
        let sliders = reactive(["./img/tencent/brief-1-1.jpg","./img/tencent/brief-3.jpg"])
        let goto = (index:Number)=>{
            isShow.value = false;
            setTimeout(()=>{
                isShow.value = true;
                if(index === 1) {
                    if(showIndex.value + 1 === sliders.length) {
                        showIndex.value = 0;
                    } else {
                        showIndex.value = showIndex.value + 1;
                    }
                } else {
                    if(showIndex.value - 1 < 0) {
                        showIndex.value = sliders.length;
                    } else {
                        showIndex.value = showIndex.value - 1;
                    }
                }
                
            },10)
            
        }
        return {
            isShow,
            showIndex,
            sliders,
            goto,
        }
    },
})
</script>

<style lang="scss" scoped>
    .uls {
        position: relative;
        height:500px;
        img {
            // display: none;
            position: absolute;
            left:0;
            top:0;
        }
        // li {
        //     left:0;
        //     top:0;
        //     transition: all 2s;
        // }
    }
    .uls-button {
        position: absolute;
        bottom: 10px;
        left: 30px;
    }
    i {
        color: white;
        font-size: 30px;
    }
    .slide-trans-enter-active {
        transition: all .5s;
    }
    .slide-trans-enter {
        transform: all .5s;
        transform: translateX(100%);
    }
    .slide-trans-old-leave-active {
        transition: all .5s;
        transform: translateX(-100%);
    }


</style>
