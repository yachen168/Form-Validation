<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/GeneralInfomation">GeneralInfomation</router-link> |
			<router-link to="/UpdateProfilePicture">UpdateProfilePicture</router-link> |
			<router-link to="/PaymentMethod">PaymentMethod</router-link> |
			<router-link to="/Completed">Completed</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
