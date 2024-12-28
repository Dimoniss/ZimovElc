import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Services from '../pages/Services.vue';
import ServiceDetail from '../pages/ServiceDetail.vue';
import Portfolio from '../pages/Portfolio.vue';
import Contact from '../pages/Contact.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/services',
    name: 'Services',
    component: Services,
  },
  {
    path: '/services/:id',
    name: 'ServiceDetail',
    component: ServiceDetail,
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;