<template>
	<form>
		<div class="title">
			<h1>Update Profile Picture</h1>
			<span>We wanna know you more!</span>
		</div>	
		<div class="upload">
			<span class="icon-wrapper">
				<font-awesome-icon icon="images" />
			</span>
			<div>
				<p>UPLOAD UP TO 3 PHOTOS</p>
				<span>MAXIMUM SIZE: 150*150px</span>
			</div>
		</div>
		<button>SUBMIT & NEXT</button>	
	</form>
</template>

<script>
	export default {
		
	}
</script>

<style lang="scss" scoped>
.upload {
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 460px;
	margin: 20px auto 0;
	padding: 35px 0;
	border: 2px solid $black;
	border-radius: 8px;
	color: $gray;
}
.icon-wrapper {
	margin-right: 20px;
	font-size: 45px;
}
p {
	margin: 0;
}
</style>