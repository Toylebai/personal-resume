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
<style lang="scss">
.content-item {
  .content-item-wrapper {
    .title {
      font-size: px2rem(26);
      font-weight: 700;
      margin-bottom: px2rem(20) 0 px2rem(24) px2rem(20);
    }

    .item-container {
      margin-right: px2rem(20);

      .item {
        font-size: px2rem(14);
        line-height: px2rem(40);

        .num {
          padding-right: px2rem(10);
        }
      }
    }
  }
}
</style>
