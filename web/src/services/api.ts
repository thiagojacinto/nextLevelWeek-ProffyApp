import axios from "axios";

const baseURL = "http://localhost:3333";

export const API = axios.create({
  baseURL,
});

export default API;
