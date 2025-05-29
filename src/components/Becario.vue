<template>
  <div class="container">
    <div v-show="mostrar"><h1>Datos Guardados</h1></div>

    <label for="id_nombre">Nombre: </label>
    <input v-model="nuevoNombre" id="id_nombre" type="text" />

    <label for="id_apellido">Apellido: </label>
    <input v-model="nuevoApellido" id="id_apellido" type="text" />

    <label for="id_cedula">Cedula: </label>
    <input v-model="nuevaCedula" id="id_cedula" type="text" />

    <label for="id_provincia">Provincia: </label>
    <input v-model="nuevaProvincia" id="id_provincia" type="text" />

    <label for="id_instituto">Instituto: </label>
    <input v-model="nuevoInstituto" id="id_instituto" type="text" />

    <button v-on:click="agregarBecario()">Agregar Becario</button>

    <table>
      <thead>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Cedula</th>
        <th>Provincia</th>
        <th>Instituto</th>
        <th>Accion</th>
      </thead>
      <tbody>
        <tr
          v-for="{ nombre, apellido, cedula, provincia, instituto } in lista"
          :Key="nombre"
        >
          <td>{{ nombre }}</td>
          <td>{{ apellido }}</td>
          <td>{{ cedula }}</td>
          <td>{{ provincia }}</td>
          <td>{{ instituto }}</td>
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
      mostrar: false,
      nuevoNombre: "",
      nuevoApellido: "",
      nuevaCedula: "",
      nuevaProvincia: "",
      nuevoInstituto: "", 
      lista: [
        {
          nombre: "Jordy",
          apellido: "Chamba",
          cedula: "1725322255",
          provincia: "Pichincha",
          instituto: "UCE",
        },
        {
          nombre: "Peter",
          apellido: "Parker",
          cedula: "1725322255",
          provincia: "Guayaquil",
          instituto: "PUCE",
        },
      ],
    };
  },
  methods: {
    agregarBecario() {
      const beca = {
        nombre: this.nuevoNombre,
        apellido: this.nuevoApellido,
        cedula: this.nuevaCedula,
        provincia: this.nuevaProvincia,
        instituto: this.nuevoInstituto, 
      };

      this.lista.push(beca);
      this.mostrar = true;

      // Limpiar los campos
      this.nuevoNombre = "";
      this.nuevoApellido = "";
      this.nuevaCedula = "";
      this.nuevaProvincia = "";
      this.nuevoInstituto = "";

      setTimeout(() => {
        this.mostrar = false;
      }, 1500);
    },
  },
};
</script>

<style scoped>
.container {
  border: 1px solid rgb(0, 0, 0);
  padding: 25px;
  margin: 20px;
  background: rgb(152, 144, 226);
  border-radius: 15px;
  max-width: 550px;
}

label {
  display: block;
  text-align: left;
  margin: 10px 25px;
}

input {
  border-radius: 15px;
  border: none;
  width: 490px;
  padding: 10px 8px;
  margin: 10px;
}

button {
  padding: 10px 10px;
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 15px;
  font-size: 15px;
  cursor: pointer;
}

button:active {
  background: green;
}

table {
  border: 1px solid red;
  border-radius: 10px;
  background: rgb(221, 189, 250);
  padding: 15px;
  margin: 8px;
}

th {
  border-bottom: 1px solid black;
  background-color: rgb(245, 219, 245);
}

td,
th {
  padding: 4px 8px;
}
</style>
