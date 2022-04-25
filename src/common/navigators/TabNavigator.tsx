import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Chat from "../../screens/Chat";
import ioniconsTabSelector from "../scripts/ionicons-tab-selector";
import Home from "../../screens/Home";

const Tab = createBottomTabNavigator();

const TabNavigator = ({navigation}) => {
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
                headerStyle: {backgroundColor: '#f30008'},
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

        </Tab.Navigator>
    )
}

export default TabNavigator