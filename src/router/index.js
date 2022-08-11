import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/signup',
      component: () => import('@/views/SignupPage.vue'),
    },
    {
      path: '/login',
      component: () => import('@/views/LoginPage.vue'), // 코드 스플리팅
    },
    {
      path: '/home/:id',
      component: () => import('@/views/HomePage.vue'),
    },
    {
      path: '/roomhome/:id',
      component: () => import('@/views/RoomHomePage.vue'),
    },
    {
      path: '/roomhome/n/:token',
      component: () => import('@/views/AcceptRoomPage.vue'),
    },
    {
      path: '/calendar/:id',
      component: () => import('@/views/CalendarPage.vue'),
    },
    {
      path: '*',
      component: () => import('@/views/NotFoundPage.vue'),
    },
  ],
});
