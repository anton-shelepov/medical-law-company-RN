import React, { useEffect } from "react";
import DarkContainer from "../components/styles/common/modificators/DarkContainer.styled";
import Logo from "../components/styles/common/Logo.styled";
import AuthForm from "../components/forms/AuthForm/AuthForm";
import { setStatusBarBackgroundColor } from "expo-status-bar";
import { useTheme } from "../hooks/useTheme";

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