import React from "react";
import { View } from "react-native";
import userImagePlaceholder from "../../../assets/images/user-image-placeholder.webp";
import getPublicImageSrc from "../../scripts/getPublicImageSrc";
import translateEmployeePosition from "../../scripts/translateEmployeePosition";
import { ChatName, Container, HeaderUserImage, UserName } from "./styles";


interface IProps {
    data: {
        fullName: string,
        imageURL: string,
        position: string,
    }
}

const ChatHeaderTitle: React.FC<IProps> = ({ data: { fullName, imageURL, position } }) => {


    return (
        <Container>
            <HeaderUserImage source={imageURL ? { uri: getPublicImageSrc(imageURL) } : userImagePlaceholder} />
            <View>
                {position && <ChatName>{translateEmployeePosition(position)}</ChatName>}
                <UserName>{fullName}</UserName>
            </View>
        </Container>
    )
}

export default ChatHeaderTitle;