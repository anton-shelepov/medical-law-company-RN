import { darkTheme, lightTheme } from "../../../common/styles/themes";
import {IThemeState, ThemeActions} from "./types";
import {SWITCH_THEME} from "../../../common/constants/actionTypes";

const initialState: IThemeState = {
    currentTheme: darkTheme
}

const themeReducer = (state: IThemeState = initialState, action: ThemeActions): IThemeState => {
    switch (action.type) {

        case SWITCH_THEME:
            return {
                ...state,
                currentTheme: action.theme
            }

        default:
            return state
    }
}

export default themeReducer