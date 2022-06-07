import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import ChatsScreen from "../../screens/ChatsScreen";
import HomeScreen from "../../screens/HomeScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import RecommendationsScreen from "../../screens/RecommendationsScreen";


const Tab = createBottomTabNavigator();

const userTabs = () => {
    return (
        <>
            <Tab.Screen
                name={"Home"}
                component={HomeScreen}
                options={{ title: 'Главная' }
                }
            />

            < Tab.Screen
                name={"Chats"}
                component={ChatsScreen}
                options={{ title: 'Чаты' }}
            />

            < Tab.Screen
                name={"Recommendations"}
                component={RecommendationsScreen}
                options={{ title: 'Рекомендации' }}
            />

            < Tab.Screen
                name={"Profile"}
                component={ProfileScreen}
                options={{ title: 'Профиль' }}
            />
        </>
    )
}

export default userTabs;