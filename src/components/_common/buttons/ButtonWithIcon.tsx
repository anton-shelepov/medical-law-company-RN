import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import IoniconsSelector from "../../../utils/IoniconsSelector";
import Text from "../_styles/Text.styled";


interface IProps extends TouchableOpacityProps {
    title: string;
    iconName: string;
}

const ButtonWithIcon: React.FC<IProps> = ({ iconName, title, ...touchableOpacityProps }) => {
    return (
        <TouchableOpacity {...touchableOpacityProps} style={{ alignItems: 'center', opacity: 0.8 }}>
            <IoniconsSelector color="#8f8f8f" iconName={iconName} size={26} />
            <Text style={{ marginTop: 10, color: '#8f8f8f', fontWeight: 'bold' }}>{title}</Text>
        </TouchableOpacity>
    )
}

export default ButtonWithIcon;