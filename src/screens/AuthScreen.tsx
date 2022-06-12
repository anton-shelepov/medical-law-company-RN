import { setStatusBarBackgroundColor } from "expo-status-bar";
import React, { useEffect } from "react";
import AuthForm from "../components/_common/forms/AuthForm";
import { useTheme } from "../hooks/useTheme";
import DarkContainer from "../components/_common/_styles/modificators/DarkContainer.styled";
import Logo from "../components/_common/_styles/Logo.styled";
import { darkTheme } from "../styles/themes";

const AuthScreen: React.FC = () => {

    const [theme] = useTheme()

    return (
        <DarkContainer>
            <Logo marginTop={170} />
            <AuthForm />
        </DarkContainer>
    )
}

export default AuthScreen;