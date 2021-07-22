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
<style lang="css">
html body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

#app {
  width: 100%;
  height: 100%;
  min-height: 500px;
  display: flex;
  flex-direction: column;
}

ul p {
  padding: 0;
  margin: 0;
}

li {
  list-style: none;
}
</style>
