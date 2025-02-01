import axios from "axios";
import { API_ROUTES } from "../config";
export const authService = {
  signIn,
  signUp,
};

async function signIn(data) {
  return await axios.post(`${API_ROUTES.LOGIN}`, data);
}
async function signUp(data) {
  return await axios.post(`${API_ROUTES.REGISTER}`, data);
}
