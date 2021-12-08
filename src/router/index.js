import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/find",
    },
    {
      path: "/loading",
      name: "Loading",
      component: () => import("../views/loading"),
      meta: {
        navShow: false,
        footShow: false,
      },
    },
    {
      path: "/register",
      name: "Register",
      component: () => import("../views/register"),
      /*  children: [
        {
          path: "yzcode",
          name: "Yzcode",
          component: () => import("../views/yzcode"),
        },
      ], */
    },
    {
      path: "/yzcode",
      name: "Yzcode",
      component: () => import("../views/yzcode"),
    },
    {
      path: "/zhuce",
      name: "Zhuce",
      component: () => import("../views/zhuce"),
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("../views/login"),
    },
    {
      path: "/find",
      name: "Find",
      component: () => import("../views/find"),
      meta: {
        // navShow: true,
        footShow: true,
      },
    },
    {
      path: "/boke",
      name: "Boke",
      component: () => import("../views/boke"),
      meta: {
        navShow: true,
        footShow: true,
      },
    },
    {
      path: "/mine",
      name: "Mine",
      component: () => import("../views/mine"),
      meta: {
        navShow: true,
        footShow: true,
      },
    },
    {
      path: "/kge",
      name: "Kge",
      component: () => import("../views/kge"),
      meta: {
        navShow: true,
        footShow: true,
      },
    },
    {
      path: "/yuncun",
      name: "Yuncun",
      component: () => import("../views/yuncun"),
      meta: {
        navShow: true,
        footShow: true,
      },
    },
  ],
  linkActiveClass: "active",
});
export default router;
