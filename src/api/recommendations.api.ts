import privateClient from "./privateClient.config";


const recommendationsAPI = {

    path: 'users/',

    async fetchAllUserRecommendations(userId: number) {
        return await privateClient.get(
            recommendationsAPI.path + userId + '/recommendations'
        )
    }
}

export default recommendationsAPI;