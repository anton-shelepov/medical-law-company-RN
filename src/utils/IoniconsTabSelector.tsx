import { ParamListBase, RouteProp } from "@react-navigation/native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useTheme } from "../hooks/useTheme";

const IoniconsTabSelector = (route: RouteProp<ParamListBase, string>, focused: boolean) => {

    const [theme] = useTheme()

    let iconName;
    switch (route.name) {
        case 'Home':
            iconName = focused ? 'ios-home' : 'ios-home-outline'
            break;

        case 'Chats':
            iconName = focused ? 'ios-chatbubble-ellipses-sharp' : 'ios-chatbubble-ellipses-outline'
            break;

        case 'Recommendations':
            iconName = focused ? 'bookmarks' : 'bookmarks-outline'
            break;

        case 'Profile':
            iconName = focused ? 'person' : 'person-outline'
            break;

        case 'Users':
            iconName = focused ? 'md-mail' : 'md-mail-outline'
            break;

    }
    return <Ionicons name={iconName} size={23} color={theme.TAB_BAR_ICONS_COLOR} />
}

export default IoniconsTabSelector
