<template>
  <div class="contenedor">
    <h1>Buscar Estudiante por ID</h1>

    <div class="busqueda">
      <input
        v-model="idBusqueda"
        type="number"
        placeholder="Ingrese ID del estudiante"
      />
      <button @click="buscarEstudiante">Buscar</button>
    </div>

    <form v-if="estudianteEncontrado">
      <div class="form-group">
        <label>Nombre:</label>
        <input type="text" v-model="estudiante.nombre" readonly />
      </div>

      <div class="form-group">
        <label>Apellido:</label>
        <input type="text" v-model="estudiante.apellido" readonly />
      </div>

      <div class="form-group">
        <label>Fecha de Nacimiento:</label>
        <input type="date" v-model="estudiante.fechaNacimiento" readonly />
      </div>
    </form>

    <p v-if="mensajeError" class="error">{{ mensajeError }}</p>
  </div>
</template>

<script>
import { obtenerEstudiantePorIdFachada } from "@/clients/EstudianteRepo2";

export default {
  name: "BuscarEstudiante",
  data() {
    return {
      idBusqueda: "",
      estudiante: {
        nombre: "",
        apellido: "",
        fechaNacimiento: "",
      },
      estudianteEncontrado: false,
      mensajeError: "",
    };
  },
  methods: {
    async buscarEstudiante() {
      this.mensajeError = "";
      this.estudianteEncontrado = false;

      if (!this.idBusqueda) {
        this.mensajeError = "Por favor ingresa un ID válido.";
        return;
      }

      try {
        const resultado = await obtenerEstudiantePorIdFachada(this.idBusqueda);
        this.estudiante = {
          nombre: resultado.nombre,
          apellido: resultado.apellido,
          fechaNacimiento: resultado.fechaNacimiento.split("T")[0],
        };
        this.estudianteEncontrado = true;
      } catch (error) {
        this.mensajeError = "Estudiante no encontrado.";
        console.error("Error al buscar estudiante:", error);
      }
    },
  },
};
</script>

<style scoped>
.contenedor {
  max-width: 600px;
  margin: 2rem auto;
  font-family: Arial, sans-serif;
  text-align: center;
}

.busqueda {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  gap: 10px;
}

input[type="number"],
input[type="text"],
input[type="date"] {
  padding: 8px;
  width: 200px;
}

button {
  padding: 8px 16px;
  background-color: #2ecc71;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #27ae60;
}

form {
  margin-top: 20px;
  text-align: left;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input[readonly] {
  background-color: #f0f0f0;
}

.error {
  color: red;
  margin-top: 10px;
}
</style>
