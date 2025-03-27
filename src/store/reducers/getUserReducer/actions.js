import { GET_USERS } from "./type";

export const getUserAC = (users) => ({type: GET_USERS, payload: users})