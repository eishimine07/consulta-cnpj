import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/consulta-cnpj',
    component: () => import('@/views/HomeView.vue'),
    name: 'home',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
