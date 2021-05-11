import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),
  },
  {
    path: "/",
    name: "Index",
    component: () => import("@/views/Index.vue"),
  },
  {
    path: "/projects",
    name: "Projects",
    component: () => import("@/views/Projects.vue"),
  },
  {
    path: "/blog",
    name: "Blog",
    component: () => import("@/views/Blog.vue"),
  },
  {
    path: "/about",
    name: "AboutMe",
    component: () => import("@/views/AboutMe.vue"),
  },
  {
    path: "/about/personal",
    name: "Personal",
    component: () => import("@/views/Personal.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("@/views/Contact.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.afterEach(() => {
  window.scrollTo(0, 0)
})

export default router;
