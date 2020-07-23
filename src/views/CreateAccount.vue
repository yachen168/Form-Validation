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
						<label for="comfirmPassword">Comfirm Password</label>
						<input type="password" 
						:class="isComfirmPasswordInputWarn ? '': 'warn'" 
						placeholder="●●●●●●"
						v-model="comfirmPassword">
						<Tooltip v-if="!isComfirmPasswordInputWarn">NOT MATCH</Tooltip>
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
import Tooltip from '@/components/toolTip'

export default {
	components: {
		Tooltip
	},
	data(){
		return {
			account: null,
			password: null,
			comfirmPassword: null,
		}
	},
	methods: {
		toNextPage(){
			if(this.isButtonDisabled) {
				this.$router.push({name: 'GeneralInfomation'});
			}
		}
	},
	computed: {
		isAccountInputWarn(){
			const isAccountPass = /^[A-z0-9]+@[A-z]+\.com{1}$/;
			return !this.account || isAccountPass.test(this.account);
		},
		isPasswordInputWarn(){
			const isPasswordPass = /^[\d|A-z]{8}/;
			return !this.password || isPasswordPass.test(this.password);
		},
		isComfirmPasswordInputWarn(){
			return !this.comfirmPassword || (this.comfirmPassword === this.password);
		},
		isButtonDisabled(){
			return this.account &&
						this.password &&
						this.comfirmPassword && 
						this.isAccountInputWarn && 
						this.isPasswordInputWarn && 
						this.isComfirmPasswordInputWarn;
		},
	}
}
</script>

<style lang="scss" scoped>

</style>
