import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AppRoles } from "../../constants/enums";
import useRole from "../../hooks/useRole";
import { useTheme } from "../../hooks/useTheme";
import globalStyles from "../../styles/globalStyles";
import ioniconsTabSelector from "../../utils/IoniconsTabSelector";
import EmployeeTabs from "./employeeTabs";
import UserTabs from "./userTabs";

const Tab = createBottomTabNavigator();

export type RootTabParamList = {
    Recommendations,
    Chats,
    Home,
    Profile,
}


const RootTabNavigator = ({ navigation }) => {

    const [theme] = useTheme()
    const role = useRole()

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerLeft: () => (
                    <TouchableOpacity activeOpacity={.8} onPress={() => navigation.openDrawer()}>
                        <Ionicons
                            name={"md-menu-outline"}
                            size={40}
                            color={"white"}
                            style={{ marginLeft: 10 }}
                        />
                    </TouchableOpacity>
                ),
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => ioniconsTabSelector(route, focused),
                tabBarStyle: {
                    backgroundColor: theme.TAB_BAR_BACKGROUND_COLOR,
                    borderTopColor: theme.TAB_BAR_BORDER_TOP_COLOR,
                },
                headerStyle: { backgroundColor: globalStyles.RED_COLOR_TONE },
                headerTitleStyle: { color: 'white', fontSize: 22 },
            })}
            initialRouteName={"Home"}>

            {role === AppRoles.USER && <UserTabs />}

            {role === AppRoles.EMPLOYEE && <EmployeeTabs />}

        </Tab.Navigator>
    )
}

export default RootTabNavigator