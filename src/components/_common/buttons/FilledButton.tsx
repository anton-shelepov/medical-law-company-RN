import React, { BaseSyntheticEvent } from "react";
import { ActivityIndicator } from "react-native";
import ButtonArea from "../_styles/ButtonArea.styled";
import ButtonText from "../_styles/ButtonText.styled";

interface IProps {
    isLoading?: boolean;
    title: string;
    onPress?: (e?: BaseSyntheticEvent) => Promise<void>
}

const FilledButton: React.FC<IProps> = ({ title, onPress, isLoading }) => {
    return (
        <ButtonArea onPress={onPress}>
            <ButtonText>
                {
                    isLoading ? <ActivityIndicator color='white' size='small' /> : title
                }
            </ButtonText>
        </ButtonArea>
    )
}

export default FilledButton;