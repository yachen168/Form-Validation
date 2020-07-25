<template>
  <div id="app">
		<header></header>
		<keep-alive>
      <router-view/>
		</keep-alive>
  </div>
</template>
	
<style lang="scss">
header {
	height: 5px;
	max-width: 460px;
	margin: 0 auto 50px;
	background-color: $blue-200;
}

#nav {
	padding: 30px;
	text-align: center;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
