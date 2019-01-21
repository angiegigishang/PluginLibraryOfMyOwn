<template>
	<div>
		<div  v-for="(item,index) in data" @click="test(index)" class="select-item">
			测试
			{{item}}
		</div>
	</div>
</template>

<script>
export default {
	props: {
		data: Array
	},
	methods: {
		test (index) {
			console.log('111')
			this.$emit('onchange', '测试' + this.data[index])
		}
	}
}
</script>

<style scoped>
	.select-item {
		
	}
</style>