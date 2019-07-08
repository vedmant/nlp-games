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
      path: '/alpha2',
      name: 'Alphabet 2',
      component: Alpha,
      props: {three: false},
    },
    {
      path: '/alpha3',
      name: 'Alphabet 3',
      component: Alpha,
      props: {three: true},
    },
  ],
})

router.replace('/alpha2')


export default router
