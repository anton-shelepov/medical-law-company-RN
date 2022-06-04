import axios from "axios";

const publicClient = axios.create()

publicClient.interceptors.request.use(
    async config => {
        config.headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
        config.baseURL = "http://192.168.0.51:3001/";
        config.withCredentials = true;

        return config
    },
    error => {
        Promise.reject(error)
    }
)

export default publicClient;