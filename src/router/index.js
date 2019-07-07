import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Alpha from '@/components/Alpha'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/alpha',
      name: 'Alphabet',
      component: Alpha,
    },
  ],
})

router.replace('/alpha')


export default router
