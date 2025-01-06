import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Services from "../pages/Services.vue";
import Portfolio from "../pages/Portfolio.vue";
import Contacts from "../pages/Contacts.vue";
import ElectricalService from "../pages/ElectricalService.vue";
import PhotovoltaicService from "../pages/PhotovoltaicService.vue";
import AutomationService from "../pages/AutomationService.vue";
import CompaniesService from "../pages/CompaniesService.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/services", name: "Services", component: Services },
  { path: "/portfolio", name: "Portfolio", component: Portfolio },
  { path: "/contacts", name: "Contacts", component: Contacts },
  {
    path: "/services/electrical",
    name: "ElectricalService",
    component: ElectricalService,
  },
  {
    path: "/services/photovoltaic",
    name: "PhotovoltaicService",
    component: PhotovoltaicService,
  },
  {
    path: "/services/automation",
    name: "AutomationService",
    component: AutomationService,
  },
  {
    path: "/services/companies",
    name: "CompaniesService",
    component: CompaniesService,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
