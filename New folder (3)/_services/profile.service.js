import axios from "axios";
import { NEXT_PUBLIC_BACKEND_URL } from "@/app/_config/ApiConfig";
export const profileService = {
  getProfile,
    updateProfile,
    becameAnAgent,
    getUserProfileScore
};
const API =  NEXT_PUBLIC_BACKEND_URL;

async function getProfile(token) {
  return await axios.get(
    `${API}/profile`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  );
}

async function getUserProfileScore(token) {
  return await axios.get(
    `${API}/profile/getUserProfileScore`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  );
}


async function updateProfile(token,data) {
  return await axios.patch(
    `${API}/profile`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
    }
  );
}

async function becameAnAgent(token) {
  return await axios.post(
    `${API}/profile/becameModerator`,null,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
    }
  );
}