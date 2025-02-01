import axios from "axios";
import { NEXT_PUBLIC_BACKEND_URL } from "@/app/_config/ApiConfig";
export const agencyService = {
    createAgency,
    updateAgency,
    getAgency,
    updateAgencyAddress,
    getActiveModeratorsList,
    getFindModeratorList,
    inviteModerator,
    getInvitedModeratorsList,
    addInvitedModeratorToAgency,
    updateAgencyModerator,
    deleteInvite,
    removeModeratorFromAgency
};
const API =  NEXT_PUBLIC_BACKEND_URL;

async function getAgency(token) {
    return await axios.get(
      `${API}/agency/granted/getProfile`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );
  }
async function createAgency(token,data) {
    return await axios.post(
      `${API}/agency/create`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      }
    );
  }

  async function updateAgency(token,data) {
    return await axios.patch(
      `${API}/agency/granted/updateProfile`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      }
    );
  }

  async function updateAgencyAddress(token,data) {
    return await axios.patch(
      `${API}/agency/granted/updateAgencyAddress`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      }
    );
  }
async function getActiveModeratorsList(token, data) {
  return await axios.get(`${API}/agency/granted/getAgencyModeratorsList?page=${data?.page}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    params: data
  }
  );
}

async function getFindModeratorList(token, data) {
  return await axios.get(`${API}/agency/granted/getModeratorList?page=${data?.page}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    params: data
  });
}

async function inviteModerator(token,data) {
    return await axios.post(
      `${API}/agency/granted/inviteModerator`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      }
    );
  }    
  async function getInvitedModeratorsList(token, data) {
  return await axios.get(`${API}/agency/granted/invitedModeratorsList?page=${data?.page}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    params: data
  }
  );
}
  
async function addInvitedModeratorToAgency(token,data) {
    return await axios.post(
      `${API}/agency/granted/addInvitedModeratorToAgency`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      }
    );
  }  

  async function updateAgencyModerator(token,data) {
    return await axios.post(
      `${API}/agency/granted/updateModeratorActions`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      }
    );
  }  

     async function deleteInvite(token,data) {
    return await axios.post(
      `${API}/agency/granted/deleteInvite`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      }
    );
  }  
     async function removeModeratorFromAgency(token,data) {
    return await axios.post(
      `${API}/agency/granted/removeModeratorFromAgency`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      }
    );
  }  

  
