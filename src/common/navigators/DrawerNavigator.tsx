import {createDrawerNavigator, DrawerContentScrollView, DrawerItem} from "@react-navigation/drawer";
import {switchTheme} from "../../redux/reducers/theme-reducer/theme-actions";
import {darkTheme, lightTheme} from "../../styles/themes";
import React from "react";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import TabNavigator from "./TabNavigator";
import {useAppSelector} from "../../hooks/useAppSelector";
import {RootState} from "../../redux/store";

const DrawerNavigator = () => {

    const Drawer = createDrawerNavigator()
    const dispatch = useAppDispatch()
    const currentThemeMode = useAppSelector((state: RootState) => state.theme.theme.mode)

    return (
        <Drawer.Navigator
            screenOptions={() => ({
                headerShown: false,
            })}
            drawerContent={props => {
                return (
                    <DrawerContentScrollView {...props}>
                        {
                            currentThemeMode === "light"
                                ? (
                                    <DrawerItem
                                        label={"Темная тема"}
                                        onPress={() => dispatch(switchTheme(darkTheme))}/>
                                )
                                : (
                                    <DrawerItem
                                        label={"Светлая тема"}
                                        onPress={() => dispatch(switchTheme(lightTheme))}/>
                                )
                        }
                    </DrawerContentScrollView>
                )
            }}>
            <Drawer.Screen name={'home'} component={TabNavigator}/>
        </Drawer.Navigator>
    )
}

export default DrawerNavigator