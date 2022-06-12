import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { setStatusBarBackgroundColor } from "expo-status-bar";
import React, { useEffect } from "react";
import AuthScreen from "../../screens/AuthScreen";
import { darkTheme } from "../../styles/themes";

const AuthStackNavigator = () => {

    const Stack = createNativeStackNavigator()

    useEffect(() => {
        setStatusBarBackgroundColor(darkTheme.BACKGROUND_COLOR, false)
    }, [])

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: darkTheme.BACKGROUND_COLOR }
        }}>

            <Stack.Screen name={"Auth"} component={AuthScreen} />

        </Stack.Navigator>
    )
}

export default AuthStackNavigator