import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/hotDeals',
    name: 'Hot Deals',
    component: () => import('../views/HotDeals.vue'),
  },
  {
    path: '/productsMan',
    name: 'ProductsMan',
    component: () => import('../views/ProductsMan.vue'),
    props: true,
  },
  {
    path: '/productsWomen',
    name: 'ProductsWomen',
    component: () => import('../views/ProductsWomen.vue'),
    props: true,
  },
  {
    path: '/cart',
    name: 'Shopping Cart',
    component: () => import('../views/ShoppingCart.vue'),
  },
  {
    path: '/singlePage',
    name: 'SinglePage',
    component: () => import('../views/SinglePage.vue'),
    props: true,
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import('../views/Checkout.vue'),
  },
  {
    path: '/featured',
    name: 'Featured',
    component: () => import('../views/Featured.vue'),
  },
  {
    path: '/accoseriese',
    name: 'Accoseriese',
    component: () => import('../views/Accoseriese.vue'),
  },
  {
    path: '/kids',
    name: 'Kids',
    component: () => import('../views/Kids.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
