import sports4usAPI from "../config/api";

export async function getProfiles(){
    const response = await sports4usAPI.get('/profiles') 
    return response
}
