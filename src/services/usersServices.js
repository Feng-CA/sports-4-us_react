import sports4usAPI from "../config/api";

export async function getUsers(){
    const response = await sports4usAPI.get('/users')
    return response
} 

export async function getOrganiserUsers(id){
    const response = await sports4usAPI.get(`users/account/${id}`)
    return response
} 