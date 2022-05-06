import Ionicons from "react-native-vector-icons/Ionicons";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import React from "react";
import { useTheme } from "../../hooks/useTheme";

interface IProps {
    route: string
    focused: boolean
}

const ioniconsTabSelector = (route: RouteProp<ParamListBase, string>, focused: boolean) => {

    const [theme] = useTheme()

    let iconName;
    switch (route.name) {
        case 'Home':
            iconName = focused ? 'ios-home' : 'ios-home-outline'
            break;

        case 'Chat':
            iconName = focused ? 'ios-chatbubble-ellipses-sharp' : 'ios-chatbubble-ellipses-outline'
            break;

        case 'Recommendations':
            iconName = focused ? 'bookmarks' : 'bookmarks-outline'
            break;
    }
    return <Ionicons name={iconName} size={23} color={theme.TAB_BAR_ICONS_COLOR} />
}

export default ioniconsTabSelector
