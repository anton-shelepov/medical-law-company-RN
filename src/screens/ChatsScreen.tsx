import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import ChatListCard from "../components/ChatListCard";
import { useAppSelector } from "../hooks/useAppSelector";
import Container from "../components/_common/_styles/Container.styled";

const ChatsScreen: React.FC = () => {

    const chatsData = useAppSelector(state => state.chats.chats);

    return (
        <Container>
            <FlatList data={chatsData} renderItem={info => (
                <TouchableOpacity>
                    <ChatListCard chatData={info.item} />
                </TouchableOpacity>
            )} />
        </Container>
    )
}

export default ChatsScreen;