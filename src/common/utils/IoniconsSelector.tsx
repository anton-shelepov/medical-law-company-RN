import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react"

interface IProps {
    iconName: string,
    size?: number,
    color?: string,
}

const IoniconsSelector = ({iconName, size = 23, color = "white"}: IProps) => {
    return (
        <Ionicons name={iconName} size={size} color={color} />
    )
}

export default IoniconsSelector;