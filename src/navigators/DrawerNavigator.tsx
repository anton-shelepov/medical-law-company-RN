import {createDrawerNavigator, DrawerContentScrollView, DrawerItem} from "@react-navigation/drawer";
import {darkTheme, lightTheme} from "../common/styles/themes";
import React from "react";
import TabNavigator from "./TabNavigator";
import {useTheme} from "../hooks/useTheme";

const DrawerNavigator = () => {

    const [theme, toggleTheme] = useTheme()
    const Drawer = createDrawerNavigator()

    return (
        <Drawer.Navigator
            screenOptions={() => ({
                headerShown: false,
            })}
            drawerContent={props => {
                return (
                    <DrawerContentScrollView {...props}>
                        {
                            theme.mode === lightTheme.mode
                                ? (
                                    <DrawerItem
                                        label={"Темная тема"}
                                        onPress={() => toggleTheme(darkTheme.mode)}/>
                                )
                                : (
                                    <DrawerItem
                                        label={"Светлая тема"}
                                        onPress={() => toggleTheme(lightTheme.mode)}/>
                                )
                        }
                    </DrawerContentScrollView>
                )
            }}>
            <Drawer.Screen name={'TabNavigator'} component={TabNavigator}/>
        </Drawer.Navigator>
    )
}

export default DrawerNavigator