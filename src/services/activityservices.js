import sports4usAPI from "../config/api";

export async function getActivities(){
    const response = await sports4usAPI.get('/activities')
    return response
}


