<template>
  <div>
    <nav>
    <router-link to="/"></router-link> |
    <router-link to="/about"></router-link>

    <router-link to="/estudiante">Estudiante</router-link> |
    <router-link to="/contador">Contador</router-link> |

    <router-link to="/becario">Becario</router-link> |
    <router-link to="/chiste">Michi</router-link> |

    <router-link to="/estudianteTabla">EstudianteTabla</router-link> |
    <router-link to="/pregunta">Pregunta</router-link> |
  </nav>
  <router-view/>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>