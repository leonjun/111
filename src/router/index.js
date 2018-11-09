import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Product from '@/pages/Product'
import Regist from '@/pages/Regist'
import Help from '@/pages/Help'
import Contact from '@/pages/Contact'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '',
      component: Index
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index
    },

    {
      path: '/Product',
      name: 'Product',
      component: Product
    },
    {
      path:'/regist',
      name:'Regist',
      component:Regist
    },
    {
      path:'/Help',
      name:'Help',
      component:Help
    },
    {
      path:'/Contact',
      name:'Contact',
      component:Contact
    }
  ]
})
