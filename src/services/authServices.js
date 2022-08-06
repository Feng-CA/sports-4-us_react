// import axios from "axios"
import sports4usAPI from "../config/api"

export async function signUp(data){
    const response = await sports4usAPI.post('/auth/signup', data)
    return response.data
}

export async function signIn(data){
    const response = await sports4usAPI.post('/auth/signin', data)
    return response.data
}