import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials : true,
    headers : {
        'API-KEY' : '19c71977-6a82-455a-80b3-879aa6b313e9'
    }
})

export const API = {
    getUsers(page){
       return instance.get(`/users?count=25&page=${page}`)
    },
    logIn(email,password){
        return instance.post(`/auth/login`,{email,password})
    },
    getProfile(userId){
        return instance.get(`/profile/${userId}`)
    },
    putPhoto(file){

        const formData = new FormData()
        formData.append('file', file)
        return instance.put('/profile/photo',formData)
    }
}

