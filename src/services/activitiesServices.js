import sports4usAPI from "../config/api";
// view full list of activities = no Login required
export async function getActivities(){
    const response = await sports4usAPI.get('/activities')
    return response     
}
// create an Activity => Admin Login required
export async function createActivity(data){
    const response = await sports4usAPI.post('/activities', data)
    return response.data
}

// update an Activity => Admin Login required
//need to provide activity Id and the data to update
export async function updateActivity(id,data){
    const response = await sports4usAPI.put(`/activities/${id}`, data)
    return response.data
}

// delete an Activity => Admin Login required
//need to provide activity Id 
export async function deleteActivity(id){
    const response = await sports4usAPI.delete(`/activities/${id}`)
    return response.data
}