import axios from "axios"

export async function signUp(data){
    const response = await axios.post('https://sports4us-api.herokuapp.com/auth/signup', data)
    //console.log(response.data)
    return response.data
}

export async function signIn(data){
    const response = await axios.post('https://sports4us-api.herokuapp.com/auth/signin', data)
   // console.log(response.data)
    return response.data
}