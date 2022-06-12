import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import 'react-native-gesture-handler';
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { useAppDispatch } from "./src/hooks/useAppDispatch";
import { useAppSelector } from "./src/hooks/useAppSelector";
import useFonts from "./src/hooks/useFonts";
import RootStackNavigator from "./src/navigators/RootStackNavigator";
import { currentUserDataFetchRequest, signinSuccess } from "./src/redux/reducers/userReducer/userActions";
import store from "./src/redux/store";
import getTokensFromSecureStore from "./src/utils/secureStore/getTokensFromSecureStore";

export default function AppProvider() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

function App() {

    const dispatch = useAppDispatch()
    const theme = useAppSelector(state => state.theme.currentTheme);
    const isFontsLoaded = useFonts();

    useEffect(() => {
        getTokensFromSecureStore().then(tokens => {
            dispatch(signinSuccess(tokens));
            dispatch(currentUserDataFetchRequest())
        }).catch((error: Error) => { console.log(error.message) })
    }, [])

    if (!isFontsLoaded) {
        return (
            <AppLoading />
        )
    }

    return (
        <ThemeProvider theme={theme}>
            <StatusBar style={"light"} />
            <NavigationContainer>
                <RootStackNavigator />
            </NavigationContainer>
        </ThemeProvider>
    );
}