import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useTheme } from "../../hooks/useTheme";
import ChatScreen from "../../screens/ChatScreen";
import RecommendationDetailsScreen from "../../screens/RecommendationDetailsScreen";
import globalStyles from "../../styles/globalStyles";
import IoniconsSelector from "../../utils/IoniconsSelector";
import AuthStackNavigator from "../AuthStackNavigator";
import RootDrawerNavigator from "../RootDrawerNavigator";


export type RootStackParamList = {
    RootDrawNavigator,
    RecommendationDetails: { recommendationId: number },
    AuthStack,
    Chat: { id: number },
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {

    const navigation = useNavigation()
    const isUserAuth = useAppSelector(state => state.user.isAuth)
    const [theme] = useTheme()

    return (
        <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: globalStyles.RED_COLOR_TONE },
            headerTitleAlign: "center",
            headerTitleStyle: { color: "#ffffff" },
            animation: "slide_from_right",
            contentStyle: { backgroundColor: theme.BACKGROUND_COLOR },
            headerLeft: () => (
                <TouchableOpacity activeOpacity={.8} onPress={() => navigation.goBack()}>
                    <IoniconsSelector iconName="arrow-back-outline" size={26} />
                </TouchableOpacity>
            )
        }}>
            {
                isUserAuth ? (
                    <>
                        <Stack.Screen
                            options={{ headerShown: false }}
                            name={"RootDrawNavigator"}
                            component={RootDrawerNavigator}
                        />
                        <Stack.Screen
                            name={"RecommendationDetails"}
                            component={RecommendationDetailsScreen}
                            options={{ title: "Рекомендация" }}
                        />
                        <Stack.Screen
                            name={"Chat"}
                            component={ChatScreen}
                        />
                    </>
                ) : (
                    <Stack.Screen
                        options={{ headerShown: false }}
                        name={"AuthStack"}
                        component={AuthStackNavigator}
                    />
                )
            }
        </Stack.Navigator>
    )
}

export default RootStackNavigator