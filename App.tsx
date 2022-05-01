import React from "react";
import 'react-native-gesture-handler';
import {Provider} from "react-redux";
import {StatusBar} from "expo-status-bar";
import store from "./src/redux/store";
import DrawerNavigator from "./src/navigators/DrawerNavigator";
import {NavigationContainer} from "@react-navigation/native";
import {ThemeProvider} from "styled-components";
import {useAppSelector} from "./src/hooks/useAppSelector";
import StackNavigator from "./src/navigators/StackNavigator";
import useFonts from "./src/hooks/useFonts";
import AppLoading from "expo-app-loading";

export default function AppProvider() {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )
}

function App() {

    const theme = useAppSelector(state => state.theme.theme)
    const isAuth = useAppSelector(state => state.auth.isAuth)

    const isFontsLoaded = useFonts()

    if (!isFontsLoaded) {
        return (
            <AppLoading/>
        )
    }

    return (
        <ThemeProvider theme={theme}>
            <StatusBar backgroundColor={"#f30008"} style={"light"}/>
            <NavigationContainer>
                {
                    isAuth
                        ? (
                            <DrawerNavigator/>
                        )
                        : (
                            <StackNavigator/>
                        )
                }
            </NavigationContainer>
        </ThemeProvider>
    );
}