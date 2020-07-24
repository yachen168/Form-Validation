<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/GeneralInformation">GeneralInformation</router-link> |
			<router-link to="/UpdateProfilePicture">UpdateProfilePicture</router-link> |
			<router-link to="/PaymentMethod">PaymentMethod</router-link> |
			<router-link to="/Completed">Completed</router-link>
    </div>
		<keep-alive>
      <router-view/>
		</keep-alive>
  </div>
</template>

<style lang="scss">

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
