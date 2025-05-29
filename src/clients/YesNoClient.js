// src/clients/YesNoClient.js

import axios from "axios";

const consultarRespuesta = async () => {
  const respuesta = await axios.get("https://yesno.wtf/api");
  return respuesta.data;
};

// Función fachada
export const consultarRespuestaFachada = async () => {
  return await consultarRespuesta();
};
