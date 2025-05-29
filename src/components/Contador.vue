<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <!-- <p>{{ 10 }}</p>
            <p>{{ 1 + 1 }}</p> -->
    <p>{{ this.numero }}<sup> 2 </sup> = {{ calCuadrado }}</p>
    <div>
      <button v-on:click="incrementar()">+1</button>
      <button @:click="decrementar()">-1</button>
    </div>

    <!--
    - Note: incluye proiedades reactivas y ..?
    - propiedades computadas: son una especie de metodo que se ejecuta una unica vez y cada vez que se llama
    ,toma el metodo y se guarda en cache. no puede tener el '()' como tiene un metodo ejempleo: 
    metodod: calCuadrado(), computed: calCuadrado
    - Directivas: Son funcionalidades que agregan comportamiento a mi pagina web, me permiten 
    gestionar eventos en mi pagina web y empiezan con 'b-' 
    - Desde el componente padre, yo voy a enviar a un nombre diferente
    para cada componenete 
    - props: son una forma de comunicar datos desde un componene padre al hijo, 
    funcionan como parametros personalizados, que permiten que un componene hijo reciba valores definidos
    por su componente padre
    -v-bind: es una directiva que se usa para enlazar dinámicamente propiedades de HTML a datos del componente. 
    En JavaScript puro no existe, pero en Vue.js, cuando usas v-bind:,
    shor point: son los dos puntos
    required (true): este props es obligatorio
    -->

    <!-- 
    <p>{{ activo}}</p>
    <p>{{ usuario.edad}}</p>
    <p>{{ arreglo}}</p>

    <p>{{ true ? 'Es Verdadero' : 'Es Falso' }}</p>
    <p>{{ false ? 'Es Verdadero' : 'Es Falso' }}</p>-->
  </div>
</template>

<script>
export default {
  /*Metodo 1 en props */ 
  /* props: ['title', 'value'], */
  /*Metodo 2 en props */
  props: {
    title: String,
    value: {
        type: Number,
        required: false,
        default: 100,
        validator(value) {
          return value>0;
        }
    },
     /*Tipos de declaraciones */
    p1:Boolean,
    p2:Array,
    p3:Object,
    p4:Function,
    p5:Date,
    p6:Symbol,
  },
  data() {
    return {
      numero: this.value,
      titulo: "Contador",
      activo: true,
      usuario: {
        nombre: "Jordy",
        edad: 25,
        profesion: "Estudiante",
      },
      arreglo: ["Azul"],
    };
  },
  methods: {
    calcularCuadrado() {
      console.log("Entro al método");
      return this.numero * this.numero;
    },
    incrementar() {
      this.numero++;
    },
    decrementar() {
      this.numero--;
    },
  },
  computed: {
    calCuadrado() {
      console.log("Entro a la propiedad computada");
      return this.numero * this.numero;
    },
  },
  created(){
    if(this.value>0){
      console.log("Es correcto!")
    }else {
      throw new Error("Error el valor no puede ser menor que cero");
    }
  },
};
</script>

<style>
h1 {
  color: rgb(8, 236, 217);
  background: rgb(106, 106, 221);
}

p {
  background: rgb(231, 168, 221);
}
</style>
