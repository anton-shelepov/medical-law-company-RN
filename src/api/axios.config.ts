import axios from "axios";
import { getFromSecureStore } from "../scripts/secureStore";

const client = axios.create({
    baseURL: "http://192.168.0.51:3001/",
    withCredentials: true,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authentication': `Bearer ${getFromSecureStore('access_token').then(accessToken => accessToken)}` // FIXME: Корректно передать токен (сейчас [object Object], причина: асинхронный вызов)
    },
})

export default client;