<template>
	<div>
		<div class="title">
			<h1>Payment Method</h1>
			<span>Add your credit card information!</span>
		</div>
		<form action="">
			<div class="row">
				<div class="col">
					<div>
						<label for="cardNumber">Card Number</label>
						<input :class="isCardNumInputWarn ? '' : 'warn'"
										placeholder="1234 5678 9012 3456"
										:value="cardNumber"
										@input="formatCardNumber">
						<ToolTip v-if="!isCardNumInputWarn">INVALID NUMBER</ToolTip>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-6">
					<label for="cardholderName">Cardholder Name</label>
					<input type="text" placeholder="EXAMPLE NAME">
				</div>
				<div class="col-6">
					<div>
						<label for="bankName">Bank Name</label>
						<input :class="isBankNameInputWarn ? '' : 'warn'" 
										type="email" 
										placeholder="EXAMPLE BANK"
										v-model="bankName">
						<ToolTip v-if="!isBankNameInputWarn">REQUIRED FILED</ToolTip>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-4">
					<label for="cvv">CVV</label>
					<input type="number" placeholder="123">
				</div>
				<div class="col-8">
					<label for="expireDate">Expire Date</label>
					<div class="row">
						<div class="col-6">
							<select name="expireMonth">
								<option value="" hidden>MM</option>
								<option v-for="month in 12"
												value=""
												:key="month">{{ month }}</option>
							</select>
						</div>
						<div class="col-6">
							<select name="expireDay">
								<option value="" hidden>DD</option>
								<option v-for="day in 31"
												value=""
												:key="day">{{ day }}</option>
							</select>
						</div>
					</div>
				</div>
			</div>
			<button :class="isButtonDisabled ? '' : 'disabled'" @click="toNextPage">Done</button>
		</form>
	</div>
</template>

<script>
import ToolTip from '@/components/Tooltip'

	export default {
		components: {
			ToolTip
		},
		data(){
			return {
				cardNumber: null,
				bankName: null
			}
		},
		methods: {
			toNextPage(){
				if(this.isButtonDisabled){
						this.$router.push({name: 'Completed'});
				}
			},
			formatCardNumber(e){
				// 每 4 個數字空一格
				this.cardNumber = e.target.value.replace(/(\d{4})(?=\d)/g, '$1 ');
			}
		},
		computed: {
			isCardNumInputWarn(){
				const isCardNumPass = /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/;
				return !this.cardNumber || isCardNumPass.test(this.cardNumber);
			},
			isBankNameInputWarn(){
				const isBankName = /^[A-z]{2,}$/
				return !this.bankName || isBankName.test(this.bankName);
			},
			isButtonDisabled(){
				return this.cardNumber && 
								this.bankName &&
								this.isCardNumInputWarn && 
								this.isBankNameInputWarn;
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>