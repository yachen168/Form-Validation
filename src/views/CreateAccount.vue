<template>
  <div>
		<div class="title">
			<h1>Create Account</h1>
			<span>Glad to see you here!</span>
		</div>
		<form>
			<div class="row">
				<div class="col">
					<label for="account">Account</label>
					<input type="email" placeholder="example@email.com">
				</div>
			</div>
			<div class="row">
				<div class="col">
					<label for="password">Password</label>
					<input type="password" placeholder="●●●●●●">
				</div>
			</div>
			<div class="row">
				<div class="col">
					<label for="comfirmPassword">Comfirm Password</label>
					<input type="password" placeholder="●●●●●●">
				</div>
			</div>
			<button>SUBMIT & NEXT</button>
		</form>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>

</style>
