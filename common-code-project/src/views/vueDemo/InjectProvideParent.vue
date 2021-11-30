
<template>
	<view>
		<!-- //祖先组件里面 -->
		<InjectProvide></InjectProvide>
	</view>
</template>

<script>
	import InjectProvide from '@/views/vueDemo/InjectProvide'
	export default {
		mounted() {
			
		},
		data() {
			return {
				value: '本组件的123'
			};
		},
		// 父组件通过provide将自己的数据以对象形式传出去
		provide(){
			return {
				yeye: this.value,
				value: this.value
			}
		},
		components:{
			InjectProvide
		}
	}
</script>

<style lang="scss">

</style>

