import {Action} from "redux";
import {ActionType} from "typesafe-actions";
import * as actions from "./themeActions";
import {SWITCH_THEME} from "../../../common/constants/actionTypes";

// Root reducer state

export interface IThemeState {
    currentTheme: Theme,
}

// Root reducer parts

export type Theme = {
    mode: "dark" | "light",
    BACKGROUND_COLOR: string,
    TEXT_COLOR: string,
    BUTTON_COLOR: string,
    BUTTON_TEXT_COLOR: string,
    TAB_BAR_BACKGROUND_COLOR: string,
    TAB_BAR_ICONS_COLOR: string,
    TAB_BAR_BORDER_TOP_COLOR: string,
    CARD_BACKGROUND_COLOR: string,
    CARD_BORDER_COLOR: string,
    IN_PROCESS_COLOR: string,
    DONE_COLOR: string,
}

// Actions

interface ISwitchTheme extends Action {
    type: typeof SWITCH_THEME
    theme: Theme
}

// Combine actions type

export type ThemeActions = ActionType<typeof actions>;
