import Vue from 'vue'
import Router from 'vue-router'
import StockTrader from './components/StockTrader';
import Portfolio from './components/Portfolio';
import Stocks from "./components/Stocks";
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [

    {
      path:'/stocktrader',
      name:'stocktrader',
      component:StockTrader
    },
    {
      path:'/portfolio',
      name:'portfolio',
      component:Portfolio
    },
    {
      path:'/stocks',
      name:'stocks',
      component:Stocks
    }
    //
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
