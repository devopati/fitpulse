import axios from "axios";
import { BACKEND_URL } from "../constants/backend-url";

export const apiAbortController = new AbortController();

const api = axios.create({
  baseURL: BACKEND_URL,
  signal: apiAbortController.signal,
});

export default api;
