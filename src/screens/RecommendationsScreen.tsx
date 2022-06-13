import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import ActivityIndicatorView from "../components/ActivityIndicatorView";
import RecommendationsTabView from "../components/RecommendationsTabView";
import { TokenTypes } from "../constants/enums";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import useDecodedToken from "../hooks/useDecodedToken";
import { RootStackParamList } from "../navigators/RootStackNavigator";
import { recommendationsFetchRequest } from "../redux/reducers/recommendationsReducer/recommendationsActions";


type RecommendationsProps = NativeStackScreenProps<RootStackParamList, "RecommendationsReview">

const RecommendationsScreen: React.FC<RecommendationsProps> = ({ route: { params } }) => {

    const dispatch = useAppDispatch()
    const decodedAccessToken = useDecodedToken(TokenTypes.accessToken)
    const recommendations = useAppSelector(state => state.recommendations)

    useEffect(() => {
        if (params !== undefined)
            dispatch(recommendationsFetchRequest(params.userId))
        else
            dispatch(recommendationsFetchRequest(decodedAccessToken.sub))
    }, [])

    return (
        <RecommendationsTabView
            isLoading={recommendations.isLoading}
            recommendations={recommendations.data}
        />
    )
}

export default RecommendationsScreen;