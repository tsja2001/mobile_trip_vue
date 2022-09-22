import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import('@/views/home/home.vue'),
      meta: {
        showTabBar: true
      }
    },
    {
      path: '/favor',
      component: () => import('@/views/favor/favor.vue'),
      meta: {
        showTabBar: true
      }
    },
    {
      path: '/message',
      component: () =>
        import('@/views/message/message.vue'),
      meta: {
        showTabBar: true
      }
    },
    {
      path: '/order',
      component: () => import('@/views/order/order.vue'),
      meta: {
        showTabBar: true
      }
    },
    {
      path: '/city',
      component: () => import('@/views/city/city.vue')
    },
    {
      path: '/search',
      component: () => import('@/views/search/search.vue')
    }
  ]
})

export default router
