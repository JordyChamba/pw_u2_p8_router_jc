<template>
  <PokemonImage :pokemonID="10" :mostrarImage="true" />
  <PokemonOption />
</template>

<script>
import PokemonImage from "@/components/PokemonImage.vue";
import PokemonOption from "@/components/PokemonOption.vue";
export default {
  components: {
    PokemonImage,
    PokemonOption,
  },
};
</script>

<style></style>
