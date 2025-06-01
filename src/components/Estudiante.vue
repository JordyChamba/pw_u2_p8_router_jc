<template>
  <div class="container">
    <label for="id_nombre">Nombre: </label>
    <!-- v-model: Vincular una entrada a una propiedad reactiva  -->
    <!-- Usa el patrón  de diseño modelo vista controlador -->
    <!--
     Vista: Parte visual,
     Modelo: (Propiedad reactiva) Lo que viaja entre la vista y controlador,
     Controlador: El JS se encarga de modificar los valores
     -->
    <input v-model="nuevoNombre" id="id_nombre" type="text" />
    <span v-if="mensaje.nombre">{{ mensaje.nombre }}</span>

    <label for="id_apellido">Apellido: </label>
    <input v-model="nuevoApellido" id="id_apellido" type="text" />
    <span v-if="mensaje.apellido">{{ mensaje.apellido }}</span>

    <label for="id_edad">Edad: </label>
    <input v-model="nuevaEdad" id="id_edad" type="number" />

    <label for="id_matriculado">Matriculado: </label>
    <input v-model="estaMatriculado" id="id_matriculado" type="checkbox" />

    <label for="id_promedio">Promedio Académico: </label>
    <input v-model="nuevoPromedioAcademico" id="id_promedio" type="number" />

    <button v-on:click="agregarEstudiante()">Agregar</button>

    <ul>
      <!-- v-for Directiva para y graficar componentes a partir de un arreglo o una lista -->
      <!-- <li v-for="estu in lista" :key="estu.nombre">
        Nombre: {{ estu.nombre }} - Apellido: {{ estu.apellido }}
      </li> -->

      <!-- Con desestructuración de objetos -->
      <li
        v-for="{
          nombre,
          apellido,
          edad,
          matriculado,
          promedioAcademico,
        } in lista"
        :key="nombre"
      >
        Nombre: {{ nombre }} - Apellido: {{ apellido }} - Edad: {{ edad }} -
        Matriculado: {{ matriculado ? "Sí" : "No" }} - Promedio Académico:
        {{ promedioAcademico }}
      </li>
    </ul>
    <Button @click="obtenerPathVariable()">Path Variable</Button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nuevoNombre: null,
      nuevoApellido: null,
      nuevaEdad: 22,
      estaMatriculado: false,
      nuevoPromedioAcademico: 16.0,
      lista: [
        {
          nombre: "Kevin",
          apellido: "Andrade",
          edad: 22,
          matriculado: false,
          promedioAcademico: 16.86,
        },
        {
          nombre: "Daniel",
          apellido: "Vera",
          edad: 23,
          matriculado: true,
          promedioAcademico: 16.65,
        },
        {
          nombre: "Pedro",
          apellido: "Sanchez",
          edad: 26,
          matriculado: false,
          promedioAcademico: 15.0,
        },
        {
          nombre: "Jorge",
          apellido: "Teran",
          edad: 25,
          matriculado: false,
          promedioAcademico: 17.2,
        },
        {
          nombre: "Carlos",
          apellido: "Castillo",
          edad: 23,
          matriculado: true,
          promedioAcademico: 15.12,
        },
        {
          nombre: "Viviana",
          apellido: "Lopez",
          edad: 24,
          matriculado: false,
          promedioAcademico: 14.23,
        },
      ],
      mensaje: {
        nombre: null,
        apellido: null,
      },
    };
  },
  methods: {
    agregarEstudiante() {
      if (this.validarEntradas()) {
        const nuevoEst = {
          nombre: this.nuevoNombre,
          apellido: this.nuevoApellido,
          edad: this.nuevaEdad,
          matriculado: this.estaMatriculado,
          promedioAcademico: this.nuevoPromedioAcademico,
        };
        //   this.lista.unshift(nuevoEst);
        this.lista.push(nuevoEst);
      }
    },
    obtenerPathVariable() {
      //Ciclo de vida del componente

      const cedula = this.$route.params.cedula;
      console.log("CEDULA: ", cedula);

      const anio = this.$route.query.anio;
      console.log("Año: ", anio);
      const mes = this.$route.query.mes;
      console.log("Mes: ", mes);
    },
    validarEntradas() {
      if (this.nuevoNombre === null) {
        this.mensaje.nombre = "Nombre es obligatorio";
        return false;
      }

      if (this.nuevoApellido === null) {
        this.mensaje.apellido = "Apellido es obligatorio";
        return false;
      }

      return true;
    },
  },

  beforeCreate() {
    console.log("before Create");
  },
  created() {
    console.log("Cuando se crea el componente");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    const cedula = this.$route.params.cedula;
    console.log("CEDULA: ", cedula);

    const anio = this.$route.query.anio;
    console.log("Año: ", anio);
    const mes = this.$route.query.mes;
    console.log("Mes: ", mes);
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeUnmount() {
    console.log("beforeUnmount");
  },
  unmounted() {
    console.log("unmounted");
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
