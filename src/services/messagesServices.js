import sports4usAPI from "../config/api"

export async function getMessages(){
    const response = await sports4usAPI.get('/messages')
    return response.data
}
export async function myMessage(data){
    const response = await sports4usAPI.get('/messages', data)
    return response.data
}

export async function createMessage(data){
    const response = await sports4usAPI.post('/messages', data)
    return response.data
}   

export async function deleteMessage(id){
    const response = await sports4usAPI.delete(`/messages/${id}`)
    return response.data
}  