
import { GET_PROFILE, GET_USERS,LOGIN } from "./type";

export const getUserAC = (users) => ({type: GET_USERS, payload: users})

export const loginAC = (data) => ({type: LOGIN, payload: data});

export const profileAC = (data) => ({type: GET_PROFILE,payload:data })