<template>
  <div>
    <button>运行</button>
    <editor v-model="content" @init="editorInit" lang="html" theme="chrome" width="500" height="100"></editor>
    <div>
      <div v-html="content"></div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    editor: require('vue2-ace-editor'),
  },
  data() {
    return {
      content: '<html><head></head><body><div>123</div></body></html>',
    }
  },
  computed: {
    iframeContent() {
      return  `<iframe src=data:text/html,${this.content}></iframe>`
    }
  },
  methods: {
    editorInit() {
      require('brace/ext/language_tools') //language extension prerequsite...
      require('brace/mode/html')                
      require('brace/mode/javascript')    //language
      require('brace/mode/less')
      require('brace/theme/chrome')
      require('brace/snippets/javascript') //snippet
    }
  }
}
</script>

<style lang="scss" scoped>

</style>