import React from "react";
import { FlatList } from "react-native";
import { useAppSelector } from "../../hooks/useAppSelector";
import Text from "../_common/_styles/Text.styled";
import { MessageContainer, MessagesWrapper, SentTime } from "./styles";

const Messages: React.FC = () => {

    const messages = useAppSelector(state => state.chat.messages)

    return (
        <MessagesWrapper>
            <FlatList
                data={messages}
                initialScrollIndex={messages.length - 1}
                renderItem={({item, index}) => (
                    <MessageContainer messageType={item.type} style={index === 0 && {marginTop: 15}}>
                        <Text>{item.messageText}</Text>
                        <SentTime>{item.sentDate}</SentTime>
                    </MessageContainer>
                )} />
        </MessagesWrapper>
    )
}

export default Messages;