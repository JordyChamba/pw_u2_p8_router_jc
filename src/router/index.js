import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EstudianteView from "@/views/EstudianteView.vue";
import BecarioView from "@/views/BecarioView";
import EstudianteTablaViewV from "@/views/EstudianteTablaViewV";

const routes = [
  //configuracion de la primera pagina
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  //arreglo de rutas: Estudiante View
  //cargar incial
  {
    path: '/estudiante', // los ":" determina el PathVariable
    name: 'estudianteView',
    component: EstudianteView
  },

  {
    path: '/becario',
    name: 'becarioView',
    component: BecarioView
  },

  {
    path: '/estudianteTabla',
    name: 'estudianteTablaView',
    component: EstudianteTablaViewV
  },
    //configuracion de la segunda pagina
    // lazy-loaded: Solo se va a cagar cuando se necesite
    //cargar bajo demanda
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
    //arreglo de rutas: Estudiante View
  {
    path: '/contador',
    name: 'contadorView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../views/ContadorView.vue')
  },

    {
    path: '/chiste',
    name: 'chisteView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../views/ChisteView.vue')
  },

  
  {
    path: '/pregunta',
    name: 'preguntaView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../views/PreguntaView.vue')
  },

  //pathVariable: Acceder a la ruta de un componente y dependiendo de la variable ejecute 
  //un comportamiento
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
