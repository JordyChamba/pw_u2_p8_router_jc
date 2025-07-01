<template>
  <div>
    <h2>Datos de los Estudiantes</h2>

    <!-- Si es un array con estudiantes -->
    <div v-if="Array.isArray(estudiantes) && estudiantes.length > 0">
      <div
        v-for="estudiante in estudiantes"
        :key="estudiante.id"
        style="margin-bottom: 1rem"
      >
        <p><strong>ID:</strong> {{ estudiante.id }}</p>
        <p><strong>Nombre:</strong> {{ estudiante.nombre }}</p>
        <p><strong>Apellido:</strong> {{ estudiante.apellido }}</p>
        <hr />
      </div>
    </div>

    <!-- Si es un solo estudiante (objeto) -->
    <div v-else-if="estudiantes && !Array.isArray(estudiantes)">
      <p><strong>ID:</strong> {{ estudiantes.id }}</p>
      <p><strong>Nombre:</strong> {{ estudiantes.nombre }}</p>
      <p><strong>Apellido:</strong> {{ estudiantes.apellido }}</p>
    </div>

    <!-- Mientras no hay datos -->
    <div v-else>
      <p>Cargando datos...</p>
    </div>
  </div>
</template>

<script>
import { consultarRespuestaFachada } from "@/clients/EstudianteRepo";

export default {
  name: "Estudiante",
  data() {
    return {
      estudiantes: null,
    };
  },
  async mounted() {
    try {
      this.estudiantes = await consultarRespuestaFachada();
      console.log("Datos de estudiantes:", this.estudiantes);
    } catch (error) {
      console.error("Error al cargar estudiantes:", error);
    }
  },
};
</script>

<style scoped>
h2 {
  color: #2c3e50;
}
</style>
