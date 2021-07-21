import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/home/index.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
