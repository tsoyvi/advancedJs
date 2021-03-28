<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/products">Product</router-link>
    </div>

    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  margin: 0px;
  font-family: 'Lato', Arial, sans-serif;
}

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
