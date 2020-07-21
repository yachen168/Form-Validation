<template>
  <div>
		<div class="title">
			<h1>Create Account</h1>
			<span>Glad to see you here!</span>
		</div>
		<form>
			<label for="account">Account</label>
			<input type="email" placeholder="example@email.com">
			<label for="password">Password</label>
			<input type="password" placeholder="●●●●●●">
			<label for="comfirmPassword">Comfirm Password</label>
			<input type="password" placeholder="●●●●●●">
			<button>SUBMIT & NEXT</button>
		</form>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>


input {
	width: 100%;
}

button {
		width: 100%;
		padding: 15px 0;
		background-color: $blue-200;
		font-size: 18px;
		color: $white;
		border-radius: 8px;
}

form {
    width: 100%;
    max-width: 460px;
    margin: 0 auto;
}
</style>
