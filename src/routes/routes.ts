import * as vR from "vue-router";
import Dashboard from "../@pages/Dashboard.vue";
import Login from "../@pages/Login.vue";
import Register from "../@pages/Register.vue";
import Home from "../@pages/Home.vue";
import EcommerceHome from "../@pages/ecommerce/EcommerceHome.vue";
import CartView from "../@pages/ecommerce/CartView.vue";

const _routes: Array<vR.RouteRecordRaw> = [
  //path and componennt are mandotat
  {
    path: "/",
    component: Home,
    name: "home",
  },
  {
    path: "/dashboard",
    component: Dashboard,
    name: "dashboard",
  },
  {
    path: "/login",
    component: Login,
    name: "login",
  },
  {
    path: "/signup",
    component: Register,
    name: "register",
  },
  {
    path:"/ecommerce",
    component: EcommerceHome,
    name: "ecommercehome"
  },
  {
    path:"/cart",
    component: CartView,
    name: "cart"
  }

];
///creating the router and then exporintg it
const router = vR.createRouter({
  history: vR.createWebHistory(),
  routes: _routes,
});

export default router;
