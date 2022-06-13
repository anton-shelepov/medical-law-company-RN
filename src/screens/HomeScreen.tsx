import React from "react";
import { RefreshControl } from "react-native";
import RecommendationsStatistics from "../components/RecommendationsStatistics";
import ServicesPackage from "../components/ServicesPackage";
import Workplans from "../components/Workplans";
import ScrollableContainer from "../components/_common/_styles/ScrollableContainer.styled";
import useRefresh from "../hooks/useRefresh";


const HomeScreen: React.FC = () => {

    const [refreshing, onRefresh] = useRefresh(1000);
    console.log('home render')
    return (
        <ScrollableContainer refreshControl={
            <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
            />
        } >
            <ServicesPackage />
            <RecommendationsStatistics />
            <Workplans />
        </ScrollableContainer>
    )
}

export default HomeScreen;