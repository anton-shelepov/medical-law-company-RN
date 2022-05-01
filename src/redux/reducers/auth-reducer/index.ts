import {AnyAction} from "redux";

const initialState = {
    isAuth: false
}

const authReducer = (state = initialState, action: AnyAction) => {
    switch (action) {
        default:
            return state
    }
}

export default authReducer