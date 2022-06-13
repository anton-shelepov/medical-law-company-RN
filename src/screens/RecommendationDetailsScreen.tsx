import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { View } from "react-native";
import recommendationDetailsAPI from "../api/recommendationDetails.api";
import ActivityIndicatorView from "../components/ActivityIndicatorView";
import RecommendationCard from "../components/RecommendationCard";
import UserRecommendationResults from "../components/UserRecommendationResults";
import FilledButton from "../components/_common/buttons/FilledButton";
import CreateNewMessageForm from "../components/_common/forms/CreateNewMessageForm";
import { AppRoles, RecommendationStatuses, TokenTypes } from "../constants/enums";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import useDecodedToken from "../hooks/useDecodedToken";
import useRole from "../hooks/useRole";
import { RootStackParamList } from "../navigators/RootStackNavigator";
import { recommendationDetailsFetchRequest } from "../redux/reducers/recommendationDetailsReducer/recommendationDetailsActions";


type ChatProps = NativeStackScreenProps<RootStackParamList, "RecommendationDetails">

const RecommendationDetailsScreen: React.FC<ChatProps> = ({ route: { params } }) => {

    const recommendationDetails = useAppSelector(state => state.recommendationDetails)
    const decodedAccessToken = useDecodedToken(TokenTypes.accessToken)
    const role = useRole()
    const userId = decodedAccessToken.sub

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(recommendationDetailsFetchRequest(userId, params.recommendationId))
    }, [])

    const onHandleResultCreate = async (data: { messageText: string }) => { // TODO: вынести логику по запросу и dispatch в redux saga и reducer
        await recommendationDetailsAPI.createRecommendationResult(
            { resultText: data.messageText },
            userId,
            params.recommendationId)
        dispatch(recommendationDetailsFetchRequest(userId, params.recommendationId))
    }

    const onHandleUpdateRecommendationStatusDone = async () => { // TODO: вынести логику по запросу и dispatch в redux saga и reducer
        const status = RecommendationStatuses.DONE;
        await recommendationDetailsAPI.updateRecommendationStatus(
            status,
            userId,
            params.recommendationId
        )
        dispatch(recommendationDetailsFetchRequest(userId, params.recommendationId))
    }

    if (recommendationDetails.data === null) {
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
                    isLoading={recommendationDetails.isLoading}
                    recommendationResultsData={recommendationDetails.data.results} />
            </View>

            {role === AppRoles.EMPLOYEE &&
                <View style={{ padding: 15 }}>
                    <FilledButton
                        onPress={onHandleUpdateRecommendationStatusDone}
                        title="Отметить рекомендацию выполненной"
                    />
                </View>
            }

            {role === AppRoles.USER &&
                <CreateNewMessageForm
                    textInputPlaceholder="Результат выполнения..."
                    withFilePickerButton={false}
                    onMessageSubmit={onHandleResultCreate}
                />
            }

        </>
    )
}

export default RecommendationDetailsScreen