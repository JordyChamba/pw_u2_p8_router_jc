import axios from "axios";

const obtenerEstudiantePorId = async (id) => {
  const respuesta = await axios.get(
    `http://localhost:8081/api/matricula/v1/estudiantes/${id}`
  );
  return respuesta.data;
};

export const obtenerEstudiantePorIdFachada = async (id) => {
  return await obtenerEstudiantePorId(id);
};
