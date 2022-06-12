import React from "react";
import { TouchableOpacity } from "react-native";
import userImagePlaceholder from "../../../assets/images/user-image-placeholder.webp";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { currentUserDataFetchRequest } from "../../redux/reducers/userReducer/userActions";
import chooseAndUploadImage from "../../scripts/chooseAndUploadImage";
import getPublicImageSrc from "../../scripts/getPublicImageSrc";
import CardContainer from "../_common/_styles/CardContainer.styled";
import { ProfileImage, UserName } from "./styles";


interface IProps {
    userImageSrc: string,
    userName: string
}

const ProfileCard: React.FC<IProps> = ({ userImageSrc, userName }) => {

    const dispatch = useAppDispatch();

    const onHandleImageUploadClick = () => {
        chooseAndUploadImage().then(response => {
            if (response) {
                dispatch(currentUserDataFetchRequest())
            }
        })
    }

    return (
        <CardContainer>
            <TouchableOpacity onPress={onHandleImageUploadClick}>
                <ProfileImage
                    source={userImageSrc
                        ? { uri: getPublicImageSrc(userImageSrc) }
                        : userImagePlaceholder}
                />
            </TouchableOpacity>
            <UserName>{userName}</UserName>
        </CardContainer>
    )
}

export default ProfileCard;