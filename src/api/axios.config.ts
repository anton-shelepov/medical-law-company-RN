import axios, { AxiosError, AxiosResponse } from "axios";
import { errorTypes } from "../constants/enums";
import store from "../redux/store";
import { getFromSecureStore } from "../utils/secureStore/secureStore";
import authAPI from "./auth.api";


const privateClient = axios.create()

privateClient.interceptors.request.use(
    async config => {
        console.log('request')
        const accessToken = store.getState().user.accessToken;
        config.headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        }
        config.baseURL = "http://192.168.0.51:3001/";
        config.withCredentials = true;

        return config
    },
    error => {
        Promise.reject(error)
    }
)

privateClient.interceptors.response.use(

    // Return response if there not any error
    (response: AxiosResponse) => { return response },

    // If response have a error
    async function (error: AxiosError) { // TODO: Сделать обновление недействительного токена доступа
        console.log(error)
        if (error.response.status === 403) {
            return Promise.reject(
                {
                    type: errorTypes.AUTH,
                    message: "Неверный номер телефона или пароль"
                });
        }
        return Promise.reject(error);
    }
);

export default privateClient;