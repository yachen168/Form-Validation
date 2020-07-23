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
							<input type="address" placeholder="Address Detail">
						</div>
					</div>
				</div>
			</div>
			<button @click="toNextPage">SUBMIT & NEXT</button>
		</form>

	</div>
</template>

<script>
	export default {
		methods: {
			toNextPage(){
				this.$router.push({name: 'UpdateProfilePicture'})
			}
		},
	}
</script>

<style lang="scss" scoped>

</style>