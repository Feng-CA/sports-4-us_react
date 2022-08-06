import sports4usAPI from "../config/api"

export async function getSentMessages(){
    const response = await sports4usAPI.get('/sentmessages')
    return response.data
}
export async function mySentMessage(data){
    const response = await sports4usAPI.get('/sentmessages/sent', data)
    return response.data
}

export async function createSentMessage(data){
    const response = await sports4usAPI.post('/sentmessages', data)
    return response.data
} 

export async function deleteSentMessage(id){
    const response = await sports4usAPI.delete(`/sentmessages/${id}`)
    return response.data
}  