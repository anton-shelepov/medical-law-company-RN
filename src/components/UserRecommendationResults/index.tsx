import React from "react";
import { FlatList } from "react-native";
import { UserRecommendationResult } from "../../redux/reducers/recommendationDetailsReducer/types";
import ActivityIndicatorView from "../ActivityIndicatorView";
import UserRecommendationResultAccordion from "../UserRecommendationResultAccordion";


interface IProps {
    recommendationResultsData: UserRecommendationResult[],
    isLoading: boolean,
}

const UserRecommendationResults: React.FC<IProps> = ({ recommendationResultsData, isLoading }) => {

    if (isLoading) {
        return <ActivityIndicatorView />
    }

    return (
        <FlatList
            data={recommendationResultsData}
            renderItem={({ item }) => (
                <UserRecommendationResultAccordion {...item} />
            )}
        />
    )
}

export default UserRecommendationResults;