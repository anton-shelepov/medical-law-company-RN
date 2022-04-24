import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Home from "./src/screens/Home";
import Chat from "./src/screens/Chat";
import ioniconsTabSelector from "./src/utils/ionicons-tab-selector";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({route}) => ({
                    tabBarShowLabel: false,
                    tabBarIcon: ({focused}) => ioniconsTabSelector(route, focused),
                    headerStyle: {backgroundColor: '#f30008'},
                    headerTitleStyle: {color: 'white'}
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
        </NavigationContainer>
    );
}