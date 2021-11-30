<template>
    <div class="js-com-alg-wrap">
        <section>
            <h1>js下载功能</h1>
            <label for="download">网址</label>
            <input type="text" v-model="urlAddress" name="download">
            <button @click="downloadFile">下载</button>
            <!-- <a href="https://www.baidu.com/img/flexible/logo/pc/result@2.png" download="baidu">百度图片下载</a> -->
        </section>
    </div>
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue';
import {downloadIamge,downloadBlob,downloadUrl} from './jsComFunction.js';

export default defineComponent({
    setup() {
        let urlAddress = ref('http://localhost:8080/img/tencent/img2.png');
        let downloadFile = ()=>{
            if(urlAddress.value === '') {
                alert('请输入链接地址');
                return;
            }
            // 若是远程地址，会直接打开，若为本地，则可下载
            // downloadUrl(urlAddress.value)
            // 会出现跨域
            fetch(urlAddress.value)
            .then(res => res.blob())
            .then(res => downloadBlob(res, 'img') )
            // 远程请求会跨域
            // downloadIamge(urlAddress.value,'百度')
        }
        return {
            urlAddress,
            downloadFile
        }
    },
})
</script>

<style lang="scss" scoped>
    .js-com-alg-wrap {
        text-align: left;
        display: flex;
        flex-wrap: wrap;
        padding: 20px;
        section {
            padding: 20px;
            border: 1px solid #666;
            border-radius: 5px;
            box-shadow: 3px 3px 5px #666;
            h1 {
                font-size: 30px;
                line-height: 3em;
                font-weight: bold;
            }
        }
    }
</style>
