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
										type="number" 
										placeholder="1234 5678 9012 3456"
										v-model="cardNumber">
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
							<input type="number" placeholder="MM" min="01" max="12">
						</div>
						<div class="col-6">
							<input type="number" placeholder="DD" min="01" max="31">
						</div>
					</div>
				</div>
			</div>
			<button :class="isButtonDisabled ? '' : 'disabled'" @click="toNextPage">Done</button>
		</form>
	</div>
</template>

<script>
import ToolTip from '@/components/toolTip'

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
			}
		},
		computed: {
			isCardNumInputWarn(){
				const isCardNumPass = /^\d{16}$/;
				return isCardNumPass.test(this.cardNumber);
			},
			isBankNameInputWarn(){
				return !!this.bankName;
			},
			isButtonDisabled(){
				return this.isCardNumInputWarn && this.isBankNameInputWarn;
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>