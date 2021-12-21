<template>
  <div>
    <v-title title="Vue组件化"></v-title>
    <v-button @click="handleClick" color="red">点击按钮</v-button>
    <p>
      <img src="./image/icon_twitter.png" alt="" style="width:200px;">
    </p>
  </div>
</template>

<script>
import vTitle from './title.vue';
import vButton from './button.vue';

export default {
  components: {
    vTitle,
    vButton
  },
  data() {
    return {
      name: 'Vue.js'
    }
  },
  methods: {
    handleClick(e) {
      console.log(e);
    }
  }
}
</script>

<style scoped>
  div {
    color: #ddd;
    font-size: 24px;
  }
</style>