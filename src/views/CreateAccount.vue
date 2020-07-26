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
						<input type="email"
						:class="isAccountInputWarn ? '' : 'warn'"
						v-model="account"
						placeholder="example@email.com">
						<Tooltip v-if="!isAccountInputWarn">INVALID EMAIL</Tooltip>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col">
					<div>
						<label for="password">Password</label>
						<input type="password" 
						:class="isPasswordInputWarn ? '' : 'warn'" 
						placeholder="●●●●●●"
						v-model="password">
						<Tooltip v-if="!isPasswordInputWarn">MINIMUN 8 CHARACTERS</Tooltip>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col">
					<div>
						<label for="confirmPassword">Confirm Password</label>
						<input type="password" 
						:class="isConfirmPasswordInputWarn ? '': 'warn'" 
						placeholder="●●●●●●"
						v-model="confirmPassword">
						<Tooltip v-if="!isConfirmPasswordInputWarn">NOT MATCH</Tooltip>
					</div>
				</div>
			</div>
			<button :class="isButtonDisabled ? '' : 'disabled'"
							type="submit"
							@click.prevent="toNextPage"
							>SUBMIT & NEXT</button>
		</form>
  </div>
</template>

<script>
import Tooltip from '@/components/Tooltip'

export default {
	components: {
		Tooltip
	},
	data(){
		return {
			account: null,
			password: null,
			confirmPassword: null,
		}
	},
	methods: {
		toNextPage(){
			if(this.isButtonDisabled) {
				this.$router.push({name: 'GeneralInformation'});
			}
		}
	},
	computed: {
		isAccountInputWarn(){
			const checkAccountPass = /^[A-z0-9]+@[A-z]+\.com{1}$/;
			return !this.account || checkAccountPass.test(this.account);
		},
		isPasswordInputWarn(){
			const checkPasswordPass = /^[\d|A-z]{8,}$/;
			return !this.password || checkPasswordPass.test(this.password);
		},
		isConfirmPasswordInputWarn(){
			return !this.confirmPassword || (this.confirmPassword === this.password);
		},
		isButtonDisabled(){
			return this.account &&
						this.password &&
						this.confirmPassword && 
						this.isAccountInputWarn && 
						this.isPasswordInputWarn && 
						this.isConfirmPasswordInputWarn;
		},
	}
}
</script>

<style lang="scss" scoped>

</style>
