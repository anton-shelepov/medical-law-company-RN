import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { darkTheme } from "../../styles/themes";
import AuthScreen from "../../screens/AuthScreen";

const AuthStackNavigator = () => {

    const Stack = createNativeStackNavigator()

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