import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Products from '@/pages/Products.vue';
import Cart from '@/pages/Cart.vue';
import Orders from '@/pages/Orders.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/Products',
      name: 'products',
      component: Products,
    },
    {
      path: '/Cart',
      name: 'cart',
      component: Cart,
    },
    {
      path: '/Orders',
      name: 'orders',
      component: Orders,
    },
  ],
});

export default router;
