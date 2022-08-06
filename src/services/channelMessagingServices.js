import sports4usAPI from "../config/api"

export async function getChannelMessages(){
    const response = await sports4usAPI.get('/channelmessages')
    return response.data
}
export async function createChannelMessage(data){
    const response = await sports4usAPI.post('/channelmessages', data)
    return response.data
}   
