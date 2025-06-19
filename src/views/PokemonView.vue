<template>
  <h1>Selcciona el correcto</h1>
  <h1>{{ mensaje }}</h1>
  <PokemonImage
    v-if="pokemon"
    :pokemonID="pokemon.id"
    :mostrarImage="mostrar"
    ref="miHijo1"
  />
  <PokemonOption
    @seleccionado="recibioPadre($event)"
    :pokemons="vectorPokemon"
    ref="miHijo2"
  />
  <button @click="comunicarHijo()">Comunicar Hijo</button>
</template>

<script>
import PokemonImage from "@/components/PokemonImage.vue";
import PokemonOption from "@/components/PokemonOption.vue";
import {
  obtenerOpcionesFachada,
  obtenerAleatorioFachada,
} from "@/clients/PokemonAPI";

export default {
  data() {
    return {
      vectorPokemon: [],
      pokemon: null,
      mostrar: false,
      mensaje: null,
    };
  },
  components: {
    PokemonImage,
    PokemonOption,
  },
  methods: {
    async iniciarJuego() {
      const opciones = await obtenerOpcionesFachada(5);
      this.vectorPokemon = opciones;
      console.log(this.vectorPokemon);

      //elegir un pokemon de los 4
      let pokemonCorrecto = obtenerAleatorioFachada(
        0,
        this.vectorPokemon.length
      );
      this.pokemon = this.vectorPokemon[pokemonCorrecto];
      console.log(this.pokemon.nombre);
    },
    recibioPadre(id) {
      console.log("Mensaje recibido desde Hijo");
      console.log(id);
      this.mostrar = true;
      console.log(this.mostrar);
      this.validarRespuesta(id.atributo1);
    },
    validarRespuesta(opcionSeleccionado) {
      if (opcionSeleccionado === this.pokemon.id) {
        this.mensaje = "Correcto!";
      } else {
        this.mensaje = "Pediste: " + this.pokemon.nombre;
      }
    },
    comunicarHijo() {
      console.log(this.$refs.miHijo1.mensaje1);
      this.$refs.miHijo1.mensaje1 = "Nuevo mensaje 1";

      console.log(this.$refs.miHijo2.mensaje2);
      this.$refs.miHijo2.mensaje2 = "Nuevo mensaje 2";
    },
  },
  mounted() {
    this.iniciarJuego();
  },
};
</script>

<style></style>
