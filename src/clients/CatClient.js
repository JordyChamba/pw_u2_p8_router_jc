// src/clients/CatClient.js
import axios from "axios";

const obtenerGato = async () => {
  const respuesta = await axios.get(
    "https://api.thecatapi.com/v1/images/search"
  );
  return respuesta.data[0]; // Es un array con un solo objeto
};

// Función fachada
export const obtenerGatoFachada = async () => {
  return await obtenerGato();
};
