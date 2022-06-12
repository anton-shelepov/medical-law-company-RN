import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { setStatusBarBackgroundColor } from "expo-status-bar";
import * as WebBrowser from 'expo-web-browser';
import React, { useEffect } from "react";
import DrawerProfileInfo from "../../components/DrawerProfileInfo";
import links from "../../constants/links";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useTheme } from "../../hooks/useTheme";
import { logoutRequest } from "../../redux/reducers/userReducer/userActions";
import globalStyles from "../../styles/globalStyles";
import { darkTheme, lightTheme } from "../../styles/themes";
import RootTabNavigator from "../RootTabNavigator";


type RootDrawerParamList = {
    RootTabNavigator
}

const Drawer = createDrawerNavigator<RootDrawerParamList>()

const RootDrawerNavigator = () => {

    const [theme, toggleTheme] = useTheme()
    const isLightMode = theme.mode === lightTheme.mode

    const dispatch = useAppDispatch();

    useEffect(() => {
        setStatusBarBackgroundColor(globalStyles.RED_COLOR_TONE, null);
    })

    return (
        <Drawer.Navigator
            screenOptions={() => ({
                drawerStyle: { backgroundColor: theme.BACKGROUND_COLOR },
                headerShown: false,
            })}
            drawerContent={props => {
                return (
                    <DrawerContentScrollView {...props}>
                        <DrawerProfileInfo />
                        <DrawerItem
                            labelStyle={{ color: theme.TEXT_COLOR }}
                            label={isLightMode ? "Темная тема" : "Светлая тема"}
                            onPress={() => toggleTheme(isLightMode ? darkTheme.mode : lightTheme.mode)}
                        />
                        <DrawerItem
                            labelStyle={{ color: theme.TEXT_COLOR }}
                            label="Наша группа VK"
                            onPress={() => WebBrowser.openBrowserAsync(links.VK_GROUP)}
                        />
                        <DrawerItem
                            labelStyle={{ color: theme.TEXT_COLOR }}
                            label="Выйти"
                            onPress={() => dispatch(logoutRequest())}
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