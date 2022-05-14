import React from "react";
import ScrollableContainer from "../components/_common/_styles/ScrollableContainer.styled";
import ProfileEditForm from "../components/_common/forms/ProfileEditForm";
import ProfileCard from "../components/ProfileCard";

const ProfileScreen: React.FC = () => {
    return (
        <ScrollableContainer>
            <ProfileCard />
            <ProfileEditForm />
        </ScrollableContainer>
    )
}

export default ProfileScreen;