import React from "react";
import { ActivityIndicator, View } from "react-native";
import globalStyles from "../../styles/globalStyles";

const ActivityIndicatorView: React.FC = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <ActivityIndicator color={globalStyles.RED_COLOR_TONE} size='large' />
        </View>
    )
}

export default ActivityIndicatorView;