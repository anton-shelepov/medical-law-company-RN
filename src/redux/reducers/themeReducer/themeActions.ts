import {ISwitchTheme, Theme} from "./types";
import {SWITCH_THEME} from "../../../common/constants/actionTypes";

export const switchTheme = (theme: Theme): ISwitchTheme => ({
    type: SWITCH_THEME,
    theme
})