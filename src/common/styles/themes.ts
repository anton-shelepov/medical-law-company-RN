import {Theme} from "../../redux/reducers/themeReducer/types";

export const darkTheme: Theme = {
    mode: "dark",
    BACKGROUND_COLOR: "#1a1a1a",
    TEXT_COLOR: "#ffffff",
    BUTTON_COLOR: "",
    BUTTON_TEXT_COLOR: "",
    TAB_BAR_BACKGROUND_COLOR: "#292929",
    TAB_BAR_ICONS_COLOR: "#ffffff",
    TAB_BAR_BORDER_TOP_COLOR: "#525252",
    CARD_BACKGROUND_COLOR: "#292929",
    CARD_BORDER_COLOR: "#363636",
    IN_PROCESS_COLOR: "rgba(197,197,129,0.63)",
    READY_COLOR: "#05a600",
};

export const lightTheme: Theme = {
    mode: "light",
    BACKGROUND_COLOR: "#f3f3f3",
    TEXT_COLOR: "#000000",
    BUTTON_COLOR: "",
    BUTTON_TEXT_COLOR: "",
    TAB_BAR_BACKGROUND_COLOR: "#ffffff",
    TAB_BAR_ICONS_COLOR: "#3a3a3a",
    TAB_BAR_BORDER_TOP_COLOR: "#d0d0d0",
    CARD_BACKGROUND_COLOR: "#ffffff",
    CARD_BORDER_COLOR: "#efefef",
    IN_PROCESS_COLOR: "rgba(162,159,40,0.7)",
    READY_COLOR: "#05a600",
};