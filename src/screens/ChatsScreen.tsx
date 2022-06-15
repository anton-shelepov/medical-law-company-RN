import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import chatsAPI from "../api/chats.api";
import ActivityIndicatorView from "../components/ActivityIndicatorView";
import ChatListCard from "../components/ChatListCard";
import Container from "../components/_common/_styles/Container.styled";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";

const ChatsScreen: React.FC = () => {

    const chatsData = useAppSelector(state => state.chats.chats);

    const dispatch = useAppDispatch();
    const navigation = useNavigation();

    useEffect(() => { // FIXME: вынести логику по запросу в redux saga и reducer
        chatsAPI.fetchUserChatsWithEmployees().then(response => {
            dispatch({ type: 'SET_CHATS', payload: response.data })
        })
    }, [])

    navigation.addListener('focus', () => {
        chatsAPI.fetchUserChatsWithEmployees().then(response => {
            dispatch({ type: 'SET_CHATS', payload: response.data })
        })
    })

    return (
        <Container>
            {chatsData.length !== 0
                ? <FlatList data={chatsData} renderItem={info => (
                    <TouchableOpacity>
                        <ChatListCard chatData={info.item} />
                    </TouchableOpacity>
                )} />
                : <ActivityIndicatorView />}
        </Container>
    )
}

export default ChatsScreen;