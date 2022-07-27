import sports4usAPI from "../config/api";

export async function getUsers(){
    const response = await sports4usAPI.get('/users')
    return response.data
} 