<template>
	<div>
		<div class="title">
			<h1>Payment Method</h1>
			<span>Add your credit card infomation!</span>
		</div>
		<form action="">
			<div class="row">
				<div class="col">
					<label for="cardNumber">Card Number</label>
					<input type="number" placeholder="1234 5678 9012 3456">
				</div>
			</div>
			<div class="row">
				<div class="col-6">
					<label for="cardholderName">Cardholder Name</label>
					<input type="text" placeholder="EXAMPLE NAME">
				</div>
				<div class="col-6">
					<label for="bankName">Bank Namer</label>
					<input type="email" placeholder="EXAMPLE BANK">
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
			<button>Done</button>
		</form>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style lang="scss" scoped>

</style>