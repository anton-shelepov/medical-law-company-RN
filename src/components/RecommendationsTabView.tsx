import React, { useState } from "react";
import { FlatList, useWindowDimensions } from "react-native";
import { TabBar, TabView } from "react-native-tab-view";
import { useTheme } from "../hooks/useTheme";
import TabText from "./styles/common/TabText.styled";
import RecommendationCard from "./RecommendationCard";

const RecommendationsTabView: React.FC = () => {

    const [index, setIndex] = useState(0)

    const [routes] = useState([
        {key: 'doctor', title: 'Врач'},
        {key: 'lawyer', title: 'Юрист'}
    ])

    const [theme] = useTheme()

    const data = [
        {id: 'das', title: ''},
        {id: 'das', title: ''},
        {id: 'das', title: ''},
        {id: 'das', title: ''},
        {id: 'das', title: ''},
    ]

    const renderScene = ({route}) => {
        switch (route.key) {

            case 'doctor':
                return (
                    <FlatList
                        data={data}
                        renderItem={() => <RecommendationCard />}
                    />
                )

            case 'lawyer':
                return (
                    <FlatList
                        data={data}
                        renderItem={() => <RecommendationCard />}
                    />
                )

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
                    renderLabel={({route, focused}) => (
                        <TabText focused={focused}>{route.title}</TabText>
                    )}
                />
            }
        />
    )
}

export default RecommendationsTabView
