import { AxiosResponse } from "axios";
import { RecommendationStatuses } from "../constants/enums";
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

    async createRecommendationResult(data: { resultText: string }, userId: number, recommendationId: number) {
        return await privateClient.post(
            `users/${userId}/recommendations/${recommendationId}/results`,
            data
        )
    },

    async updateRecommendationStatus(status: RecommendationStatuses, userId: number, recommendationId: number) {
        return await privateClient.patch(
            `users/${userId}/recommendations/${recommendationId}`,
            { status },
        )
    }
}

export default recommendationDetailsAPI;