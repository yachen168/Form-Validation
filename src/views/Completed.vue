<template>
	<div>
		<div class="title">
			<h1>Congratulations</h1>
			<span>Now you’re one of us!</span>
			<div class="icon-wrapper">
				<font-awesome-icon icon="smile" />
			</div>
			<p>Redirected to homepage after 5 seconds…</p>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			redirectToHomePage(){
				setTimeout(()=>{
					this.$router.push({name: 'Home'})
				},5000)
			}
		},
		created() {
			this.redirectToHomePage();
		}
	}
</script>

<style lang="scss" scoped>
.icon-wrapper {
	font-size: 210px;
	color: $blue-100;
}

p {
	color: $blue-200;
	font-size: 18px;
	font-style: italic;
}
</style>