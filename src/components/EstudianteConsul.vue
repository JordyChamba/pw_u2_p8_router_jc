<template>
  <div class="contenedor">
    <h1>Listado de Estudiantes</h1>
    <button @click="consultarEstudiantes">Consultar</button>

    <table v-if="estudiantes.length">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Fecha de Nacimiento</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="estudiante in estudiantes" :key="estudiante.id">
          <td>{{ estudiante.id }}</td>
          <td>{{ estudiante.nombre }}</td>
          <td>{{ estudiante.apellido }}</td>
          <td>{{ formatFecha(estudiante.fechaNacimiento) }}</td>
        </tr>
      </tbody>
    </table>

    <p v-else>No hay estudiantes cargados.</p>
  </div>
</template>

<script>
import { consultarRespuestaFachada } from "@/clients/EstudianteRepo";

export default {
  name: "Estudiantes",
  data() {
    return {
      estudiantes: [],
    };
  },
  methods: {
    async consultarEstudiantes() {
      try {
        this.estudiantes = await consultarRespuestaFachada();
      } catch (error) {
        console.error("Error al consultar estudiantes:", error);
      }
    },
    formatFecha(fechaISO) {
      return new Date(fechaISO).toLocaleDateString();
    },
  },
};
</script>

<style scoped>
.contenedor {
  max-width: 800px;
  margin: 2rem auto;
  font-family: Arial, sans-serif;
  text-align: center;
}

button {
  padding: 10px 20px;
  margin-bottom: 20px;
  background-color: #3498db;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #2980b9;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  background-color: #f4f4f4;
}
</style>
