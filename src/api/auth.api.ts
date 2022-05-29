import client from "./axios.config";


const authAPI = {

    defaultPath: 'auth',

    signup(data) {
        return client.post(`${authAPI.defaultPath}/signup`, data)
            .then((response) => {
                return response.data
            })
            .catch((error) => {
                return error
            })
    },

    signin(data) {
        return client.post(`${authAPI.defaultPath}/signin`, data)
            .then(response => response)
            .catch((error) => { throw error })
    },

    async logout() {
        return client.post(`${authAPI.defaultPath}/logout`)
            .then(response => response)
            .catch((error) => { throw error })
    },

    async refresh() {

    }

}

export default authAPI;