import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Chat from "../screens/Chat";
import ioniconsTabSelector from "../common/utils/ioniconsTabSelector";
import Home from "../screens/Home";
import Recommendations from "../screens/Recommendations";
import { useTheme } from "../hooks/useTheme";
import { globalStyles } from "../common/styles/globalStyles";

const Tab = createBottomTabNavigator();

const TabNavigator = ({navigation}) => {

    const [theme] = useTheme()

    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                headerLeft: () => (
                    <Ionicons
                        onPress={() => navigation.openDrawer()}
                        name={"md-menu-outline"}
                        size={40}
                        color={"white"}
                        style={{marginLeft: 10}}
                    />
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
                component={Home}
                options={{title: 'Главная'}}
            />

            <Tab.Screen
                name={"Chat"}
                component={Chat}
                options={{title: 'Чат'}}
            />

            <Tab.Screen
                name={"Recommendations"}
                component={Recommendations}
                options={{title: 'Рекомендации'}}
            />

        </Tab.Navigator>
    )
}

export default TabNavigator