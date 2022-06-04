import { RECOMMENDATIONS_FETCH_FAILURE, RECOMMENDATIONS_FETCH_REQUEST, RECOMMENDATIONS_FETCH_SUCCESS } from "../../../constants/actionTypes";
import { IRecommendationsState, RecommendationsActions } from "./types";

const initialState: IRecommendationsState = {
    data: [],
    error: null,
    isLoading: false,
}

const recommendationsReducer = (state = initialState, action: RecommendationsActions) => {
    switch (action.type) {

        case RECOMMENDATIONS_FETCH_REQUEST:
            return {
                ...state,
                error: null,
                isLoading: true,
            }

        case RECOMMENDATIONS_FETCH_SUCCESS:
            return {
                ...state,
                data: action.payload,
                error: null,
                isLoading: false,
            }

        case RECOMMENDATIONS_FETCH_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false,
            }


        default:
            return state
    }
}

export default recommendationsReducer