import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/home/homePage.vue";
import HomeLayout from "../layout/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeLayout,
    redirect: "homepage",
    children: [
      {
        path: "homepage",
        name: "homepage",
        component: HomePage,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
