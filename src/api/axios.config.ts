import axios from "axios";



const client = axios.create({
    baseURL: "http://192.168.0.51:3001/",
    withCredentials: true,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
})

export default client;