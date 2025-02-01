import axios from "axios";
import { NEXT_PUBLIC_BACKEND_URL } from "@/app/_config/ApiConfig";
export const propertyService = {
    addProperty,
    updatePropertyAddress,
    updatePropertyGeneralDetails,
    updatePropertyRentDetails,
    updatePropertySellDetails,
    updatePropertyAmenity,
    getPropertyByIdentifier,
    updateProperty,
    updatePropertyPostStatus,
    deleteByIdentifier,
    restoreProperty
};
const API =  NEXT_PUBLIC_BACKEND_URL;
async function addProperty(token,data) {
    return await axios.post(
      `${API}/property/addProperty`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );
  }
  async function updatePropertyPostStatus(token,data) {
    return await axios.post(
      `${API}/property/updatePropertyPostStatus`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );
  }
  
  async function updateProperty(token,data) {
    return await axios.post(
      `${API}/property/updateProperty`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );
  }
  async function updatePropertyAddress(token,data) {
    return await axios.patch(
      `${API}/property/updatePropertyAddress`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );
  }
  async function updatePropertyGeneralDetails(token,data) {
    return await axios.patch(
      `${API}/property/updatePropertyGeneralDetails`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );
  }
  async function updatePropertyRentDetails(token,data) {
    return await axios.patch(
      `${API}/property/updatePropertyRentDetails`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );
  }
  async function updatePropertySellDetails(token,data) {
    return await axios.patch(
      `${API}/property/updatePropertySellDetails`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );
  }

  async function updatePropertyAmenity(token,data) {
    return await axios.patch(
      `${API}/property/updatePropertyAmenity`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );
  }

  async function getPropertyByIdentifier(token, data) {
    return await axios.get(`${API}/property/getPropertyByIdentifier`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      params: data
    });
  }

  
  async function deleteByIdentifier(token, data) {
    return await axios.get(`${API}/property/deleteByIdentifier`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      params: data
    });
  }

  async function restoreProperty(token, data) {
    return await axios.get(`${API}/property/restoreProperty`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      params: data
    });
  }