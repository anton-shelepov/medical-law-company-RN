import React, { BaseSyntheticEvent } from "react";
import { TouchableOpacity } from "react-native";
import Text from "../_styles/Text.styled";

interface IProps {
    title: string;
    fontSize?: number,
    onPress?: (e?: BaseSyntheticEvent) => void
}

const TransparentButton: React.FC<IProps> = ({
    title,
    onPress,
    fontSize = 14
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                alignSelf: 'center',
                marginBottom: 10,
                marginTop: 10,
            }}
        >
            <Text style={{
                fontWeight: 'bold',
                fontSize,
                marginBottom: 8,
                marginTop: 8
            }}>{title}</Text>
        </TouchableOpacity>
    )
}

export default TransparentButton;