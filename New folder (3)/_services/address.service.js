import axios from "axios";
import { NEXT_PUBLIC_BACKEND_URL } from "@/app/_config/ApiConfig";
export const addressService = {
    updateUserProfileAddress
};
const API =  NEXT_PUBLIC_BACKEND_URL;
async function updateUserProfileAddress(token,data) {
  return await axios.patch(
    `${API}/profile/updateAddress`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
    }
  );
}