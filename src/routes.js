import Vue from 'vue'
import Router from 'vue-router'
import WorkTable from '@/components/Index'
import PdaPrinterDemo from '@/components/PdaPrinterDemo'
import CameraDemo from '@/components/CameraDemo'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: WorkTable,
      meta: {
        requireAuth: false
      },
    },
    {
      path: '/PdaPrinterDemo',
      name: 'PdaPrinterDemo',
      component: PdaPrinterDemo,
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/CameraDemo',
      name: 'CameraDemo',
      component: CameraDemo,
      meta: {
        requireAuth: false
      }
    }
  ]
})
