<template>
    <div>
        <div class="container" :style="containerStyle">
            <div id="carousel-wrap">
                <div v-for="(item,index) in newItems" :key="index" class="carousel-item">
                    <slot :item="item"> </slot>
                </div>
            </div>
            <div class="uls-button">
                <span @click="leftMove">
                    
                    <slot name="leftButton">&lt;</slot>
                </span>
                <span @click="rightMove">
                    
                    <slot name="rightButton">&gt;</slot>
                </span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent,ref,onUnmounted,onMounted,nextTick, reactive  } from 'vue';

interface Item{
  img:string
}
// 若src定义在 html中，使用相对地址，若定义在js中，使用绝对地址
export default defineComponent({
    components: {
        //  SlideAuto,
        //  Slide
    },
    props: ['items','height','width'],
    
    setup(props,ctx) {
        onMounted(()=>{
            // 设置初始偏移量
            let firstNode = newItems.value[0];
            let lastNode = newItems.value[newItems.value.length - 1];
            newItems.value.push(firstNode);
            newItems.value.unshift(lastNode)

            let images:any = document.getElementById("carousel-wrap");
            let container: any = document.getElementsByClassName('container')[0];
            imgWidth = container.offsetWidth;
            images.style.width = newItems.value.length * 100 + '%';
            images.style.left = -imgWidth + 'px';
            window.addEventListener('resize',resizeWindow,false)
        })
        onUnmounted(()=>{
            window.removeEventListener('resize',resizeWindow)
        })
        let imgWidth = 0;
        let imgIndex = 1;
        let imgs = ref(null);
        let newItems = ref(props.items);
        let containerStyle = reactive({
            width: props.width + 'px',
            height: props.height + 'px'
        })
        // 下一张，对父元素来说，是往左移动的
        let rightMove = async ()=> {
            let images:any = document.getElementById("carousel-wrap");
            let newLeft;
            if(imgIndex === newItems.value.length -2) {
                images.style.transition = 'all 0s';
                imgIndex = 0
                images.style.left = "0px";
                // console.log(images.offsetLeft) ; // 若不使用setTimeout,使用该句效果也是对的
            } 
            await nextTick(); // 不生效
            setTimeout(()=>{
                imgIndex = imgIndex + 1;
                newLeft = -imgIndex * imgWidth;
                images.style.transition = 'all 0.5s';
                images.style.left = newLeft + "px";
            })
        }
        // 上一张，对父元素来说，是往右移动的
        let leftMove = async()=> {
            let images:any = document.getElementById("carousel-wrap");
            let newLeft;
            
            if(imgIndex === 1) {
                images.style.transition = 'all 0s';
                imgIndex = newItems.value.length - 1;
                // newLeft = ; // 先瞬移到最后一张
                images.style.left =-imgIndex * imgWidth + "px";

            } 
            await nextTick();
            setTimeout(()=>{
                imgIndex -= 1;
                newLeft = -imgIndex * imgWidth;
                images.style.transition = 'all 0.5s';
                images.style.left = newLeft + "px";
            })
            
        }
        let resizeWindow = ()=>{
            let images:any = document.getElementById("carousel-wrap");
            let container: any = document.getElementsByClassName('container')[0]
            imgWidth = container.offsetWidth;
            images.style.left = -imgWidth * imgIndex + 'px';
            images.style.transition = 'none';
        }
        return {
            imgWidth,
            imgs,
            imgIndex,
            newItems,
            containerStyle,
            leftMove,
            rightMove,
            resizeWindow
        }
    },
})
</script>

<style lang="scss" scoped>
    .container {
        position: relative;
        // height:500px;
        width: 100vw;
        height: 720px;
        // height: 400px;
        overflow: hidden;
        #carousel-wrap {
            position:absolute;
            width: 500%;
            transition: all 0.5s;
            height: 100%;
        }
        .carousel-item {
            float: left;
            width: 100vw;
            object-fit: cover; //对图片进行剪切，保留原始比例：
            height: 100%;
            &:deep img{
                height: 100%;
                width: 100%;
                object-fit: cover;
            }
        }
        
    }
    .uls-button {
        position: absolute;
        bottom: 10px;
        left: 30px;
        span {
            cursor: pointer;
            color: rgb(47, 207, 33);
            font-size: 30px;
        }
    }
    
</style>
