import axios from "axios";
import { NEXT_PUBLIC_BACKEND_URL } from "@/app/_config/ApiConfig";
export const agentService = {
    getInvitationsList,
    invitationAction,
    getAssociatedAgenciesList,
    leaveAgency
};
const API =  NEXT_PUBLIC_BACKEND_URL;
async function getInvitationsList(token, data) {
    return await axios.get(`${API}/moderator/invitationsReceived?page=${data?.page}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      params: data
    }
    );
  }
async function getAssociatedAgenciesList(token, data) {
    return await axios.get(`${API}/moderator/getAssociatedAgencies?page=${data?.page}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      params: data
    }
    );
  }

  async function invitationAction(token,data) {
    return await axios.post(
      `${API}/moderator/invitationAction`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      }
    );
  }  
    
    async function leaveAgency(token,data) {
    return await axios.post(
      `${API}/moderator/leaveAgency`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      }
    );
  }  
