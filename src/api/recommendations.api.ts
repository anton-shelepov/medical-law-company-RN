import privateClient from "./privateClient.config";


const recommendationsAPI = {

    path: 'users/',

    async fetchAllUserRecommendations(userId: number) {
        return await privateClient.get(
            recommendationsAPI.path + userId + '/recommendations'
        )
    },

    async createNewRecommendation(userId: number, data) {
        return await privateClient.post(
            recommendationsAPI.path + userId + '/recommendations',
            data
        )
    }
}

export default recommendationsAPI;