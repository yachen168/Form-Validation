<template>
  <div>
		<div class="title">
			<h1>Create Account</h1>
			<span>Glad to see you here!</span>
		</div>
		<form>
			<div class="row">
				<div class="col">
					<div>
						<label for="account">Account</label>
						<input type="email" class="warn" placeholder="example@email.com">
						<Tooltip>INVALID EMAIL</Tooltip>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col">
					<div>
						<label for="password">Password</label>
						<input type="password" class="warn" placeholder="●●●●●●">
						<Tooltip>MINIMUN 8 CHARACTERS</Tooltip>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col">
					<div>
						<label for="comfirmPassword">Comfirm Password</label>
						<input type="password" class="warn" placeholder="●●●●●●">
						<Tooltip>NOT MATCH</Tooltip>
					</div>
				</div>
			</div>
			<button class="disabled">SUBMIT & NEXT</button>
		</form>
  </div>
</template>

<script>
import Tooltip from '@/components/toolTip'

export default {
	components: {
		Tooltip
	}
}
</script>

<style lang="scss" scoped>

</style>
