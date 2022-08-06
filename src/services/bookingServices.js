import sports4usAPI from "../config/api";
// view full list of full list of bookings 
export async function getBookings(){
    const response = await sports4usAPI.get('/bookings')
    return response.data     
}
// view full list of of bookings for logged in user = Login required
export async function getUserBookings(){
    const response = await sports4usAPI.get('/bookings/user')
    return response.data    
}

// create a Booking => Member Login required
// Just provide an object containing activity_id. For example => {activity_id: 40}
//User Id will be obtained from currentuser in the backend.

export async function createBooking(data){
    const response = await sports4usAPI.post('/bookings', data)
    return response.data
}

// delete a Booking => Admin Login or the Booking member login required
//need to provide Booking Id 
export async function deleteBooking(id){
    const response = await sports4usAPI.delete(`/bookings/${id}`)
return response.data
}