import {AnyAction} from "redux";

const initialState = {
    isUserAuth: true
}

const authReducer = (state = initialState, action: AnyAction) => {
    switch (action) {
        default:
            return state
    }
}

export default authReducer