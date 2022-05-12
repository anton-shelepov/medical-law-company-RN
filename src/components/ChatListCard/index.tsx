import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { RootStackParamList } from "../../navigators/RootStackNavigator";
import { ChatsItem } from "../../redux/reducers/chatsReducer/types";
import { ChatName, CompanionName, Message, BlockRight, BlockLeft } from "./styles";
import ListItemWrapper from "../_common/_styles/ListItemWrapper.styled";
import UserImage from "../_common/_styles/UserImage.styled";

interface IProps {
    chatData: ChatsItem
}

const ChatListCard: React.FC<IProps> =
    ({
         chatData: {
             chatName,
             message,
             id,
             userImageSrc,
             messageType,
             userName,
         }
     }) => {

        const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

        const onHandlePress = () => {
            navigation.navigate("Chat", {
                id,
            })
        }

        return (
            <ListItemWrapper direction="row" onPress={onHandlePress}>
                <BlockLeft>
                    <UserImage source={{uri: userImageSrc}} />
                </BlockLeft>
                <BlockRight>
                    <ChatName>{chatName}</ChatName>
                    <CompanionName>{userName}</CompanionName>
                    <Message>{message}</Message>
                </BlockRight>
            </ListItemWrapper>
        )
    }

export default ChatListCard;