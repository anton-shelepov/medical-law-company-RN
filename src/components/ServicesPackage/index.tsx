import React from "react";
import { useTheme } from "../../hooks/useTheme";
import Logo from "../_common/_styles/Logo.styled";
import { Container, PackageName, PackageText } from "./styles";

const ServicesPackage: React.FC = () => {

    const [theme] = useTheme()

    return (
        <Container>
            <Logo colorsType={theme.mode === "light" ? "dark" : "light"} />
            <PackageText>
                Ваш пакет услуг:
                <PackageName>{` ${"Белый билет"}`}</PackageName>
            </PackageText>
        </Container>
    )
}

export default ServicesPackage