<template>
  <div id="layout">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "Layout",
};
</script>

<style lang="scss" scoped>
#layout {
  margin: 0 auto;
  position: relative;
  height: 100%;
  text-align: center;
}
</style>