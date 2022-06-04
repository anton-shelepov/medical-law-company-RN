import axios, { AxiosError, AxiosResponse } from "axios";
import { errorTypes } from "../constants/enums";
import { getFromSecureStore, removeFromSecureStore, setInSecureStore } from "../utils/secureStore/secureStore";


const privateClient = axios.create()

privateClient.interceptors.request.use(
    async config => {
        const accessToken = await getFromSecureStore("access_token")
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
        const originalRequest = error.config

        const isRefreshRequestFailed = error.response.status === 401 && originalRequest.url.includes('auth/refresh')

        // If not authorized (invalid access token)
        if (!isRefreshRequestFailed) {
            const refreshToken = await getFromSecureStore('refresh_token')
            const tokens = await privateClient.post('auth/refresh', undefined, {
                headers: {
                    'Authorization': `Bearer ${refreshToken}`,
                },
            })
            console.log(tokens)
            // await Promise.all([setInSecureStore(tokens), setInSecureStore])
            // axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
            // return privateClient(originalRequest);
        }

        // If refresh request was failed (invalid refresh token)
        if (isRefreshRequestFailed) {
            await Promise.all([
                removeFromSecureStore('access_token'),
                removeFromSecureStore('refresh_token')
            ])
        }

        return Promise.reject(error);
    }
);

export default privateClient;

// if (error.response.status === 403 && originalRequest.url.includes('signin')) {
        //     return Promise.reject({
        //         type: errorTypes.AUTH,
        //         message: "Неверный номер телефона или пароль"
        //     });
        // }