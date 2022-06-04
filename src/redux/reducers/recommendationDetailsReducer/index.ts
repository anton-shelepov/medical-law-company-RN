import { RECOMMENDATION_DETAILS_FETCH_FAILURE, RECOMMENDATION_DETAILS_FETCH_REQUEST, RECOMMENDATION_DETAILS_FETCH_SUCCESS } from "../../../constants/actionTypes";
import { IRecommendationDetailsState, RecommendationDetailsActions } from "./types.d";

const initialState: IRecommendationDetailsState = {
    data: null,
    error: null,
    isLoading: false,
}

const recommendationDetailsReducer = (
    state = initialState,
    action: RecommendationDetailsActions
): IRecommendationDetailsState => {

    switch (action.type) {

        case RECOMMENDATION_DETAILS_FETCH_REQUEST:
            return {
                ...state,
                error: null,
                isLoading: true,
            }

        case RECOMMENDATION_DETAILS_FETCH_SUCCESS:
            return {
                ...state,
                error: null,
                data: action.payload,
                isLoading: false
            }

        case RECOMMENDATION_DETAILS_FETCH_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }


        default:
            return state
    }
}

export default recommendationDetailsReducer