import store from "../redux/store";
import privateClient from "./axios.config";


const authAPI = {

    path: 'auth',

    signin: async (data) => await privateClient.post(`${authAPI.path}/signin`, data),

    logout: async () => await privateClient.post(`${authAPI.path}/logout`),

    refresh: async () => await privateClient.post(`${authAPI.path}/refresh`)

}

export default authAPI;