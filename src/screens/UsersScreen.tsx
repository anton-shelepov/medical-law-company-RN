import React from "react";
import { FlatList } from "react-native";

const UsersScreen: React.FC = () => {

    return (
        <FlatList
            data={ }
            renderItem={({ item }: { item: RecommendationItem }) => (item.group === group) &&
                <RecommendationCard recommendationData={item} />
            }
        />
    )
}

export default UsersScreen;