<template>
  <div class="project-item">
    <div
      class="project-item-wrapper"
      v-for="(itemProject, index) in projectItemData"
      :key="index"
    >
      <div class="message">
        <div class="name-container">
          <ul class="item-container">
            <li
              :class="item.length === 1 ? 'display item' : 'item'"
              v-for="(item, key) in itemProject"
              :key="key"
            >
              <span class="direction">{{ key }}:</span>
              <p
                v-for="(itemVal, index) in item"
                :key="index"
                class="each-item"
              >
                {{ itemVal }}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectItem",
  components: {},
  props: {
    projectItemData: {
      type: Array,
    },
  },
};
</script>
<style lang="scss">
.project-item {
  .project-item-wrapper {
    .message {
      .name-container {
        .item-container {
          margin-right: px2rem(20);

          .item {
            font-size: px2rem(14);
            line-height: px2rem(40);
            padding-bottom: px2rem(20);

            .direction {
              min-width: px2rem(90);
              line-height: px2rem(25);
              padding-bottom: px2rem(10);
            }

            .each-item {
              line-height: px2rem(40);
              margin-left: px2rem(20);
              padding-bottom: px2rem(20);
            }
          }
        }
      }
    }
  }
}

.display {
  display: flex;
}
</style>
