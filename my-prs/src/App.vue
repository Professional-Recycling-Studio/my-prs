<template>
  <div id="app">
    <router-view name="search"></router-view>
    <router-view name="main"></router-view>
    <router-view name="tx_nav"></router-view>
    <router-view name="login"></router-view>
    <router-view name="MoreMicroblog"></router-view>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>

