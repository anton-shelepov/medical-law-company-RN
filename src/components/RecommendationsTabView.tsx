import React, { useState } from "react";
import { useWindowDimensions } from "react-native";
import { TabBar, TabView } from "react-native-tab-view";
import Logo from "./styles/Logo.styled";
import { useTheme } from "../hooks/useTheme";
import TabText from "./styles/TabText.styled";
import RecommendationCard from "./RecommendationCard";

const RecommendationsTabView: React.FC = () => {

    const [index, setIndex] = useState(0)

    const [routes] = useState([
        {key: 'doctor', title: 'Врач'},
        {key: 'lawyer', title: 'Юрист'}
    ])

    const [theme] = useTheme()

    const renderScene = ({route}) => {
        switch (route.key) {

            case 'doctor':
                return <RecommendationCard />;

            case 'lawyer':
                return <RecommendationCard />;

            default:
                return null;
        }
    };

    const layout = useWindowDimensions();

    return (
        <TabView
            onIndexChange={setIndex}
            navigationState={{index, routes}}
            initialLayout={{width: layout.width}}
            renderScene={renderScene}
            style={{backgroundColor: theme.BACKGROUND_COLOR,}}
            renderTabBar={props =>
                <TabBar
                    {...props}
                    style={{backgroundColor: theme.TAB_BAR_BACKGROUND_COLOR}}
                    indicatorStyle={{backgroundColor: 'red'}}
                    renderLabel={({route, focused }) => (
                        <TabText focused={focused}>{route.title}</TabText>
                    )}
                />
            }
        />
    )
}

export default RecommendationsTabView
