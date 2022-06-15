import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import userImagePlaceholder from "../../../assets/images/user-image-placeholder.webp";
import { RootStackParamList } from "../../navigators/RootStackNavigator";
import { ChatsItem } from "../../redux/reducers/chatsReducer/types";
import getPublicImageSrc from "../../scripts/getPublicImageSrc";
import translateEmployeePosition from "../../scripts/translateEmployeePosition";
import ListItemWrapper from "../_common/_styles/ListItemWrapper.styled";
import UserImage from "../_common/_styles/UserImage.styled";
import { BlockLeft, BlockRight, ChatName, CompanionName, Message } from "./styles";

interface IProps {
    chatData: ChatsItem
}

const ChatListCard: React.FC<IProps> =
    ({
        chatData: {
            imageURL,
            lastMessage,
            id,
            fullName,
            position,
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
                    <UserImage source={imageURL ? { uri: getPublicImageSrc(imageURL) } : userImagePlaceholder} />
                </BlockLeft>
                <BlockRight>
                    <ChatName>{translateEmployeePosition(position)}</ChatName>
                    <CompanionName>{fullName}</CompanionName>
                    <Message>{lastMessage}</Message>
                </BlockRight>
            </ListItemWrapper>
        )
    }

export default ChatListCard;