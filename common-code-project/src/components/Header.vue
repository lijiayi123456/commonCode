<template>
    <div class="header-wrap">
        <ul>
            <li @click="gotoHome">首页</li>
            <li>JS算法</li>
            <li>CSS常用样式</li>
            <li>Vue常用技巧</li>
            <li @click="toWebTemplate">网站模版</li>
            <li class="user">
                用户
                <i class="iconfont icon-icon-test28"></i>
            </li>
            
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';


export default defineComponent({
    setup() {
        const router = useRouter();
        let toWebTemplate = ()=> {
            router.push('./web')
        }
        let gotoHome = () => {
            router.push('./');
        }
        return {
            toWebTemplate,
            gotoHome
        }
    },
})
</script>

<style lang="scss" scoped>
    .header-wrap {
        padding-left: 20px;
        padding-right: 20px;
        height: 60px;
        background: #ccc;
        ul {
            text-align: left;
            // display: flex;
            // flex-direction: row;
            // justify-content: flex-start;
            // align-items: center;
        }
        li {
            display: inline-block;
            cursor: pointer;
            height: 100%;
            line-height: 60px;
            width:120px;
            text-align: center;
            &:hover {
                background: #ddd;
                
            }
        }
        .user {
            float: right;
            // flex:1; // 项目放大，撑满整个元素
            // text-align: right;
            // line-height: 60px;
            // height: 60px;
        }
    
    }
    
</style>
