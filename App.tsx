import React from "react";
import 'react-native-gesture-handler';
import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";
import store from "./src/redux/store";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components";
import { useAppSelector } from "./src/hooks/useAppSelector";
import useFonts from "./src/hooks/useFonts";
import AppLoading from "expo-app-loading";
import globalStyles from "./src/styles/globalStyles";
import RootStackNavigator from "./src/navigators/RootStackNavigator";

export default function AppProvider() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

function App() {

    const theme = useAppSelector(state => state.theme.currentTheme)

    const isFontsLoaded = useFonts()

    if (!isFontsLoaded) {
        return (
            <AppLoading />
        )
    }

    return (
        <ThemeProvider theme={theme}>
            <StatusBar style={"light"} backgroundColor={globalStyles.RED_COLOR_TONE} />
            <NavigationContainer>
                <RootStackNavigator />
            </NavigationContainer>
        </ThemeProvider>
    );
}