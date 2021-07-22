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
<style lang="css" scoped>
.project-item {
  padding-left: 20px;
}

.item-container {
  padding-left: 20px;
}

.item {
  font-size: 14px;
  line-height: 40px;
  padding-bottom: 20px;
}

.direction {
  width: 70px;
  line-height: 25px;
}

.each-item {
  line-height: 25px;
  margin-left: 20px;
}

.display {
  display: flex;
}
</style>
