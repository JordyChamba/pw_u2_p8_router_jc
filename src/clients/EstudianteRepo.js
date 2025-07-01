import axios from "axios";

const consultarRespuesta = async () => {
  const respuesta = await axios.get(
    "http://localhost:8081/api/matricula/v1/estudiantes"
  );
  return respuesta.data;
};

// Función fachada
export const consultarRespuestaFachada = async () => {
  return await consultarRespuesta();
};
