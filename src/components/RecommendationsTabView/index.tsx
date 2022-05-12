import React, { useState } from "react";
import { FlatList, useWindowDimensions } from "react-native";
import { TabBar, TabView } from "react-native-tab-view";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useTheme } from "../../hooks/useTheme";
import RecommendationListCard from "../RecommendationListCard";
import TabText from "../_common/_styles/TabText.styled";

const RecommendationsTabView: React.FC = () => {

    const [index, setIndex] = useState(0)

    const [routes] = useState([
        {key: 'doctor', title: 'Врач'},
        {key: 'lawyer', title: 'Юрист'}
    ])

    const recommendationsData = useAppSelector(state => state.recommendations.recommendations)

    const [theme] = useTheme()

    const renderScene = ({route}) => {
        switch (route.key) {

            case 'doctor':
                return (
                    <FlatList
                        data={recommendationsData}
                        renderItem={info => (info.item.employeePosition === "doctor") &&
                            <RecommendationListCard recommendationData={info.item} />}
                    />
                )

            case 'lawyer':
                return (
                    <FlatList
                        data={recommendationsData}
                        renderItem={info => (info.item.employeePosition === "lawyer") &&
                            <RecommendationListCard recommendationData={info.item} />}
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
            renderScene={renderScene}
        />
    )
}

export default RecommendationsTabView
