<template>
    <div class="webs-wrap">
        <header>
        <Header></Header>
        </header>
        <main>
            
        <ul class="side-nav">
            <li @click="gotoRouter('./verticalAlign')">vertical-align</li>
            <li @click="gotoRouter('./cssSlider')">轮播图</li>
        </ul>
        </main>
        <footer>

        </footer>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {useRouter} from 'vue-router';
import Header from '@/components/Header.vue';


export default defineComponent({
  name: 'Home',
  components: {
    Header,
  },
  setup() {
      const router = useRouter();
      let gotoRouter = (path:string)=>{
          router.push(path);
      }
      return {
          gotoRouter
      }

  }
});
</script>

<style lang="scss" scoped>
    .webs-wrap {
        ul {
            width: 200px;
            background: #ddd;
            height: calc(100vh - 60px);
        }
        li {
            cursor: pointer;
            line-height: 50px;
            height: 50px;
            &:hover {
                background: #bbb;
            }
        }
    }
</style>
