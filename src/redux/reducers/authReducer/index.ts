import {AnyAction} from "redux";

const initialState = {
    isAuth: true
}

const authReducer = (state = initialState, action: AnyAction) => {
    switch (action) {
        default:
            return state
    }
}

export default authReducer