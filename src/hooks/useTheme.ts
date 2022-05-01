import {useAppSelector} from "./useAppSelector";
import {useAppDispatch} from "./useAppDispatch";
import {darkTheme, lightTheme} from "../common/styles/themes";
import {switchTheme} from "../redux/reducers/theme-reducer/theme-actions";
import {Theme} from "../redux/reducers/theme-reducer/types";

export const useTheme = (): [theme: Theme, toggleTheme: (themeMode: "light" | "dark") => void]  => {

    const theme = useAppSelector(state => state.theme.theme)
    const dispatch = useAppDispatch()

    function toggleTheme(themeMode: "light" | "dark"){
        if (themeMode === lightTheme.mode) {
            dispatch(switchTheme(lightTheme))
        } else {
            dispatch(switchTheme(darkTheme))
        }
    }

    return [theme, toggleTheme]
}