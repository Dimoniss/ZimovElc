import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Portfolio from "../pages/Portfolio.vue";
import Contacts from "../pages/Contacts.vue";

import Services from "../pages/Services.vue";
import ElectricalService from "../pages/ElectricalService.vue";
import TelecommunicationsService from "../pages/TelecommunicationsService.vue";
import SecuritySystemsService from "../pages/SecuritySystemsService.vue";
import SpecialServices from "../pages/SpecialServices.vue";

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
    path: "/services/telecommunications",
    name: "TelecommunicationsService",
    component: TelecommunicationsService,
  },
  {
    path: "/services/securitySystems",
    name: "SecuritySystemsService",
    component: SecuritySystemsService,
  },
  {
    path: "/services/specialServices",
    name: "SpecialServices",
    component: SpecialServices,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
