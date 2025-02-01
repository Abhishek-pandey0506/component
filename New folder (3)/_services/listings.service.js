import axios from "axios";
import { NEXT_PUBLIC_BACKEND_URL } from "@/app/_config/ApiConfig";
export const listingService = {
  getYourPropertyListings,
  getYourTrashedPropertyListings,
};
const API =  NEXT_PUBLIC_BACKEND_URL;

async function getYourPropertyListings(token, data) {
  return await axios.get(`${API}/listings/getYourListings?page=${data?.page}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    params: data,
  });
}
async function getYourTrashedPropertyListings(token, data) {
  return await axios.get(
    `${API}/listings/getYourTrashedListings?page=${data?.page}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      params: data,
    }
  );
}
