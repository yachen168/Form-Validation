<template>
	<form>
		<div class="title">
			<h1>Update Profile Picture</h1>
			<span>We wanna know you more!</span>
		</div>	
		<div class="upload">
			<input class="upload-input-hidden" type="file">
			<div class="upload-input">
				<span class="icon-wrapper">
					<font-awesome-icon icon="images" />
				</span>
				<div>
					<p>UPLOAD UP TO 3 PHOTOS</p>
					<span class="maximum-size">MAXIMUM SIZE: 150*150px</span>
				</div>
			</div>
		</div>
		<div class="warn-oversize">
			<span>
				<font-awesome-icon icon="exclamation-triangle" />
			</span>		
			<span>ONE FILE IS OVER THE MAXIMUM SIZE</span>
		</div>
		<button @click="toNextPage">SUBMIT & NEXT</button>	
	</form>
</template>

<script>
	export default {
		methods: {
			toNextPage(){
				this.$router.push({name: 'PaymentMethod'});
			}
		}
	}
</script>

<style lang="scss" scoped>
.upload {
	position: relative;
	max-width: 460px;
	margin: 20px auto 0;
	padding: 35px 0;
	border: 2px solid $black;
	border-radius: 8px;
	color: $gray;
	&-input {
		display: flex;
		justify-content: center;
		align-items: center;
		pointer-events: none;
	}
	&-input-hidden {
		position: absolute;
		height: 100%;
		top: 0;
		left: 0;
		opacity: 0;
	}
}

.icon-wrapper {
	margin-right: 20px;
	font-size: 48px;
}

.maximum-size {
	font-size: 12px;
}

.warn-oversize {
	padding: 12px 0;
	margin-top: 25px;
	text-align: center;
	letter-spacing: 1px;
	color: $white;
	background-color: $orange;
	border-radius: 8px;
	span:first-child {
		margin-right: 10px;
	}
}

p {
	margin: 0;
}
</style>