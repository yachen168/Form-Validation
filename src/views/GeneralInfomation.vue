<template>
	<div>
		<div class="title">
			<h1>General Infomation</h1>
			<span>Tell us who you are!</span>
		</div>
		<form>
			<div class="row">
				<div class="col-6">
					<label for="name">Name <span>(optional)</span></label>
					<input type="text" placeholder="Example Name">
				</div>
				<div class="col-6">
					<div>
						<label for="phone">Phone*</label>
						<input :class="isPhoneInputWarn ? '' : 'warn'" 
										type="text" 
										placeholder="0912 345 678"
										v-model="phoneNumber">
						<Tooltip v-if="!isPhoneInputWarn">NUMBERS ONLY</Tooltip>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col">
					<label for="birthDate">Birth Date <span>(optional)</span></label>
						<div class="row">
							<div class="col-4">
								<input type="number" placeholder="YYYY" min="1900" max="2020">
							</div>
							<div class="col-4">
								<input type="number" placeholder="MM" min="01" max="12">
							</div>
							<div class="col-4">
								<input type="number" placeholder="DD" min="01" max="31">
							</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col">
					<label for="address">Address*</label>
					<div class="row">
						<div class="col-6">
							<input type="address" placeholder="City">
						</div>
						<div class="col-6">
							<input type="address" placeholder="Dist">
						</div>
						<div class="col">
							<div>
								<input :class="isAddressDetailInputWarn ? '' : 'warn'" 
												type="address" 
												placeholder="Address Detail"
												v-model="addressDetail">
								<Tooltip v-if="!isAddressDetailInputWarn">REQUIRED FILED</Tooltip>
							</div>
						</div>
					</div>
				</div>
			</div>
			<button :class="isButtonDisabled ? '' : 'disabled'" @click="toNextPage">SUBMIT & NEXT</button>
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
				phoneNumber: null,
				addressDetail: null
			} 
		},
		methods: {
			toNextPage(){
				if (this.isButtonDisabled){
					this.$router.push({name: 'UpdateProfilePicture'});
				}
			}
		},
		computed: {
			isPhoneInputWarn(){
				const isPhoneNumPass = /^09[0-9]{8}$/;
				return isPhoneNumPass.test(this.phoneNumber);
			},
			isAddressDetailInputWarn(){
				return !!this.addressDetail;
			},
			isButtonDisabled(){
				return this.isPhoneInputWarn && this.isAddressDetailInputWarn;
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>