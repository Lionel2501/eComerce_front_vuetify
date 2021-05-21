import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ProductoForm from '../views/ProductoForm.vue'

//axios
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: 'hola/about',
    name: 'About',
    component: function () {
      return import('../views/About.vue')
    }
  },
  {
    path: '/productoform',
    name: 'ProductoForm',
    component: ProductoForm
  },
  {
    path: '/producto/:id/edit',
    name: 'EditForm',
    component: ProductoForm
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
