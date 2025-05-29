<template>
  <div class="container">
    <div v-show="mostrar">
      <h1>Estudiante Guardado</h1>
    </div>
    <label for="id_nombre">Nombre: </label>
    <input v-model="nuevoNombre" id="id_nombre" type="text" />

    <label for="id_apellido">Apellido: </label>
    <input v-model="nuevoApellido" id="id_apellido" type="text" />

    <label for="id_edad">Edad: </label>
    <input v-model="nuevaEdad" id="id_edad" type="number" />

    <label for="id_carrera">Carrera: </label>
    <input v-model="nuevaCarrera" id="id_carrera" type="text" />

    <label for="id_ciudad">Ciudad: </label>
    <input v-model="nuevaCiudad" id="id_ciudad" type="text" />

    <button v-on:click="agregarEstudiante()">Agregar</button>

    <table>
      <thead>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Edad</th>
        <th>Carrera</th>
        <th>Ciudad</th>
        <th>Acción</th>
      </thead>
      <tbody>
        <tr
          v-for="{ nombre, apellido, edad, carrera, ciudad } in lista"
          :key="nombre"
        >
          <td>{{ nombre }}</td>
          <td>{{ apellido }}</td>
          <td>{{ edad }}</td>
          <td>{{ carrera }}</td>
          <td>{{ ciudad }}</td>
          <td><button>Ver</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nuevoNombre: "",
      nuevoApellido: "",
      nuevaEdad: null,
      nuevaCarrera: "",
      nuevaCiudad: "",
      lista: [
        {
          nombre: "Jordy",
          apellido: "Chamba",
          edad: 22,
          carrera: "Sistemas",
          ciudad: "Quito",
        },
        {
          nombre: "Kevin",
          apellido: "Teran",
          edad: 23,
          carrera: "Electrónica",
          ciudad: "Guayaquil",
        },
        {
          nombre: "Jose",
          apellido: "Castillo",
          edad: 21,
          carrera: "Contabilidad",
          ciudad: "Cuenca",
        },
        {
          nombre: "Ana",
          apellido: "Pozo",
          edad: 20,
          carrera: "Derecho",
          ciudad: "Loja",
        },
        {
          nombre: "Erik",
          apellido: "Parra",
          edad: 22,
          carrera: "Medicina",
          ciudad: "Ambato",
        },
        {
          nombre: "Pedro",
          apellido: "Loya",
          edad: 24,
          carrera: "Mecánica",
          ciudad: "Riobamba",
        },
        {
          nombre: "Juan",
          apellido: "Andrade",
          edad: 25,
          carrera: "Arquitectura",
          ciudad: "Ibarra",
        },
      ],
    };
  },
  methods: {
    agregarEstudiante() {
      const nuevoEst = {
        nombre: this.nuevoNombre,
        apellido: this.nuevoApellido,
        edad: this.nuevaEdad,
        carrera: this.nuevaCarrera,
        ciudad: this.nuevaCiudad,
      };
      //   this.lista.unshift(nuevoEst);
      this.lista.push(nuevoEst);

      this.mostrar = true;
      this.nombre = null;

      setTimeout(() => {
        this.mostrar = false;
      }, 1500);
    },
  },
};
</script>

<style scoped>
.container {
  background-color: #ffffff;
  border: 1px solid;
  border-radius: 12px;
  max-width: 800px;
  margin: 50px auto;
  padding: 30px;
}

label {
  /* Display block: Ocupa el bloque completo horizontalmente */
  display: block;
  color: #333;
  text-align: left;
}

input {
  width: 95%;
  background-color: #69e7bd;
  color: #141414;
  border: 1px solid #8ee0cc;
  border-radius: 4px;
  margin-bottom: 16px;
  padding: 8px 14px;
}

button {
  border-radius: 4px;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: 300px;
}

button:active {
  background-color: rgb(216, 48, 48);
}

table {
  border: 1px solid black;
  border-radius: 8px;
  margin: 0 auto;
  background-color: rgb(235, 214, 235);
  border-spacing: 0;
  overflow: hidden;

  margin-top: 48px;
}

th {
  border-bottom: 1px solid black;
  background-color: rgb(228, 125, 228);
}

td > button {
  width: fit-content;
  background-color: rgb(138, 144, 235);
}

td,
th {
  padding: 4px 8px;
}
</style>
