<template>
    <InjectProvideParent></InjectProvideParent>
    <InjectProvide></InjectProvide>>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import InjectProvide from '@/views/vueDemo/InjectProvide.vue';
import InjectProvideParent from '@/views/vueDemo/InjectProvideParent.vue';

export default defineComponent({
    components: {
        InjectProvide,
        InjectProvideParent
    },
    setup() {
        
    },
})
</script>

<style lang="scss" scoped>

</style>
