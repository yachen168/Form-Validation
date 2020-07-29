<template>
	<div>
		<ProgressBar :progress="progress"></ProgressBar>
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
										:value="phoneNumber"
										@input="formatPhoneNumber">
						<Tooltip v-if="!isPhoneInputWarn">NUMBERS ONLY</Tooltip>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col">
					<label for="birthDate">Birth Date <span>(optional)</span></label>
						<div class="row">
							<div class="col-4">
								<select @change="changeColor" name="birthYear" v-model="birth.birthYear">
									<option value="" hidden>YYYY</option>
									<option v-for="year in yearRange" 
													:value="year"
													:key="year">{{ year }}</option>
								</select>
							</div>
							<div class="col-4">
								<select @change="changeColor" name="birthMonth" v-model="birth.birthMonth">
									<option value="" hidden>MM</option>
									<option v-for="month in 12" 
													:value="month"
													:key="month">{{ month }} 月</option>
								</select>
							</div>
							<div class="col-4">
								<select @change="changeColor" name="birthDay" v-model="birth.birthDay">
									<option value="" hidden>DD</option>
									<option v-for="day in 31" 
													:value="day"
													:key="day">{{ day }} 日</option>
								</select>
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
											@change="getRegionData();changeColor($event)">
								<option value="" hidden>City</option>
								<option v-for="city in apiAddress.city" 
												:value="city"
												:key="city">{{ city }}</option>
							</select>
						</div>
						<div class="col-6">
							<select @change="changeColor" name="dist">
								<option value="Dist" 
												hidden>Dist</option>
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
import { mapState } from 'vuex'

import Tooltip from '@/components/Tooltip'
import service from '@/data/address'
import ProgressBar from '@/components/ProgressBar'

// regExp
import Validation from '@/Validation/Validation'

	export default {
		components: {
			Tooltip, ProgressBar
		},
		data(){
			return {
				apiAddress: service,
				phoneNumber: '',
				address: {
					city: '',
					region: '',
					addressDetail: ''
				},
				birth: {
					birthYear: '',
					birthMonth: '',
					birthDay: ''
				},
			} 
		},
		methods: {
			toNextPage(){
				if (this.isButtonDisabled){
					this.$router.push({name: 'UpdateProfilePicture'});
					this.$store.commit('changeStep',['secondStep','thirdStep']);
				}
			},
			getRegionData(){
				const index = this.apiAddress.city.indexOf(this.address.city);
				this.address.region = this.apiAddress.region[index];
			},
			formatPhoneNumber(e){
				this.phoneNumber = e.target.value.replace(/(\d{4})(\d{3})(\d{3})/, '$1 $2 $3');
			},
			changeColor(e){
				e.target.classList.add('selected');
			}
		},
		computed: {
			...mapState(['progress']),
			isPhoneInputWarn(){
				const checkPhoneNumber = Validation.generalInformation.checkPhoneNumber;
				return !this.phoneNumber || checkPhoneNumber.test(this.phoneNumber.split(' ').join(''));
			},
			isAddressDetailInputWarn(){
				const checkAddress = Validation.generalInformation.checkAddress;
				return !this.address.addressDetail || checkAddress.test(this.address.addressDetail);
			},
			isButtonDisabled(){
				return this.phoneNumber &&
								this.address.city &&
								this.address.region &&
								this.address.addressDetail &&
								this.isPhoneInputWarn &&
								this.isAddressDetailInputWarn;
			},
			yearRange(){
				let yearRange = [];
				const now = new Date();
				const thisYear = now.getFullYear();
				const totalPeriods = 100;
				let period = thisYear - totalPeriods;
				do {
					yearRange.push(period);
					period++;
				} while(period !== thisYear + 1)
				return yearRange;
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>