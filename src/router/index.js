import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/home/index.vue";
import About from "../views/about/index.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

Vue.use(VueRouter);

const router = new VueRouter({
  // mode: "history",
  // base: process.env.BASE_URL,
  routes,
});

export default router;
