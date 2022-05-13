import React from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import { ProfileImage, UserName } from "./styles";
import CardContainer from "../_common/_styles/CardContainer.styled";


const ProfileCard: React.FC = () => {

    const {userImageSrc, userName} = useAppSelector(state => state.profile.profileData)

    return (
        <CardContainer>
            <ProfileImage source={{uri: userImageSrc}} />
            <UserName>{userName}</UserName>
        </CardContainer>
    )
}

export default ProfileCard;