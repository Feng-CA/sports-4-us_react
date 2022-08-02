// information from the backend, URL

import axios from 'axios'

const sports4usAPI = axios.create({
    //baseURL: 'https://sports4us-api.herokuapp.com/'
    baseURL: 'http://localhost:4000/'
})

sports4usAPI.interceptors.request.use(req => {
    // send the token in the request
    const token = sessionStorage.getItem("token")
    // console.log(token)
    // Authorization -> Bearer token -> paste the token
    if (token) {
        req.headers["Authorization"] = `Bearer ${token}`
    }


    return req
})

export default sports4usAPI 