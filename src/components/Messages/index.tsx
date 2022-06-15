import React from "react";
import { FlatList } from "react-native";
import { messageTypes, TokenTypes } from "../../constants/enums";
import useDecodedToken from "../../hooks/useDecodedToken";
import { Message } from "../../redux/reducers/chatReducer/types";
import transformDateToString from "../../scripts/tranformDateToString";
import Text from "../_common/_styles/Text.styled";
import { MessageContainer, MessagesWrapper, SentTime } from "./styles";


interface IProps {
    messages: Message[]
}

const Messages: React.FC<IProps> = ({ messages }) => {

    const token = useDecodedToken(TokenTypes.accessToken);

    return (
        <MessagesWrapper>
            <FlatList
                data={[...messages].reverse()}
                inverted
                renderItem={({ item, index }) => (
                    <MessageContainer
                        messageType={
                            item.userId === token.sub
                                ? messageTypes.TO
                                : messageTypes.FROM
                        }
                        style={index === messages.length - 1 && { marginTop: 15 }}>
                        <Text>{item.text}</Text>
                        <SentTime>{transformDateToString(item.createdAt)}</SentTime>
                    </MessageContainer>
                )} />
        </MessagesWrapper>
    )
}

export default Messages;