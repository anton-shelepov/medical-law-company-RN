import React from "react";
import ProfileCard from "../components/ProfileCard";
import ProfileEditForm from "../components/_common/forms/ProfileEditForm";
import ScrollableContainer from "../components/_common/_styles/ScrollableContainer.styled";
import { useAppSelector } from "../hooks/useAppSelector";

const ProfileScreen: React.FC = () => {

    const user = useAppSelector(state => state.user.data)

    return (
        <ScrollableContainer>
            <ProfileCard userImageSrc={user.imageURL} userName={user.fullName} />
            <ProfileEditForm />
        </ScrollableContainer>
    )
}

export default ProfileScreen;