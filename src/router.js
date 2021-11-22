import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login.vue'
import Supervisor from '@/views/Supervisor.vue'
import Report from '@/views/Report.vue'
import Test from '@/views/test.vue'


Vue.use(VueRouter)


const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
      },
      {
        path: '/',
        name: 'Supervisor',
        component: Supervisor
      },
      {
        path: '/report',
        name: 'Report',
        component: Report
      }
      ,
      {
        path: '/test',
        name: 'Test',
        component: Test
      }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router