import axios from "axios";

const clienteAxios = axios.create({
  baseURL: "http://localhost:8000/api/",
  //baseURL: "http://creartesalud.com/api/",
});

export default clienteAxios;