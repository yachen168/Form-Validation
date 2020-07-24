<template>
	<div>
		<div class="title">
			<h1>General Information</h1>
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
							<select name="city"
											v-model="address.city"
											@change="getRegionData">
								<option value="" hidden>city</option>
								<option v-for="city in apiAddress.city" 
												:value="city"
												:key="city">{{ city }}</option>
							</select>
						</div>
						<div class="col-6">
							<select name="dist">
								<option v-for="region in address.region" 
												:key="region"
												:value="region">{{ region }}</option>
							</select>
						</div>
						<div class="col">
							<div>
								<input :class="isAddressDetailInputWarn ? '' : 'warn'" 
												type="address" 
												placeholder="Address Detail"
												v-model="address.addressDetail">
								<Tooltip v-if="!isAddressDetailInputWarn">REQUIRED FILED</Tooltip>
							</div>
						</div>
					</div>
				</div>
			</div>
			<button :class="isButtonDisabled ? '' : 'disabled'" 
							@click.prevent="toNextPage"
							type="submit">SUBMIT & NEXT</button>
		</form>
	</div>
</template>

<script>
import Tooltip from '@/components/toolTip'
import service from '@/data/address'

	export default {
		components: {
			Tooltip
		},
		data(){
			return {
				apiAddress: service,
				phoneNumber: null,
				address: {
					city: '',
					region: '',
					addressDetail: ''
				},
				year: null
			} 
		},
		methods: {
			toNextPage(){
				if (this.isButtonDisabled){
					this.$router.push({name: 'UpdateProfilePicture'});
				}
			},
			getRegionData(){
				const index = this.apiAddress.city.indexOf(this.address.city);
				this.address.region = this.apiAddress.region[index];
			}
		},
		computed: {
			isPhoneInputWarn(){
				const isPhoneNumPass = /^09[0-9]{8}$/;
				return !this.phoneNumber || isPhoneNumPass.test(this.phoneNumber);
			},
			isAddressDetailInputWarn(){
				// 至少一個中文字
				const checkAdress = /[\u4e00-\u9fa5]/;
				return !this.address.addressDetail || checkAdress.test(this.address.addressDetail);
			},
			isButtonDisabled(){
				return this.phoneNumber &&
								this.address.addressDetail &&
								this.isPhoneInputWarn &&
								this.isAddressDetailInputWarn;
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>