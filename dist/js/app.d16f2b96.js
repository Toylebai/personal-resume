(function(t){function e(e){for(var o,i,s=e[0],c=e[1],u=e[2],p=0,m=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&m.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);l&&l(e);while(m.length)m.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(o=!1)}o&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},r={app:0},a=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/personal-resume/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"069a":function(t,e,n){"use strict";n("9e89")},"0e08":function(t,e,n){"use strict";n("b282")},"0ffc":function(t,e,n){},"42f8":function(t,e,n){"use strict";n("5cbc")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],i={name:"App",components:{}},s=i,c=(n("5c0b"),n("2877")),u=Object(c["a"])(s,r,a,!1,null,null,null),l=u.exports,p=n("8c4f"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home",class:"PCoperation"===t.ismOrpc?"pc-home":""},[n("header-content"),n("content-list")],1)},f=[],d=(n("ac1f"),n("466d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[t._v("个人简历")])}),b=[],v={name:"Header",components:{}},h=v,y=(n("069a"),Object(c["a"])(h,d,b,!1,null,null,null)),w=y.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("item-content",{attrs:{"content-item-data":t.contentItemData}}),n("div",{staticClass:"title"},[t._v("项目介绍")]),n("item-project",{attrs:{"project-item-data":t.projectItemData}})],1)},g=[],j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content-item"},t._l(t.contentItemData,(function(e){return n("div",{key:e.id,staticClass:"content-item-wrapper"},[n("div",{staticClass:"title"},[t._v(t._s(e.title))]),n("ul",{staticClass:"item-container"},t._l(e.list,(function(e,o){return n("li",{key:o,staticClass:"item"},[n("span",{staticClass:"num"},[t._v(t._s(o+1))]),n("span",[t._v(t._s(e))])])})),0)])})),0)},C=[],O={name:"ContentItem",components:{},props:{contentItemData:{type:Array}}},x=O,I=(n("d816"),Object(c["a"])(x,j,C,!1,null,null,null)),M=I.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"project-item"},t._l(t.projectItemData,(function(e,o){return n("div",{key:o,staticClass:"project-item-wrapper"},[n("div",{staticClass:"message"},[n("div",{staticClass:"name-container"},[n("ul",{staticClass:"item-container"},t._l(e,(function(e,o){return n("li",{key:o,class:1===e.length?"display item":"item"},[n("span",{staticClass:"direction"},[t._v(t._s(o)+":")]),t._l(e,(function(e,o){return n("p",{key:o,staticClass:"each-item"},[t._v(" "+t._s(e)+" ")])}))],2)})),0)])])])})),0)},P=[],k={name:"ProjectItem",components:{},props:{projectItemData:{type:Array}}},E=k,A=(n("42f8"),Object(c["a"])(E,S,P,!1,null,null,null)),X=A.exports,D={name:"Content",components:{ItemContent:M,ItemProject:X},data:function(){return{contentItemData:[{id:"1",title:"个人技能",list:["掌握 HTML5/CSS3 新特性，熟练使用 Sass，Less 等预编译器， HTML5 Flex 布局等有实际项目经验","使用 Vue 框架，通过 Vue + Vue-router + Vuex + axios + mockjs 等进行数据集中管理及项目开发","熟练 jQuery 等主流 Js 库以及 Swiper,Better-Scroll等前端常用插件"," 对 Mint UI，Element UI，Echarts, Antd 以及 Vant UI 等主流前端 UI 库，有实际的运用及项目开发经验","AJAX ，Axios(Axios-Mock-Adapter,MockJS)等有实际开发经验","熟练使用 ES6 语法，如箭头函数、模板字符串，async， await，proxy，generator，扩展运算符以及Promise 等","有Koa + Koa-router + Koa-static + Koa-body + Koa-views + ejs + Koa-compose + mysql 开发后台管理系统经验","熟悉 泛型 、 接口、 泛型类、 函数约束 、 断言等TypeScript 语法，有实际开发经验"]}],projectItemData:[{"项目名称":["XXXXXX"],"项目介绍":["车端配套各大平台入口；为用户介绍自动驾驶小巴、自动驾驶公交车、自动驾驶出租车等车型及配套各大后台管理系统。"],"主要工作":["1.了解产品的需求并与项目经理，ui 协作，完成页面布局以及功能的实现","2.使用vuei +typescript  + elementui 进行前端编码并且和后台紧密配合，实现数据获取及页面渲染","3.登录：接入百度统一登录passport，调用passport.use(‘login’, {}, (magic) => {})传入回调函数，在回调函数中通过\tnew magic.passport.login()实现请求，通过on方法监听成功、失败","4.对图片进行webp和png两种图片格式的处理，利用modernizr.js插件检测浏览器是否支持webp图片，该脚本如果检测出来支持则会在html标签上加一个webp的类，如果不支持回家no-webp的类；在样式用background-image：url() 引用两套图片（webp/png），需要分开在两个类中实现","5.平台入口页面：后端返回用户平台权限列表，在vuex中进行存储，在路由跳转验证权限时，通过try catch 触发校验权限列表为空则触发重新请求，若请求失败则重置权限信息","6.编写公共组件，利用文案配置去渲染相对应的页面","7.利用elementUi中的carousel 编写平台介绍中的轮播，通过监听mousewheel事件，添加鼠标滚轮切换轮播的效果。并添加debounce事件做优化处理","8.通过css animation属性，设置@keyframes 对页面文案编写动画效果"],"项目收获":["1.使用modernizr.js插件对image进行不同的浏览器进行检测是否支持webp格式，极大的优化了支持webp格式浏览器的图片加载","2.Css  animation 动画属性的运用更加熟练","3.接入 XX passport登录"]}]}}},B=D,T=(n("0e08"),Object(c["a"])(B,_,g,!1,null,null,null)),$=T.exports,H={name:"Home",components:{HeaderContent:w,ContentList:$},data:function(){return{ismOrpc:"Moperation"}},methods:{_isMobile:function(){var t=navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);return t},getRem:function(t,e){var n=document.getElementsByTagName("html")[0],o=document.body.clientWidth||document.documentElement.clientWidth;n.style.fontSize=o/t*e+"px"},getIsMobile:function(){var t=this;this._isMobile()?(t.ismOrpc="Moperation",window.onload=function(){t.getRem(750,100)},window.onresize=function(){t.getRem(750,100)}):t.ismOrpc="PCoperation"}},created:function(){this.getIsMobile()}},J=H,K=(n("7252"),Object(c["a"])(J,m,f,!1,null,null,null)),U=K.exports,V=[{path:"/",name:"Home",component:U}];o["a"].use(p["a"]);var z=new p["a"]({routes:V}),L=z,W=n("2f62");o["a"].use(W["a"]);var Q=new W["a"].Store({state:{},mutations:{},actions:{},modules:{}});o["a"].config.productionTip=!1,new o["a"]({router:L,store:Q,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"5cbc":function(t,e,n){},7252:function(t,e,n){"use strict";n("0ffc")},"9c0c":function(t,e,n){},"9e89":function(t,e,n){},b282:function(t,e,n){},d816:function(t,e,n){"use strict";n("fcb4")},fcb4:function(t,e,n){}});
//# sourceMappingURL=app.d16f2b96.js.map