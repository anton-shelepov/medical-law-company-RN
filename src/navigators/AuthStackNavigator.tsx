import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Auth from "../screens/Auth";
import {darkTheme} from "../common/styles/themes";

const AuthStackNavigator = () => {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                contentStyle: {backgroundColor: darkTheme.BACKGROUND_COLOR}
            }}>

            <Stack.Screen
                name={"Auth"}
                component={Auth}/>

        </Stack.Navigator>
    )
}

export default AuthStackNavigator