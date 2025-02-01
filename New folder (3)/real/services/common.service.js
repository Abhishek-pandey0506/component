import axios from 'axios';
import axiosInstance from './axiosInstance';
import { API_ROUTES } from '../config';

export const commonServices = {
  getLanguage,
};

async function getLanguage() {
  return await axiosInstance.get(`${API_ROUTES.LANGUAGE_LIST}`);
}
