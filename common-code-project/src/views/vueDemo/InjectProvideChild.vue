
<template>
<!-- 孙子或者其他直系亲属里面 -->
	<div>
		孙组件
		祖父组件的数据{{yeye}}
	</div>
</template>

<script>
	export default {
		mounted() {
			console.log(this.yeye);
		},
		data() {
			return {
				testFoo: this.foo
			};
		},
		// 跨级使用了父组件的数据
		inject: ['yeye'],
		mounted() {
			console.log('beforeCreate', this)
		},
		
	}
</script>

<style lang="scss">

</style>


