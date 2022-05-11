import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";
import { RootStackParamList } from "../navigators/RootStackNavigator";
import { ChatsItem } from "../redux/reducers/chatsReducer/types";
import { Author, Avatar, BlockLeft, BlockRight, ChatName, Message } from "./styles/ChatListCard.styled";

import ListItemWrapper from "./styles/common/ListItemWrapper.styled";

interface IProps {
    chatData: ChatsItem
}

const ChatListCard: React.FC<IProps> =
    ({
         chatData: {
             chatName,
             message,
             id,
             avatarSrc,
             messageType,
             author
         }
     }) => {

        const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

        const onHandlePress = () => {
            navigation.navigate("Chat")
        }

        return (
            <ListItemWrapper direction="row" onPress={onHandlePress}>
                <BlockLeft>
                    <Avatar source={{uri: "https://publicdomainvectors.org/tn_img/Male-Avatar-2.webp"}} />
                </BlockLeft>
                <BlockRight>
                    <ChatName>{chatName}</ChatName>
                    <Author>{author}</Author>
                    <Message>{message}</Message>
                </BlockRight>
            </ListItemWrapper>
        )
    }

export default ChatListCard;