<template>
  <div class="container">
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

    <button @click="agregarEstudiante">Agregar</button>
    <div class="cedula">
      <button @click="obtenerPathVariable">Cedula</button>
    </div>

    <ul>
      <li
        v-for="{ nombre, apellido, edad, carrera, ciudad } in lista"
        :key="nombre + apellido"
      >
        Nombre: {{ nombre }} - Apellido: {{ apellido }} - Edad: {{ edad }} -
        Carrera: {{ carrera }} - Ciudad: {{ ciudad }}
      </li>
    </ul>
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
      mostrar: false, // agregada para evitar error
      lista: [
        {
          nombre: "Jordy",
          apellido: "Chamba",
          edad: 22,
          carrera: "Sistemas",
          ciudad: "Quito",
        },
        // resto de estudiantes...
      ],
    };
  },
  methods: {
    agregarEstudiante() {
      const nuevo = {
        nombre: this.nuevoNombre,
        apellido: this.nuevoApellido,
        edad: this.nuevaEdad,
        carrera: this.nuevaCarrera,
        ciudad: this.nuevaCiudad,
      };
      this.lista.push(nuevo);

      // limpiar campos
      this.nuevoNombre = "";
      this.nuevoApellido = "";
      this.nuevaEdad = null;
      this.nuevaCarrera = "";
      this.nuevaCiudad = "";

      // puedes usar mostrar si lo necesitas en el template
      this.mostrar = true;
      setTimeout(() => {
        this.mostrar = false;
      }, 3000);
    },

    obtenerPathVariable() {
      const cedula = this.$route.params.cedula;
      console.log(cedula);

      const anio = this.$route.query.anio;
      console.log(anio);
      const mes = this.$route.query.mes;
      console.log(mes);
    },
  },
  mounted() {
    this.obtenerPathVariable(); // ejecutar automáticamente si se requiere
  },
};
</script>


<style scoped>
.container {
  background: #ffffff;
  border: 1px solid green;
  border-radius: 12px;
  max-width: 700px;
  margin: 50px auto;
  padding: 30px;
  font-family: "Courier New", Courier, monospace;
}

label {
  display: block;
  color: rgb(61, 23, 230);
  text-align: left;
  font-family: "Courier New", Courier, monospace;
}

input {
  background: rgb(143, 227, 240);
  color: #afaeae;
  width: 99%;
  border-radius: 8px;
  margin-bottom: 20px;
  border: 1px solid rgb(26, 131, 26);
  padding: 5px 5px;
}

button {
  border-radius: 8px;
  font-family: "Courier New", Courier, monospace;
  font-size: 15px;
  cursor: pointer;
  padding: 12px 20px;
  border: none;
  width: 100px;
}

button:active {
  background: rgb(182, 27, 60);
}

ul {
  list-style-type: none;
  margin-top: 40px;
}

li {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #cbe6db;
}
</style>
