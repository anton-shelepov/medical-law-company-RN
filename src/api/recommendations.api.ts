import privateClient from "./privateClient.config";


const recommendationsAPI = {

    path: 'users/',

    async fetchAllUserRecommendations(userId: number) {
        await privateClient.get(this.path + userId + '/recommendations')
    }

}

export default recommendationsAPI;