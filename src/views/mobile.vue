<template>
  <div class="home">
    <header-content />
    <content-list />
  </div>
</template>

<script>
import HeaderContent from "./components/header.vue";
import ContentList from "./components/content.vue";

export default {
  name: "Home",
  components: { HeaderContent, ContentList },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.home {
  flex: 1;
  font-size: 30px;
}
</style>
