<template>
  <router-view/>
  
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue'

export default defineComponent({
  setup() {
    let htmlCode = ref<String>('<h1>这是一段代码</h1>');
    return {
      htmlCode
    }
  },
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
div {
  p {
    color: blue;
  }
}
</style>
