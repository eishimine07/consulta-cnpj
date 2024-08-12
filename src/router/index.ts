import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/consulta-cnpj',
    component: () => import('@/views/CNPJSearchView.vue'),
    name: 'cnpjSearch',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
