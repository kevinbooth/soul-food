<template>
  <div id="app">
    <div id="nav" class="container">
      <router-link to="/"
        ><img class="app__logo" alt="Jesus Christ" src="./assets/logo.png"
      /></router-link>
      <span class="app__title">soulFood</span>
      <!--<router-link to="/about">About</router-link>-->
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding-top: 30px;
  padding-bottom: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #6bcaff;
    }
  }
}
.app__logo {
  max-width: 70px;
}
.app__title {
  font-family: monospace, sans-serif;
  font-size: 16px;
}
</style>
