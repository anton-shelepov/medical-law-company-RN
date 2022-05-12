import { setStatusBarBackgroundColor } from "expo-status-bar";
import React, { useEffect } from "react";
import AuthForm from "../components/_common/forms/AuthForm/AuthForm";
import { useTheme } from "../hooks/useTheme";
import DarkContainer from "../components/_common/_styles/modificators/DarkContainer.styled";
import Logo from "../components/_common/_styles/Logo.styled";

const Auth: React.FC = () => {

    const [theme] = useTheme()

    useEffect(() => {
        setStatusBarBackgroundColor(theme.BACKGROUND_COLOR, false)
    }, [])

    return (
        <DarkContainer>
            <Logo />
            <AuthForm />
        </DarkContainer>
    )
}

export default Auth;