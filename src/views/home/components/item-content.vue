<template>
  <div class="content-item">
    <div
      class="content-item-wrapper"
      v-for="itemContent in contentItemData"
      :key="itemContent.id"
    >
      <div class="title">{{ itemContent.title }}</div>
      <ul class="item-container">
        <li class="item" v-for="(item, index) in itemContent.list" :key="index">
          <span class="num">{{ index + 1 }}</span>
          <span>{{ item }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentItem",
  components: {},
  props: {
    contentItemData: {
      type: Array,
    },
  },
};
</script>
<style lang="css" scoped>
.content-item {
  padding-left: 20px;
}
.title {
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 24px;
}

.item-container {
  padding-left: 20px;
}

.item {
  font-size: 14px;
  line-height: 40px;
}

.num {
  padding-right: 10px;
}
</style>
