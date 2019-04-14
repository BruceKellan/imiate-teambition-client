import Vue from 'vue';
import Router from 'vue-router';
import Index from './views/containers/Index.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    {
      path: '/login',
      // TODO
      component: Index,
      meta: {
        login: true,
      },
    },
    {
      path: '/',
      component: Index,
    },
  ],
});
