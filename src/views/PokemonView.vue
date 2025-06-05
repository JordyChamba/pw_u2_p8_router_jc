<template>
  <PokemonImage :pokemonID="69" :mostrarImage="true" />
  <PokemonOption :pokemons="vectorPokemon" />
</template>

<script>
import PokemonImage from "@/components/PokemonImage.vue";
import PokemonOption from "@/components/PokemonOption.vue";
import { obtenerOpcionesFachada } from "@/clients/PokemonAPI";
export default {
  data() {
    return {
    vectorPokemon: [],
    }

  },
  components: {
    PokemonImage,
    PokemonOption,
  },
  methods: {
    async iniciarJuego() {
      const opciones = await obtenerOpcionesFachada(4);
      this.vectorPokemon=opciones;
      console.log(this.vectorPokemon);
    },
  },
  mounted() {
    this.iniciarJuego();
  },
};
</script>

<style></style>
