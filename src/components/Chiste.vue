<template>
  <div class="container">
    <img v-if="imagen" :src="imagen" alt="No se pudo cargar" />

    <div class="pregunta-container">
      <input
        v-model="pregunta"
        type="text"
        placeholder="Escribe (michi) para ver un gato"
      />
      <!-- <p>(michi)</p>-->

      <div v-if="esValida" class="agregar-container">
        <h2>{{ pregunta }}</h2>
        <h1>¡Aquí tienes un gato aleatorio!</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { obtenerGatoFachada } from "@/clients/CatClient.js";

export default {
  data() {
    return {
      pregunta: null,
      respuesta: null,
      imagen: null,
      esValida: false,
    };
  },
  watch: {
    pregunta(value, oldValue) {
      this.esValida = false;
      if (value.includes("michi")) {
        this.esValida = true;
        this.consumirApi();
      }
    },
  },
  methods: {
    async consumirApi() {
      this.respuesta = "Buscando un gato...";
      const resp = await obtenerGatoFachada();
      this.imagen = resp.url;
      this.respuesta = "";
    },
  },
};
</script>

<style scoped>
.pregunta-container {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  background: rgb(124, 240, 159);
}

input {
  border-radius: 10px;
  font-size: 25px;
  width: 500px;
  text-align: center;
}

p {
  font-size: 50px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

.agregar-container h2,
h1 {
  font-size: 30px;
  color: red;
}
</style>
