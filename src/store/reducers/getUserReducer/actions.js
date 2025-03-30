
import { GET_USERS,LOGIN } from "./type";

export const getUserAC = (users) => ({type: GET_USERS, payload: users})

export const loginAC = (data) => ({type: LOGIN, payload: data})