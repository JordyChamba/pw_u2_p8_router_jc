<template>
  <div class="container">
    <div v-show="mostrar"><h1>{{ mensajeFinal }}</h1></div>
    <div v-show="error" style="color: red">
      <h2>{{ mensaje.error }}</h2>
      <span v-if="mensaje.final">{{ mensaje.error }}</span>
    </div>

    <label for="id_nombre">Nombre: </label>
    <input v-model="nuevoNombre" id="id_nombre" type="text" />
    <span v-if="mensaje.nombre">{{ mensaje.nombre }}</span>
    <!-- Nuevo codigo-->

    <label for="id_apellido">Apellido: </label>
    <input v-model="nuevoApellido" id="id_apellido" type="text" />
    <span v-if="mensaje.apellido">{{ mensaje.apellido }}</span>
    <!-- Nuevo codigo-->

    <label for="id_cedula">Cédula: </label>
    <input v-model="nuevaCedula" id="id_cedula" type="text" />

    <label for="id_provincia">Provincia: </label>
    <input v-model="nuevaProvincia" id="id_provincia" type="text" />

    <label for="id_instituto">Instituto: </label>
    <input v-model="nuevoInstituto" id="id_instituto" type="text" />

    <button @click="agregarBecario()">Agregar Becario</button>

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

    //valiacion de formulario
    //presentacion de mensajes
    //manejo de errores

    return {
      mostrar: false,
      nombreMensaje: false, //codigo nuevo
      apellidoMensaje: false, //codigo nuevo
      mensaje: {
        nombre: null,
        apellido: null,
        final:null,
      },

      error: false,
      mensajeError: "",
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

      // Validaciones
      if (
        !this.nuevoNombre ||
        !this.nuevoApellido ||
        !this.nuevaCedula ||
        !this.nuevaProvincia ||
        !this.nuevoInstituto
      ) {
        this.mensajeError = "Todos los campos son obligatorios.";
        this.error = true;
        return;
      }

      const cedulaValida = /^[0-9]{10}$/.test(this.nuevaCedula);
      if (!cedulaValida) {
        this.mensajeError = "La cédula debe tener 10 dígitos numéricos.";
        this.error = true;
        return;
      }

      // Si pasa validaciones
      const beca = {
        nombre: this.nuevoNombre,
        apellido: this.nuevoApellido,
        cedula: this.nuevaCedula,
        provincia: this.nuevaProvincia,
        instituto: this.nuevoInstituto,
      };

      this.lista.push(beca);
      this.mostrar = true;
      this.error = false;

      // Limpiar campos
      this.nuevoNombre = "";
      this.nuevoApellido = "";
      this.nuevaCedula = "";
      this.nuevaProvincia = "";
      this.nuevoInstituto = "";

      setTimeout(() => {
        this.mostrar = false;
      }, 1500);
      this.mensajeFinal="UsuarioGuardado";
      this.limpiarPagina();
    },
    validarEntradas() {
      try {
        let validar = this.mensaje.apellido.primero;
        let numero = 2;

        if (this.nuevoNombre === null) {
          this.mensaje.nombre = "Nombre es obligatorio";
          numero--;
        }

        if (this.nuevoApellido === null) {
          this.mensaje.apellido = "Apellido es obligatorio";
          numero--;
        }
        if (numero === 2) {
          return true;
        } else {
          return false;
        }
      } catch (error) {
        console.error("Error! Ha ocurrido un problema");
        console.error(error);
        this.mensajeFinal="Ha ocurrido un error en el sistema";
      }
    },
    limpiarPagina() {
      this.nombre = null;
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
