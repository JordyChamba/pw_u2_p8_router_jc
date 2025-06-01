<template>
  <div class="container">
    <!-- Mensaje de éxito -->
    <div v-show="mostrar">
      <h1>{{ mensajeFinal }}</h1>
    </div>

    <!-- Formulario -->
    <label for="id_nombre">Nombre: </label>
    <input v-model="nuevoNombre" id="id_nombre" type="text" />
    <span v-if="mensaje.nombre" style="color: red">{{ mensaje.nombre }}</span>

    <label for="id_apellido">Apellido: </label>
    <input v-model="nuevoApellido" id="id_apellido" type="text" />
    <span v-if="mensaje.apellido" style="color: red">{{
      mensaje.apellido
    }}</span>

    <label for="id_cedula">Cédula: </label>
    <input v-model="nuevaCedula" id="id_cedula" type="text" />

    <label for="id_provincia">Provincia: </label>
    <input v-model="nuevaProvincia" id="id_provincia" type="text" />

    <label for="id_instituto">Instituto: </label>
    <input v-model="nuevoInstituto" id="id_instituto" type="text" />

    <button @click="agregarBecario()">Agregar Becario</button>

    <!-- Tabla -->
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Cédula</th>
          <th>Provincia</th>
          <th>Instituto</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="{ nombre, apellido, cedula, provincia, instituto } in lista"
          :key="cedula"
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
      mensajeFinal: "",
      mensaje: {
        nombre: null,
        apellido: null,
      },
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
      if (!this.validarEntradas()) {
        return;
      }

      const beca = {
        nombre: this.nuevoNombre,
        apellido: this.nuevoApellido,
        cedula: this.nuevaCedula,
        provincia: this.nuevaProvincia,
        instituto: this.nuevoInstituto,
      };

      this.lista.push(beca);
      this.mostrar = true;

      // Limpiar campos
      this.nuevoNombre = "";
      this.nuevoApellido = "";
      this.nuevaCedula = "";
      this.nuevaProvincia = "";
      this.nuevoInstituto = "";

      this.mensajeFinal = "Usuario guardado con éxito";

      setTimeout(() => {
        this.mostrar = false;
      }, 1500);

      this.limpiarMensajes();
    },
    validarEntradas() {
      this.mensaje.nombre = null;
      this.mensaje.apellido = null;

      let valido = true;

      if (!this.nuevoNombre || !this.nuevoNombre.trim()) {
        this.mensaje.nombre = "Nombre es obligatorio";
        valido = false;
      }

      if (!this.nuevoApellido || !this.nuevoApellido.trim()) {
        this.mensaje.apellido = "Apellido es obligatorio";
        valido = false;
      }

      return valido;
    },
    limpiarMensajes() {
      this.mensaje.nombre = null;
      this.mensaje.apellido = null;
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
