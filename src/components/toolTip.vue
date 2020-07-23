<template>
	<div class="tooltip">
		<font-awesome-icon icon="exclamation-triangle" />
		<slot></slot>
		{{title}}
	</div>
</template>

<script>
	export default {
		props: {
			title: String
		}
	}
</script>

<style lang="scss" scoped>
.tooltip {
	position: absolute;
	padding: 5px 8px;
	left: calc(100% + 14px);
	top: 42%;
	background-color: $orange;
	font-size: 12px;
	color: $white;
	border-radius: 4px;
	white-space: nowrap;
	svg{
		position: absolute;
		left: -45px;
		color: $orange;
		font-size: 18px;
    }
	&::after {
		position: absolute;
		content:"";
		width: 8px;
		height: 10px;
		right: 100%;
		top: 0;
		bottom: 0;
		margin: auto 0;
		background-color: $orange;
		clip-path: polygon(0 50%,100% 0, 100% 100%);

	}
}
</style>