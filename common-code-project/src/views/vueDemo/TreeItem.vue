<template>
  <li>
    <!-- 菜单项标题和展开/收起按钮-->
    <div>
      <span>{{nodeData.label}}</span>
      <span v-if="hasChild" @click="open = !open">[{{open ? '-' : '+'}}]</span>
    </div>
    <!-- 子菜单 -->
    <ul v-show="open" v-if="hasChild">
      <TreeNode v-for="childNodeData in nodeData.children" :nodeData="childNodeData" :key="childNodeData.label"></TreeNode>
    </ul>
  </li>
</template>
<script>
  export default {
    // 必须要写name, 否则在组件内部使用TreeNode标签将无法解析
    name: 'TreeNode',
    props: ['nodeData'],
    data: function () {
      return {
        // 标识展开/收起状态
        open: false
      }
    },
    computed: {
      // 是否有子菜单
      hasChild: function () {
        return this.nodeData.children && this.nodeData.children.length
      }
    }
  }
</script>
<style scoped>
  span {
    font-size: 36px;
  }
</style>