import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import ChatHeaderTitle from "../components/ChatHeaderTitle";
import Messages from "../components/Messages";
import { RootStackParamList } from "../navigators/RootStackNavigator";

type ChatProps = NativeStackScreenProps<RootStackParamList, "Chat">

const Chat: React.FC<ChatProps> = ({navigation, route: {params}}) => {

    useEffect(() => {
        navigation.setOptions({
            headerTitle:
                () => <ChatHeaderTitle
                    id={params.id}
                />,
            headerBackVisible: false,
            headerTitleAlign: "left",
        })
    }, [])

    return (
        <>
            <Messages />
        </>
    )
}

export default Chat;