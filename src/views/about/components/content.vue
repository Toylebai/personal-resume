<template>
  <div class="content">
    <item-content :content-item-data="contentItemData" />
  </div>
</template>

<script>
import ItemContent from "./item-content.vue";

export default {
  name: "Content",
  components: { ItemContent },
  data() {
    return {
      contentItemData: [
        {
          id: "1",
          title: "个人技能",
          list: [
            "掌握 HTML5/CSS3 新特性，熟练使用 Sass，Less 等预编译器， HTML5 Flex 布局等有实际项目经验",
            "使用 Vue 框架，通过 Vue + Vue-router + Vuex + axios + mockjs 等进行数据集中管理及项目开发",
            "熟练 jQuery 等主流 Js 库以及 Swiper,Better-Scroll等前端常用插件",
            " 对 Mint UI，Element UI，Echarts, Antd 以及 Vant UI 等主流前端 UI 库，有实际的运用及项目开发经验",
            "AJAX ，Axios(Axios-Mock-Adapter,MockJS)等有实际开发经验",
            "熟练使用 ES6 语法，如箭头函数、模板字符串，async， await，proxy，generator，扩展运算符以及Promise 等",
            "有Koa + Koa-router + Koa-static + Koa-body + Koa-views + ejs + Koa-compose + mysql 开发后台管理系统经验",
            "熟悉 泛型 、 接口、 泛型类、 函数约束 、 断言等TypeScript 语法，有实际开发经验",
          ],
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.content {
  width: 95%;
  height: auto;
  padding: 20px 0;
  margin: 0 auto;
  box-shadow: 0 0 0 3px rgba(185, 169, 169, 0.1);

  .title {
    font-size: px2rem(26);
    font-weight: 700;
    margin: 20px 0 24px 20px;
  }
}
</style>
