<template>
  <div id="app">
    <!-- 一级菜单列表-->
    <ul>
      <TreeNode v-for="nodeData in treeData" :nodeData="nodeData" :key="nodeData.label"></TreeNode>
    </ul>
  </div>
</template>
<script>
  import TreeNode from '@/views/vueDemo/TreeItem'
  export default {
    name: 'Tree',
    components: { TreeNode },
    data () {
      return {
        treeData: [
          {
            label: '一级 1',
            children: [{
              label: '二级 1-1',
              children: [{
                label: '三级 1-1-1'
              }]
            }]
          }, {
            label: '一级 2',
            children: [{
              label: '二级 2-1',
              children: [{
                label: '三级 2-1-1'
              }]
            }, {
              label: '二级 2-2',
              children: [{
                label: '三级 2-2-1'
              }]
            }]
          }, {
            label: '一级 3',
            children: [{
              label: '二级 3-1',
              children: [{
                label: '三级 3-1-1'
              }]
            }, {
              label: '二级 3-2',
              children: [{
                label: '三级 3-2-1'
              }]
            }]
          }]
      }
    }
  }
</script>