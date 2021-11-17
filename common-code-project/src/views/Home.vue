<template>
  <div class="home">
    <div class="home-wrap">
    <header>
      <Header></Header>
    </header>
    <main>
      <p>李佳艺的主页</p>
    </main>
    <footer>

    </footer>
  </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Header
  },
});
</script>
