import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: '韩杨--前端开发--求职、实习'
      }
    },
    {
      path: '/resume',
      name: 'resume',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Resume.vue'),
      meta: {
        title: '韩杨--个人简历'
      }
    },
    {
      path: '/danmu',
      name: 'danmu',
      component: () => import('./components/DanMu.vue'),
      meta: {
        title: '弹幕是怎么练成的???'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
})
