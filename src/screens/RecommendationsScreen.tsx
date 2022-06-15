import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import RecommendationsTabView from "../components/RecommendationsTabView";
import { TokenTypes } from "../constants/enums";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import useDecodedToken from "../hooks/useDecodedToken";
import { RootStackParamList } from "../navigators/RootStackNavigator";
import { recommendationsFetchRequest } from "../redux/reducers/recommendationsReducer/recommendationsActions";


type RecommendationsProps = NativeStackScreenProps<RootStackParamList, "RecommendationsReview">

const RecommendationsScreen: React.FC<RecommendationsProps> = ({ route: { params } }) => {

    const [userId, setUserId] = useState(null);

    const dispatch = useAppDispatch()
    const decodedAccessToken = useDecodedToken(TokenTypes.accessToken)
    const recommendations = useAppSelector(state => state.recommendations)

    useEffect(() => {

        if (params !== undefined) {
            setUserId(params.userId)
            dispatch(recommendationsFetchRequest(params.userId))
        } else {
            setUserId(decodedAccessToken.sub)
            dispatch(recommendationsFetchRequest(decodedAccessToken.sub))
        }
    }, [])

    return (
        <RecommendationsTabView
            userId={userId}
            isLoading={recommendations.isLoading}
            recommendations={recommendations.data}
        />
    )
}

export default RecommendationsScreen;