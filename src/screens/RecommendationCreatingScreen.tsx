import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import CreateRecommendationForm from "../components/_common/forms/CreateRecommendationForm";
import { useAppSelector } from "../hooks/useAppSelector";
import { RootStackParamList } from "../navigators/RootStackNavigator";

type RecommendationCreatingProps = NativeStackScreenProps<RootStackParamList, "RecommendationCreating">

const RecommendationCreatingScreen: React.FC<RecommendationCreatingProps> = ({ route: { params } }) => {

    const userData = useAppSelector(state => state.user.data)

    return (
        <CreateRecommendationForm
            group={userData.position}
            userId={params.userId}
        />
    )
}

export default RecommendationCreatingScreen;