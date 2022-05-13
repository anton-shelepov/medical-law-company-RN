import React from "react";
import { View } from "react-native";
import CreateNewMessageForm from "../components/_common/forms/CreateNewMessageForm";
import RecommendationCard from "../components/RecommendationCard";
import UserRecommendationResults from "../components/UserRecommendationResults";
import { useAppSelector } from "../hooks/useAppSelector";

const RecommendationDetailsScreen: React.FC = () => {

    const recommendation = useAppSelector(state => state.recommendationDetails)

    return (
        <>
            <View style={{flex: 1}}>
                <RecommendationCard
                    recommendationData={recommendation.recommendationData}
                    touchable={false}
                    navigateOnClick={false}
                    textLines={0}
                />

                <UserRecommendationResults
                    recommendationResultsData={recommendation.userRecommendationResults} />
            </View>
            <CreateNewMessageForm textInputPlaceholder="Результат выполнения..." />
        </>
    )
}

export default RecommendationDetailsScreen