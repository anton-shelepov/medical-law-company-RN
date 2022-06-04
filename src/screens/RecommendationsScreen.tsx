import React, { useEffect } from "react";
import RecommendationsTabView from "../components/RecommendationsTabView";
import { TokenTypes } from "../constants/enums";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import useDecodedToken from "../hooks/useAuthorizedUserId";
import { recommendationsFetchRequest } from "../redux/reducers/recommendationsReducer/recommendationsActions";

const RecommendationsScreen: React.FC = () => {

    const dispatch = useAppDispatch()

    const decodedAccessToken = useDecodedToken(TokenTypes.accessToken)

    useEffect(() => {
        dispatch(recommendationsFetchRequest(decodedAccessToken.sub))
    }, [])

    const recommendationsData = useAppSelector(state => state.recommendations.data)

    return (
        <RecommendationsTabView recommendations={recommendationsData} />
    )
}

export default RecommendationsScreen;