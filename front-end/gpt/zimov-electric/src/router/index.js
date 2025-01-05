import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Services from "../pages/Services.vue";
import Portfolio from "../pages/Portfolio.vue";
import Contacts from "../pages/Contacts.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/services", name: "Services", component: Services },
  { path: "/portfolio", name: "Portfolio", component: Portfolio },
  { path: "/contacts", name: "Contacts", component: Contacts },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
