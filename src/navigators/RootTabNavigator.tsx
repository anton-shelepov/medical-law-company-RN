import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { globalStyles } from "../common/styles/globalStyles";
import ioniconsTabSelector from "../common/utils/IoniconsTabSelector";
import { useTheme } from "../hooks/useTheme";
import Chats from "../screens/Chats";
import Home from "../screens/Home";
import Recommendations from "../screens/Recommendations";

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
                component={Home}
                options={{title: 'Главная'}}
            />

            <Tab.Screen
                name={"Chats"}
                component={Chats}
                options={{title: 'Чаты'}}
            />

            <Tab.Screen
                name={"Recommendations"}
                component={Recommendations}
                options={{title: 'Рекомендации'}}
            />

        </Tab.Navigator>
    )
}

export default RootTabNavigator