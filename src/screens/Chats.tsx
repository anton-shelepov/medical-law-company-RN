import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import ChatListCard from "../components/ChatListCard";
import Container from "../components/styles/common/Container.styled";
import { useAppSelector } from "../hooks/useAppSelector";

const Chats: React.FC = () => {

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

export default Chats;