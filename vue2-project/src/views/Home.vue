<template>
  <div class="home">
    测试页面
    <ace-edit-demo></ace-edit-demo>
  </div>
</template>

<script>
// @ is an alias to /src
import AceEditDemo from '@/views/AceEditDemo';

export default {
  name: 'Home',
  components: {
    AceEditDemo:AceEditDemo
  }
}
</script>
