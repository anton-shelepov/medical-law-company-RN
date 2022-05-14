import React from "react";
import { useTheme } from "../../hooks/useTheme";
import CardContainer from "../_common/_styles/CardContainer.styled";
import Logo from "../_common/_styles/Logo.styled";
import { PackageName, PackageText } from "./styles";

const ServicesPackage: React.FC = () => {

    const [theme] = useTheme()

    return (
        <CardContainer>
            <Logo colorsType={theme.mode === "light" ? "dark" : "light"} />
            <PackageText>
                Ваш пакет услуг:
                <PackageName>{` ${"Белый билет"}`}</PackageName>
            </PackageText>
        </CardContainer>
    )
}

export default ServicesPackage