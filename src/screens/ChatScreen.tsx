import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import usersAPI from "../api/users.api";
import ChatHeaderTitle from "../components/ChatHeaderTitle";
import Messages from "../components/Messages";
import CreateNewMessageForm from "../components/_common/forms/CreateNewMessageForm";
import { useAppDispatch } from "../hooks/useAppDispatch";
import useChat from "../hooks/useChat";
import { RootStackParamList } from "../navigators/RootStackNavigator";

type ChatProps = NativeStackScreenProps<RootStackParamList, "Chat">

const ChatScreen: React.FC<ChatProps> = ({ navigation, route: { params } }) => {

    const dispatch = useAppDispatch()

    const { roomId, sendMessage, removeMessage, messages, leaveRoom } = useChat(params.id)

    useEffect(() => {
        usersAPI.fetchOneUser(params.id).then(response => {
            console.log(response.data)
            navigation.setOptions({
                headerTitle: () => <ChatHeaderTitle data={response.data} />,
                headerBackVisible: false,
                headerTitleAlign: "left",
            })
        })
    }, [])

    navigation.addListener('blur', () => {
        console.log('blur')
        leaveRoom();
        dispatch({ type: 'SET_MESSAGES', payload: [] })
    })

    return (
        <>
            <Messages messages={messages} />
            <CreateNewMessageForm onMessageSubmit={sendMessage} />
        </>
    )
}

export default ChatScreen;