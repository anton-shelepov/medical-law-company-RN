import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { darkTheme, lightTheme } from "../common/styles/themes";
import React from "react";
import RootTabNavigator from "./RootTabNavigator";
import { useTheme } from "../hooks/useTheme";


type RootDrawerParamList = {
    RootTabNavigator: undefined
}

const Drawer = createDrawerNavigator<RootDrawerParamList>()

const RootDrawerNavigator = () => {

    const [theme, toggleTheme] = useTheme()
    const isLightMode = theme.mode === lightTheme.mode

    return (
        <Drawer.Navigator
            screenOptions={() => ({
                drawerStyle: {backgroundColor: theme.BACKGROUND_COLOR},
                headerShown: false,
            })}
            drawerContent={props => {
                return (
                    <DrawerContentScrollView {...props}>
                        <DrawerItem
                            labelStyle={{color: theme.TEXT_COLOR}}
                            label={isLightMode ? "Темная тема" : "Светлая тема"}
                            onPress={() => toggleTheme(isLightMode ? darkTheme.mode : lightTheme.mode)}
                        />
                    </DrawerContentScrollView>
                )
            }}>

            <Drawer.Screen name={'RootTabNavigator'} component={RootTabNavigator} />

        </Drawer.Navigator>
    );
}

export default RootDrawerNavigator