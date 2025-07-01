import { createRouter, createWebHistory } from "vue-router";
import EstudianteView from "@/views/EstudianteView.vue";
import BecarioView from "@/views/BecarioView";
import EstudianteTablaViewV from "@/views/EstudianteTablaViewV";
import PokemonView from "@/views/PokemonView.vue";
import ResponsivoView from "@/views/ResponsivoView.vue";
import EstudianteRepoView from "@/views/EstudianteRepoView.vue";
import EstudianteConsulView from "@/views/EstudianteConsulView.vue";

const routes = [
  //configuracion de la primera pagina
  //arreglo de rutas: Estudiante View
  //cargar incial
  {
    path: "/estudiante/:cedula", // los ":" determina el PathVariable
    name: "estudianteView",
    component: EstudianteView,
  },

  {
    path: "/estudianteConsul", // los ":" determina el PathVariable
    name: "estudianteConsulView",
    component: EstudianteConsulView,
  },

  {
    path: "/estudianteRepo", // los ":" determina el PathVariable
    name: "estudianteRepoView",
    component: EstudianteRepoView,
  },

  {
    path: "/becario",
    name: "becarioView",
    component: BecarioView,
  },

  {
    path: "/responsivo",
    name: "responsivoView",
    component: ResponsivoView,
  },

  {
    path: "/estudianteTabla",
    name: "estudianteTablaView",
    component: EstudianteTablaViewV,
  },
  {
    path: "/pokemon",
    name: "pokemonView",
    component: PokemonView,
  },
  //configuracion de la segunda pagina
  // lazy-loaded: Solo se va a cagar cuando se necesite
  //cargar bajo demanda
  //arreglo de rutas: Estudiante View
  {
    path: "/contador",
    name: "contadorView",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/ContadorView.vue"),
  },

  {
    path: "/chiste",
    name: "chisteView",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/ChisteView.vue"),
  },

  {
    path: "/pregunta",
    name: "preguntaView",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/PreguntaView.vue"),
  },

  //pathVariable: Acceder a la ruta de un componente y dependiendo de la variable ejecute
  //un comportamiento
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
