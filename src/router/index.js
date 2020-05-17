import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Inicio (Invitados)",
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login"),
  },
  { path: "*", redirect: "/" },
];

const router = new VueRouter({
  mode: "history",
  hash: false,
  routes,
});

export const createRouter = () => {
  return new VueRouter({ routes });
};

export default router;
