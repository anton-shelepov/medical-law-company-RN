import React, { useEffect } from "react";
import RecommendationsTabView from "../components/RecommendationsTabView";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { recommendationsFetchRequest } from "../redux/reducers/recommendationsReducer/recommendationsActions";


const RecommendationsScreen: React.FC = () => {

    const dispatch = useAppDispatch()

    const user = useAppSelector(state => state.user)

    useEffect(() => {
        // dispatch(recommendationsFetchRequest())
    }, [])

    const recommendationsData = useAppSelector(state => state.recommendations.data)

    return (
        <RecommendationsTabView recommendations={recommendationsData} />
    )
}

export default RecommendationsScreen;