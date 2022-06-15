import React, { useState } from "react";
import { FlatList, RefreshControl, useWindowDimensions } from "react-native";
import { TabBar, TabView } from "react-native-tab-view";
import { RecommendationGroups } from "../../constants/enums";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import useRefresh from "../../hooks/useRefresh";
import { useTheme } from "../../hooks/useTheme";
import { recommendationsFetchRequest } from "../../redux/reducers/recommendationsReducer/recommendationsActions";
import { RecommendationItem } from "../../redux/reducers/recommendationsReducer/types";
import ActivityIndicatorView from "../ActivityIndicatorView";
import RecommendationCard from "../RecommendationCard";
import TabText from "../_common/_styles/TabText.styled";


interface IProps {
    recommendations: RecommendationItem[],
    isLoading: boolean,
    userId: number
}

const RecommendationsTabView: React.FC<IProps> = ({ recommendations, isLoading, userId }) => {

    const [index, setIndex] = useState(0)
    const [theme] = useTheme()
    const layout = useWindowDimensions();

    const [refreshing, onRefresh] = useRefresh(0);

    const dispatch = useAppDispatch();

    const [routes] = useState([
        { key: RecommendationGroups.DOCTOR, title: 'Врач' },
        { key: RecommendationGroups.LAWYER, title: 'Юрист' }
    ])

    const onHandleRefresh = () => {
        onRefresh();
        dispatch(recommendationsFetchRequest(userId))
    }

    const RecommendationFlatList: React.FC<{ group: RecommendationGroups }> = ({ group }) => {
        return (
            <FlatList
                data={recommendations}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onHandleRefresh}
                    />
                }
                renderItem={({ item }: { item: RecommendationItem }) => (item.group === group) &&
                    <RecommendationCard recommendationData={item} />
                }
            />
        )
    }

    const renderScene = ({ route }) => {
        switch (route.key) {

            case RecommendationGroups.DOCTOR:
                return isLoading
                    ? <ActivityIndicatorView />
                    : <RecommendationFlatList group={RecommendationGroups.DOCTOR} />

            case RecommendationGroups.LAWYER:
                return isLoading
                    ? <ActivityIndicatorView />
                    : <RecommendationFlatList group={RecommendationGroups.LAWYER} />

            default:
                return null;
        }
    };

    return (
        <TabView
            onIndexChange={setIndex}
            navigationState={{ index, routes }}
            initialLayout={{ width: layout.width }}
            style={{ backgroundColor: theme.BACKGROUND_COLOR, }}
            renderTabBar={props =>
                <TabBar
                    {...props}
                    style={{ backgroundColor: theme.TAB_BAR_BACKGROUND_COLOR }}
                    indicatorStyle={{ backgroundColor: 'red' }}
                    renderLabel={({ route, focused }) => (
                        <TabText focused={focused}>{route.title}</TabText>
                    )}
                />
            }
            renderScene={renderScene}
        />
    )
}

export default RecommendationsTabView
