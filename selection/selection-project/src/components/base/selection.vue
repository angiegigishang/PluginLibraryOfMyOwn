<template>
	<div>
		<div @click="test" v-for="(item,index) in data">
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
		test () {
			console.log(this.data)
		}
	}
}
</script>

<style scoped></style>