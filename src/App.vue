<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>
<style lang="scss">
html body {
  width: 100%;
  height: 100vh;
  padding: 0;
  margin: 0;
}

#app {
  width: 100%;
  height: 100%;
  min-height: px2rem(500);
  display: flex;
  flex-direction: column;
  overflow: scroll;
}

ul p {
  padding: 0;
  margin: 0;
}

li {
  list-style: none;
}
</style>
