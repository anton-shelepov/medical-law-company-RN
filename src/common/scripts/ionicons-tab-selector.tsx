import Ionicons from "react-native-vector-icons/Ionicons";
import {ParamListBase, RouteProp} from "@react-navigation/native";
import React from "react";

interface IProps {
    route: string
    focused: boolean
}

const ioniconsTabSelector = (route: RouteProp<ParamListBase, string> , focused: boolean) => {
    let iconName;
    switch (route.name) {
        case 'Home':
            iconName = focused ? 'ios-home' : 'ios-home-outline'
            break;

        case 'Chat':
            iconName = focused ? 'ios-chatbubble-ellipses-sharp' : 'ios-chatbubble-ellipses-outline'
            break;
    }
    return <Ionicons name={iconName} size={25} color={"black"}/>
}

export default ioniconsTabSelector
