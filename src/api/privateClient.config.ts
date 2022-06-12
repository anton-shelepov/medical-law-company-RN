import axios, { AxiosError, AxiosResponse } from "axios";
import { TokenTypes } from "../constants/enums";
import { Tokens } from "../redux/reducers/userReducer/types";
import { logoutSuccess } from "../redux/reducers/userReducer/userActions";
import store from "../redux/store";
import { getFromSecureStore, removeFromSecureStore, setInSecureStore } from "../utils/secureStore/secureStore";


const privateClient = axios.create()

privateClient.interceptors.request.use(
    async config => {
        const accessToken = await getFromSecureStore(TokenTypes.accessToken)
        config.headers.Authorization = `Bearer ${accessToken}`;
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
    (response: AxiosResponse) => {
        console.log('response', response);
        return response
    },

    // If response have a error
    async function (error: AxiosError) { // TODO: Сделать обновление недействительного токена доступа
        console.log('error', error);
        const originalRequest = error.config

        const isRefreshAttempted = originalRequest.url.includes('auth/refresh')

        // If not authorized (invalid access token)
        if (error.response.status === 401 && !isRefreshAttempted) {

            const refreshToken = await getFromSecureStore(TokenTypes.refreshToken)
            const tokens: Tokens = await privateClient.post('auth/refresh', undefined, {
                headers: {
                    'Authorization': `Bearer ${refreshToken}`
                }
            })

            await Promise.all([
                setInSecureStore(TokenTypes.accessToken, tokens.accessToken),
                setInSecureStore(TokenTypes.refreshToken, tokens.refreshToken)])
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + tokens.accessToken;


            return privateClient(originalRequest);
        }

        // If refresh request was failed (invalid refresh token)
        if (error.response.status === 401 && isRefreshAttempted) {
            await Promise.all([
                removeFromSecureStore(TokenTypes.accessToken),
                removeFromSecureStore(TokenTypes.refreshToken)
            ])
            const { dispatch } = store;
            dispatch(logoutSuccess())
        }

        return Promise.reject(error);
    }
);

export default privateClient;