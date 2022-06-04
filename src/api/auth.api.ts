import store from "../redux/store";
import privateClient from "./privateClient.config";
import publicClient from "./publicClient.config";


const authAPI = {

    path: 'auth',

    signin: async (data) => await publicClient.post(`${authAPI.path}/signin`, data),

    logout: async () => await privateClient.post(`${authAPI.path}/logout`),

    refresh: async () => await privateClient.post(`${authAPI.path}/refresh`)

}

export default authAPI;