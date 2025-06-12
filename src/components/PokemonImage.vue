<template>
  {{ mensaje1 }}
  <div class="image-container">
    <img class="ocultar" :src="ImagenFuente" alt="NO hay foto de pokemon" />
    <img v-if="mostrar" :src="ImagenFuente" alt="NO hay foto de pokemon" />
  </div>
</template>

<script>
export default {
  props: {
    pokemonID: {
      type: Number,
      required: true,
    },
    mostrarImage: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  data() {
    return {
      mensaje1: "mensaje1",
    };
  },
  computed: {
    ImagenFuente() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonID}.svg`;
    },
  },
};
</script>

<style scoped>
img {
  height: 200px;
  position: absolute;
  right: 42%;
}

.ocultar {
  filter: brightness(0);
}
.image-container {
  height: 200px;
}
</style>
