import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react"
import { useTheme } from "../hooks/useTheme";

interface IProps {
    iconName: string,
    size?: number,
    color?: string,
    useThemeColor?: boolean,
}

const IoniconsSelector = ({iconName, size = 23, useThemeColor = false, color = "white"}: IProps) => {

    const [theme] = useTheme()

    return (
        <Ionicons name={iconName} size={size} color={useThemeColor ? theme.TEXT_COLOR : color} />
    )
}

export default IoniconsSelector;

