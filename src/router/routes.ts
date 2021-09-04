import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/home/Home.vue') }],
    meta: {requireAuth: true}
  },
  {
    path: '/user',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/user/User.vue') }],
    meta: {requireAuth: true}
  },
  {
    path: '/post',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/post/Post.vue') }],
    meta: {requireAuth: true}
  },

  ///Authentication
  {
    path: '/register',
    component: () => import('layouts/AuthLayout.vue'),
    children: [{ path: '', component: () => import('pages/user/Register.vue') }],
    meta: {requireAuth: false}
  },{
    path: '/login',
    component: () => import('layouts/AuthLayout.vue'),
    children: [{ path: '', component: () => import('pages/user/Login.vue') }],
    meta: {requireAuth: false}
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];
export default routes;
