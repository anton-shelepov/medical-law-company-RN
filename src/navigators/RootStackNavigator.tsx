import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatScreen from "../screens/ChatScreen";
import RootDrawerNavigator from "./RootDrawerNavigator";
import { useAppSelector } from "../hooks/useAppSelector";
import AuthStackNavigator from "./AuthStackNavigator";
import RecommendationDetailsScreen from "../screens/RecommendationDetailsScreen";
import globalStyles from "../styles/globalStyles";
import { useTheme } from "../hooks/useTheme";
import IoniconsSelector from "../utils/IoniconsSelector";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";


export type RootStackParamList = {
    RootDrawNavigator,
    RecommendationDetails,
    Auth,
    Chat: {id: number},
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {

    const navigation = useNavigation()
    const isUserAuth = useAppSelector(state => state.auth.isUserAuth)
    const [theme] = useTheme()

    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {backgroundColor: globalStyles.RED_COLOR_TONE},
            headerTitleAlign: "center",
            headerTitleStyle: {color: "#ffffff"},
            animation: "slide_from_right",
            contentStyle: {backgroundColor: theme.BACKGROUND_COLOR},
            headerLeft: () => (
                <TouchableOpacity activeOpacity={.8} onPress={() => navigation.goBack()}>
                    <IoniconsSelector iconName="arrow-back-outline" size={26} />
                </TouchableOpacity>
            )
        }}>
            {
                isUserAuth
                    ? (
                        <>
                            <Stack.Screen
                                options={{headerShown: false}}
                                name={"RootDrawNavigator"}
                                component={RootDrawerNavigator}
                            />
                            <Stack.Screen
                                name={"RecommendationDetails"}
                                component={RecommendationDetailsScreen}
                                options={{title: "Рекомендация"}}
                            />
                            <Stack.Screen
                                name={"Chat"}
                                component={ChatScreen}
                            />
                        </>
                    )
                    : <Stack.Screen name={"Auth"} component={AuthStackNavigator} />
            }
        </Stack.Navigator>
    )
}

export default RootStackNavigator