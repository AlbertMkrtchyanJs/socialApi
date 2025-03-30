import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0'
})

export const API = {
    getUsers(page){
       return instance.get(`/users?count=25&page=${page}`)
    },
    logIn(email,password){
        return instance.post(`/auth/login`,{email,password})
    }
}

