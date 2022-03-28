<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss">
html,
body {
  margin: 0 auto;
  padding: 0;
  width: 100%;
  position: relative;
  height: 100%;

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 0 auto;
    position: relative;
    height: 100%;
  }
}
</style>
