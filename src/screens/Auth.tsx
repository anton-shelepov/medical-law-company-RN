import React from "react";
import DarkContainer from "../components/styles/modificators/DarkContainer.styled";
import Logo from "../components/styles/Logo.styled";
import AuthForm from "../components/forms/AuthForm/AuthForm";
import { StatusBar } from "expo-status-bar";

const Auth: React.FC = () => {
    return (
        <DarkContainer>
            <Logo />
            <AuthForm />
        </DarkContainer>
    )
}

export default Auth;