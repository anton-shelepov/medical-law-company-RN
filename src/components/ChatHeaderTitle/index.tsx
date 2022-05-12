import React from "react";
import { View } from "react-native";
import { useAppSelector } from "../../hooks/useAppSelector";
import { ChatName, Container, UserName, HeaderUserImage } from "./styles";

interface IProps {
    id: number
}

const ChatHeaderTitle: React.FC<IProps> = ({id}) => {

    const {chatName, userName, userImageSrc} = useAppSelector(state => state.chat.chatInfo)

    return (
        <Container>
            <HeaderUserImage source={{uri: userImageSrc}} />
            <View>
                <ChatName>{chatName}</ChatName>
                <UserName>{userName}</UserName>
            </View>
        </Container>
    )
}

export default ChatHeaderTitle;