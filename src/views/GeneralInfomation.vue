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
					<label for="phone">Phone*</label>
					<input type="text" placeholder="0912 345 678">
				</div>
			</div>
			<div class="row">
				<div class="col">
					<label for="birthDate">Birth Date <span>(optional)</span></label>
					<div class="birthDate-inputs">
							<input type="number" placeholder="YYYY" min="1900" max="2020">
							<input type="number" placeholder="MM" min="1900" max="2020">
							<input type="number" placeholder="DD" min="1900" max="2020">
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col">
					<label for="address">Address*</label>
					<div class="address-inputs">
							<input type="address" placeholder="City">
							<input type="address" placeholder="Dist">
							<input type="address" placeholder="Address Detail">
					</div>
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
.birthDate-inputs {
	display: flex;
	justify-content: space-between;
	input:not(:last-child) {
		margin-right: 20px;
	}
}

.address-inputs {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	input:not(:last-child) {
		width: calc(50% - 10px);
	}
}
</style>