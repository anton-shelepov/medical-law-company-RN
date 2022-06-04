import { AxiosResponse } from "axios";
import privateClient from "./privateClient.config";


const recommendationDetailsAPI = {

    async fetchRecommendationInfo(userId: number, recommendationId: number) {
        const response: AxiosResponse = await privateClient.get(
            `users/${userId}/recommendations/${recommendationId}`
        )
        return response.data;
    },

    async fetchRecommendationResults(userId: number, recommendationId: number) {
        const response: AxiosResponse = await privateClient.get(
            `users/${userId}/recommendations/${recommendationId}/results`
        )
        return response.data;
    },
}

export default recommendationDetailsAPI;