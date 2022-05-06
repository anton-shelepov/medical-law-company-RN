import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { darkTheme, lightTheme } from "../common/styles/themes";
import React from "react";
import TabNavigator from "./TabNavigator";
import { useTheme } from "../hooks/useTheme";

const DrawerNavigator = () => {

    const [theme, toggleTheme] = useTheme()
    const Drawer = createDrawerNavigator()

    const isLightMode = theme.mode === lightTheme.mode

    return (
        <Drawer.Navigator
            screenOptions={() => ({
                headerShown: false,
                drawerStyle: {backgroundColor: theme.BACKGROUND_COLOR},
            })}
            drawerContent={props => {
                return (
                    <DrawerContentScrollView {...props}>
                        <DrawerItem
                            labelStyle={{color: theme.TEXT_COLOR}}
                            label={isLightMode ? "Темная тема" : "Светлая тема"}
                            onPress={() => toggleTheme(isLightMode ? darkTheme.mode : lightTheme.mode)} />
                    </DrawerContentScrollView>
                )
            }}>
            <Drawer.Screen name={'TabNavigator'} component={TabNavigator} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator