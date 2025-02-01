import axios from "axios";
import { API } from "../helper/config";


export const authService = {
    SignIn,
    SignUp
}


export async function SignIn(data) {
    return await axios.post(`${API.BASE_URL}signIn`, data,
        { headers: { 'Content-Type': 'multipart/form-data' } }
    );
}

export async function SignUp(data) {
    return await axios.post(`${API.BASE_URL}sign-up`, data,
        { headers: { 'Content-Type': 'multipart/form-data' } }
    );
}