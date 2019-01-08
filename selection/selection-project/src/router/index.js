import Vue from 'vue'
import Router from 'vue-router'
import Selector from '@/components/selector'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Selector',
      component: Selector
    }
  ]
})
