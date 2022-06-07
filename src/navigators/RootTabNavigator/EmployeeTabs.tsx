import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import ProfileScreen from "../../screens/ProfileScreen";
import UsersScreen from "../../screens/UsersScreen";


const Tab = createBottomTabNavigator();

const employeeTabs = () => {
    return (
        <>
            <Tab.Screen
                name={"Users"}
                component={UsersScreen}
                options={{ title: 'Пользователи' }}
            />
            <Tab.Screen
                name={"Profile"}
                component={ProfileScreen}
                options={{ title: 'Профиль' }}
            />
        </>
    )
}

export default employeeTabs;