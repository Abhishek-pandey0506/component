import { NEXT_PUBLIC_BACKEND_URL } from "@/app/_config/ApiConfig";

export const openService = {
  getCategory,
  getAmenities
};
const API =  NEXT_PUBLIC_BACKEND_URL;
async function getCategory() {
  const response = await fetch(`${API}/open/category`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data;
}

async function getAmenities() {
  const response = await fetch(`${API}/open/amenities`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data;
}
