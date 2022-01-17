import axios from "axios";

const clienteAxios = axios.create({
  baseURL: "http://66.97.46.222/api/",
  //baseURL: "http://www.creartesalud.com/api/",
  //baseURL: "http://localhost:8000/api/"
});

export default clienteAxios;