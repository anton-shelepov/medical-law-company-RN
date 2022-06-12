import React from "react";
import { ActivityIndicator } from "react-native";
import globalStyles from "../../styles/globalStyles";
import Container from "../_common/_styles/Container.styled";

const ActivityIndicatorView: React.FC = () => {
    return (
        <Container>
            <ActivityIndicator color={globalStyles.RED_COLOR_TONE} size='large' />
        </Container>
    )
}

export default ActivityIndicatorView;