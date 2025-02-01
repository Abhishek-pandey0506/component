import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isAuthenticate: false,
    token: null,
    user: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuthenticate = true;
            state.token = action.payload.token;
            state.user = action.payload
        },
        logout: (state) => {
            state.isAuthenticate = false;
            state.token = null;
            state.user = null;
        },
    },
})


export const { logout, login } = authSlice.actions

export const getIsAuthenticate = (state) => state.auth.isAuthenticate
export const getToken = (state) => state.auth.token
export const getUser = (state) => state.auth.user

export default authSlice.reducer