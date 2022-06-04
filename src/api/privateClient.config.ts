import axios, { AxiosError, AxiosResponse } from "axios";
import { TokenTypes } from "../constants/enums";
import { getFromSecureStore, removeFromSecureStore } from "../utils/secureStore/secureStore";


const privateClient = axios.create()

privateClient.interceptors.request.use(
    async config => {
        const accessToken = await getFromSecureStore(TokenTypes.accessToken)
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
    (response: AxiosResponse) => { console.log(response); return response },

    // If response have a error
    async function (error: AxiosError) { // TODO: Сделать обновление недействительного токена доступа
        const originalRequest = error.config

        const isRefreshRequestFailed = error.response.status === 401 && originalRequest.url.includes('auth/refresh')

        // If not authorized (invalid access token)
        if (!isRefreshRequestFailed) {
            const refreshToken = await getFromSecureStore(TokenTypes.refreshToken)
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
                removeFromSecureStore(TokenTypes.accessToken),
                removeFromSecureStore(TokenTypes.refreshToken)
            ])
        }

        return Promise.reject(error);
    }
);

export default privateClient;