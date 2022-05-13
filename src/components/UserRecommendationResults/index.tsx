import React from "react";
import { FlatList } from "react-native";
import { UserRecommendationResult } from "../../redux/reducers/recommendationDetailsReducer/types";
import UserRecommendationResultAccordion from "../UserRecommendationResultAccordion";


interface IProps {
    recommendationResultsData: UserRecommendationResult[]
}

const UserRecommendationResults: React.FC<IProps> = ({recommendationResultsData}) => {
    return (
        <FlatList
            data={recommendationResultsData}
            renderItem={({item}) => (
                <UserRecommendationResultAccordion {...item} />
            )}
        />
    )
}

export default UserRecommendationResults;