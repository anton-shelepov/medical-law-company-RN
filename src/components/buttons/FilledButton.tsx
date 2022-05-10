import React, { BaseSyntheticEvent } from "react";
import ButtonArea from "../styles/common/ButtonArea.styled";
import ButtonText from "../styles/common/ButtonText.styled";

interface IProps {
    title: string;
    onPress?: (e?: BaseSyntheticEvent) => Promise<void>
}

const FilledButton: React.FC<IProps> = ({title, onPress}) => {
    return (
        <ButtonArea onPress={onPress}>
            <ButtonText>{title}</ButtonText>
        </ButtonArea>
    )
}

export default FilledButton;