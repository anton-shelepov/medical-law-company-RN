import React from "react";
import 'react-native-gesture-handler';
import {Provider} from "react-redux";
import {StatusBar} from "expo-status-bar";
import store from "./src/redux/store";
import DrawerNavigator from "./src/common/navigators/DrawerNavigator";
import {NavigationContainer} from "@react-navigation/native";
import {ThemeProvider} from "styled-components";
import {useAppSelector} from "./src/hooks/useAppSelector";
import {RootState} from "./src/redux/store";

export default function AppProvider() {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )
}

function App() {

    const theme = useAppSelector((state: RootState) => state.theme.theme)

    return (
        <ThemeProvider theme={theme}>
            <StatusBar backgroundColor={"#f30008"} style={"light"}/>
            <NavigationContainer>
                <DrawerNavigator/>
            </NavigationContainer>
        </ThemeProvider>
    );
}