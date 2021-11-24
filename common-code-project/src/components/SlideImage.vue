<template>
    <div>
        <div class="container">
            <!-- <ul> -->
            <div id="images">
                <img src="../../public/img/tencent/brief-3.jpg" alt=""> 
                <img src="../../public/img/tencent/brief-1-1.jpg" alt=""> 
                <img src="../../public/img/tencent/img.png" alt=""> 
                <img src="../../public/img/tencent/brief-3.jpg" alt=""> 
                <img src="../../public/img/tencent/brief-1-1.jpg" alt=""> 
            </div>
            <div class="uls-button">
                <span><i  @click="leftMove">&lt;</i></span>
                <span><i  @click="rightMove">&gt;</i></span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent,ref,onUnmounted,onMounted,nextTick  } from 'vue';

// 若src定义在 html中，使用相对地址，若定义在js中，使用绝对地址
export default defineComponent({
    components: {
        //  SlideAuto,
        //  Slide
    },
    setup(props,ctx) {
        onMounted(()=>{
            let images:any = document.getElementById("images");
            let container: any = document.getElementsByClassName('container')[0]
            imgWidth = container.offsetWidth;
            images.style.left = -imgWidth + 'px';
            window.addEventListener('resize',resizeWindow,false)
            // window.onresize = resizeWindow;
        })
        onUnmounted(()=>{
            window.removeEventListener('resize',resizeWindow)
        })
        let imgWidth = 0;
        let imgIndex = 1;
        let imgs = ref(null);
        // 下一张，对父元素来说，是往左移动的
        let rightMove = async ()=> {
            let images:any = document.getElementById("images");
            let newLeft;
            if(imgIndex === 3) {
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
            let images:any = document.getElementById("images");
            let newLeft;
            
            if(imgIndex === 1) {
                images.style.transition = 'all 0s';
                imgIndex = 4;
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
            let images:any = document.getElementById("images");
            let container: any = document.getElementsByClassName('container')[0]
            imgWidth = container.offsetWidth;
            images.style.left = -imgWidth * imgIndex + 'px';
            images.style.transition = 'none';
        }
        return {
            imgWidth,
            imgs,
            imgIndex,
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
        #images {
            position:absolute;
            width: 500%;
            transition: all 0.5s;
            height: 100%;
        }
        img {
            float: left;
            width: 100vw;
            // height: 100%;
            object-fit: cover; //对图片进行剪切，保留原始比例：
            height: 100%;
        }
        
    }
    .uls-button {
        position: absolute;
        bottom: 10px;
        left: 30px;
    }
    i {
        cursor: pointer;
        color: rgb(47, 207, 33);
        font-size: 30px;
    }
</style>
