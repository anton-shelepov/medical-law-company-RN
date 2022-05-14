import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import React from "react";
import DrawerProfileInfo from "../components/DrawerProfileInfo";
import links from "../constants/links";
import { useTheme } from "../hooks/useTheme";
import * as WebBrowser from 'expo-web-browser';

import { darkTheme, lightTheme } from "../styles/themes";
import RootTabNavigator from "./RootTabNavigator";


type RootDrawerParamList = {
    RootTabNavigator
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
                        <DrawerProfileInfo />
                        <DrawerItem
                            labelStyle={{color: theme.TEXT_COLOR}}
                            label={isLightMode ? "Темная тема" : "Светлая тема"}
                            onPress={() => toggleTheme(isLightMode ? darkTheme.mode : lightTheme.mode)}
                        />
                        <DrawerItem
                            labelStyle={{color: theme.TEXT_COLOR}}
                            label="Наша группа VK"
                            onPress={() => WebBrowser.openBrowserAsync(links.VK_GROUP)}
                        />
                    </DrawerContentScrollView>
                )
            }}>

            <Drawer.Screen
                name={'RootTabNavigator'}
                component={RootTabNavigator}
            />

        </Drawer.Navigator>
    );
}

export default RootDrawerNavigator