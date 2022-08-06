import sports4usAPI from "../config/api";

//view all the profiles - have to be logged in 
export async function getProfiles(){
    const response = await sports4usAPI.get('/profiles')
    return response
}
//view your specific profile - have to be logged in 
export async function myProfile(){
    const response = await sports4usAPI.get('/profiles/user_id')
return response.data
}

//view your specific profile - have to be logged in 
export async function createProfile(data){
    const response = await sports4usAPI.post("/profiles",data)
return response.data
}


//view your specific profile - have to be logged in 
export async function getProfile(id){
    const response = await sports4usAPI.get(`/profiles/${id}`)
return response.data
}

//view your specific profile - have to be owner of profile or admin
export async function updateProfile(id,data){
    const response = await sports4usAPI.put(`/profiles/${id}`,data)
return response.data
}

//delete a specific profile - have to be admin
export async function deleteProfile(id){
    const response = await sports4usAPI.delete(`/profiles/${id}`)
return response.data
}