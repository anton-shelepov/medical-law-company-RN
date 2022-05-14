import React from "react";
import { View } from "react-native";
import Container from "../components/_common/_styles/Container.styled";
import ServicesPackage from "../components/ServicesPackage";


const HomeScreen: React.FC = () => {
    return (
        <Container>
            <ServicesPackage />
            <View style={{flex: 1}}></View>
        </Container>
    )
}

export default HomeScreen;