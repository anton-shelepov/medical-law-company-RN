import React from "react";
import { View } from "react-native";
import Container from "../components/_common/_styles/Container.styled";
import ProfileCard from "../components/ProfileCard";

const ProfileScreen: React.FC = () => {
    return (
        <Container>
            <ProfileCard />
            <View style={{flex: 1}}></View>
        </Container>
    )
}

export default ProfileScreen;