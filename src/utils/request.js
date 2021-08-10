import axios from "axios";
import { BASE_URL } from "./tools";

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

export const get = (url, params) => instance.get(url, { params });
export const post = (url, data) => instance.post(url, data);
