import axios from "axios";
import { NEXT_PUBLIC_BACKEND_URL } from "@/app/_config/ApiConfig";
import { NEXT_PUBLIC_BACKEND_GRANT_URL } from "@/app/_config/ApiConfig";
export const authService = {
  loginWithGoogle,
  verifyGrant,
  deleteGrant,
  register,
  login
};
const API =  NEXT_PUBLIC_BACKEND_URL;
async function verifyGrant(accesser) {
  return await axios.post(
    `${NEXT_PUBLIC_BACKEND_GRANT_URL}/verify-grant`,
    {},
    {
      headers: {
        Authorization: `Bearer ${accesser}`,
        'Content-Type': 'application/json',
      },
    }
  );
}
async function deleteGrant(accesser) {
  return await axios.post(
    `${NEXT_PUBLIC_BACKEND_GRANT_URL}/delete-token`,
    {},
    {
      headers: {
        Authorization: `Bearer ${accesser}`,
        'Content-Type': 'application/json',
      },
    }
  );
}

async function loginWithGoogle(data) {
  return await axios.post(
    `${API}/auth/login/google`,
    data
  );
}
  async function register(data) {
    return await axios.post(
      `${API}/auth/register`,
      data
    );
}

async function login(data) {
  return await axios.post(
    `${API}/auth/login/manual`,
    data
  );
}
