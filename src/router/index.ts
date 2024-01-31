import {createRouter, createWebHashHistory} from 'vue-router'


let router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/login',
      component: () => import('@/views/login/index.vue'),
      name: 'Login'
    },
    {
      path: '/',
      component: () => import('@/views/home/index.vue'),
      name: 'Home'
    },
    {
      path: '/404',
      component: () => import('@/views/404/index.vue'),
      name: 'Nofound'
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/404',
      name: 'Any'
    }
  ],
  scrollBehavior() {
    return {
      left: 0,
      top: 0
    }
  }

})

export default router