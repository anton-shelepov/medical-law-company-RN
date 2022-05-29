import { darkTheme, lightTheme } from "../../../styles/themes";
import {IThemeState, ThemeActions} from "./types";
import {SWITCH_THEME} from "../../../constants/actionTypes";

const initialState: IThemeState = {
    currentTheme: darkTheme
}

const themeReducer = (state = initialState, action: ThemeActions): IThemeState => {
    switch (action.type) {

        case SWITCH_THEME:
            return {
                ...state,
                currentTheme: action.payload
            }

        default:
            return state
    }
}

export default themeReducer