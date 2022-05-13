import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useTheme } from "../hooks/useTheme";
import ChatsScreen from "../screens/ChatsScreen";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import RecommendationsScreen from "../screens/RecommendationsScreen";
import globalStyles from "../styles/globalStyles";
import ioniconsTabSelector from "../utils/IoniconsTabSelector";

const Tab = createBottomTabNavigator();

const RootTabNavigator = ({navigation}) => {

    const [theme] = useTheme()

    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                headerLeft: () => (
                    <TouchableOpacity activeOpacity={.8} onPress={() => navigation.openDrawer()}>
                        <Ionicons
                            name={"md-menu-outline"}
                            size={40}
                            color={"white"}
                            style={{marginLeft: 10}}
                        />
                    </TouchableOpacity>
                ),
                tabBarShowLabel: false,
                tabBarIcon: ({focused}) => ioniconsTabSelector(route, focused),
                tabBarStyle: {
                    backgroundColor: theme.TAB_BAR_BACKGROUND_COLOR,
                    borderTopColor: theme.TAB_BAR_BORDER_TOP_COLOR,
                },
                headerStyle: {backgroundColor: globalStyles.RED_COLOR_TONE},
                headerTitleStyle: {color: 'white', fontSize: 22},
            })}
            initialRouteName={"Home"}>

            <Tab.Screen
                name={"Home"}
                component={HomeScreen}
                options={{title: 'Главная'}}
            />

            <Tab.Screen
                name={"Chats"}
                component={ChatsScreen}
                options={{title: 'Чаты'}}
            />

            <Tab.Screen
                name={"Recommendations"}
                component={RecommendationsScreen}
                options={{title: 'Рекомендации'}}
            />

            <Tab.Screen
                name={"Profile"}
                component={ProfileScreen}
                options={{title: 'Профиль'}}
            />

        </Tab.Navigator>
    )
}

export default RootTabNavigator