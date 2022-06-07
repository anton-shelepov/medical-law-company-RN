import React, { BaseSyntheticEvent } from "react";
import { TouchableOpacity } from "react-native";
import Text from "../_styles/Text.styled";

interface IProps {
    title: string;
    onPress?: (e?: BaseSyntheticEvent) => void
}

const TransparentButton: React.FC<IProps> = ({ title, onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                alignSelf: 'center',
            }}
        >
            <Text style={{ fontWeight: 'bold', fontSize: 14, marginBottom: 8, marginTop: 8 }}>{title}</Text>
        </TouchableOpacity>
    )
}

export default TransparentButton;