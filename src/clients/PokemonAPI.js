import axios from "axios";

const consumirPokemon = async (id) => {
  const respuesta = axios
    .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((rpt) => rpt.data);
  return respuesta;
};

//nuevo
const obtenerObjetoPokemon = async (numero) => {
  const data = await consumirPokemon(numero);
  console.log(data.name);
  const pokemon = {
    nombre: data.name,
    id: data.id,
  };
  return pokemon;
};

//nuevo
const obtenerArreglo = (longuitud) => {
  const vector = [];
  for (let i = 0; i < longuitud; i++) {
    vector[i] = obtenerAleatorio(1, 600);
  }
  return vector;
};

function obtenerAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const obtenerArregloPokemon = async (obtenerArreglo) => {
  const vector = [];
  for (let numero of obtenerArreglo) {
    let objetoPokemon = await obtenerObjetoPokemon(numero);
    vector.push(objetoPokemon);
  }
  return vector;
};

const obtenerOpciones = async (longuitud) => {
  const vector = obtenerArreglo(longuitud);
  const vectorObjeto = await obtenerArregloPokemon(vector);
  return vectorObjeto;
};

export const obtenerOpcionesFachada = async (longuitud) => {
  return await obtenerOpciones(longuitud);
};

export function obtenerAleatorioFachada(min, max) {
  return obtenerAleatorio(min, max);
}
