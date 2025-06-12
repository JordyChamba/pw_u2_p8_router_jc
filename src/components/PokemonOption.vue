<template>
  {{ mensaje2 }}
  <div class="options-container">
    <ul>
      <li
        @click="comunicarClick(pokemon.id)"
        v-for="pokemon in pokemons"
        :key="pokemon.id"
      >
        {{ pokemon.nombre }}
      </li>
    </ul>
  </div>
</template>

<script>
import { obtenerOpcionesFachada } from "@/clients/PokemonAPI";
export default {
  data() {
    return {
      mensaje2: "mensaje2",
    };
  },

  props: {
    pokemons: {
      type: Array,
      required: true,
    },
  },

  methods: {
    async iniciarJuego() {
      const opciones = await obtenerOpcionesFachada(4);
      console.log(opciones);
    },
    comunicarClick(id) {
      console.log("click...");
      //desde cualquier parte del codigo, no necesariamente de un metodo
      //yo puso llamar a una funcion, conocida como emits
      //
      const objetoEnviado = {
        atributo1: id,
        atributo2: "Jordy",
        atributo2: true,
      };

      console.log(id);
      this.$emit("seleccionado", objetoEnviado);
    },
  },
  mounted() {
    this.iniciarJuego();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
}
li {
  background: white;
  border-radius: 5px;
  border: 1px solid blanchedalmond;
  cursor: pointer;
  margin-bottom: 10px;
  width: 250px;
}
.options-container {
  display: flex;
  justify-content: center;
  background: rgb(197, 226, 153);
}
li:hover {
  background: rgba(238, 168, 63, 0.4);
}
</style>
