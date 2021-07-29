<template>
  <div class="content">
    <item-content :content-item-data="contentItemData" />
    <div class="title">项目介绍</div>
    <item-project :project-item-data="projectItemData" />
  </div>
</template>

<script>
import ItemContent from "./item-content.vue";
import ItemProject from "./item-project.vue";

export default {
  name: "Content",
  components: { ItemContent, ItemProject },
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
      projectItemData: [
        {
          项目名称: ["XXXXXX"],
          项目介绍: [
            "车端配套各大平台入口；为用户介绍自动驾驶小巴、自动驾驶公交车、自动驾驶出租车等车型及配套各大后台管理系统。",
          ],
          主要工作: [
            "1.了解产品的需求并与项目经理，ui 协作，完成页面布局以及功能的实现",
            "2.使用vuei +typescript  + elementui 进行前端编码并且和后台紧密配合，实现数据获取及页面渲染",
            "3.登录：接入百度统一登录passport，调用passport.use(‘login’, {}, (magic) => {})传入回调函数，在回调函数中通过	new magic.passport.login()实现请求，通过on方法监听成功、失败",
            "4.对图片进行webp和png两种图片格式的处理，利用modernizr.js插件检测浏览器是否支持webp图片，该脚本如果检测出来支持则会在html标签上加一个webp的类，如果不支持回家no-webp的类；在样式用background-image：url() 引用两套图片（webp/png），需要分开在两个类中实现",
            "5.平台入口页面：后端返回用户平台权限列表，在vuex中进行存储，在路由跳转验证权限时，通过try catch 触发校验权限列表为空则触发重新请求，若请求失败则重置权限信息",
            "6.编写公共组件，利用文案配置去渲染相对应的页面",
            "7.利用elementUi中的carousel 编写平台介绍中的轮播，通过监听mousewheel事件，添加鼠标滚轮切换轮播的效果。并添加debounce事件做优化处理",
            "8.通过css animation属性，设置@keyframes 对页面文案编写动画效果",
          ],
          项目收获: [
            "1.使用modernizr.js插件对image进行不同的浏览器进行检测是否支持webp格式，极大的优化了支持webp格式浏览器的图片加载",
            "2.Css  animation 动画属性的运用更加熟练",
            "3.接入 XX passport登录",
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
