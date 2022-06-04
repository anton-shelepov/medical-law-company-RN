import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { View } from "react-native";
import ActivityIndicatorView from "../components/ActivityIndicatorView";
import RecommendationCard from "../components/RecommendationCard";
import UserRecommendationResults from "../components/UserRecommendationResults";
import CreateNewMessageForm from "../components/_common/forms/CreateNewMessageForm";
import { TokenTypes } from "../constants/enums";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import useDecodedToken from "../hooks/useAuthorizedUserId";
import { RootStackParamList } from "../navigators/RootStackNavigator";
import { recommendationDetailsFetchRequest } from "../redux/reducers/recommendationDetailsReducer/recommendationDetailsActions";


type ChatProps = NativeStackScreenProps<RootStackParamList, "RecommendationDetails">

const RecommendationDetailsScreen: React.FC<ChatProps> = ({ route: { params } }) => {

    const recommendationDetails = useAppSelector(state => state.recommendationDetails)
    const decodedAccessToken = useDecodedToken(TokenTypes.accessToken)

    const dispatch = useAppDispatch()

    useEffect(() => {
        const userId = decodedAccessToken.sub
        dispatch(recommendationDetailsFetchRequest(userId, params.recommendationId))
    }, [])

    if (recommendationDetails.isLoading || recommendationDetails.data === null) {
        return (
            <ActivityIndicatorView />
        )
    }

    return (
        <>
            <View style={{ flex: 1 }}>
                <RecommendationCard
                    recommendationData={recommendationDetails.data.recommendationInfo}
                    touchable={false}
                    navigateOnClick={false}
                    textLines={0}
                />

                <UserRecommendationResults
                    recommendationResultsData={recommendationDetails.data.results} />
            </View>
            <CreateNewMessageForm textInputPlaceholder="Результат выполнения..." />
        </>
    )
}

export default RecommendationDetailsScreen