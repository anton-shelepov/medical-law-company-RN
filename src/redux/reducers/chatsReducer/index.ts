import { messageTypes } from "../../../constants/enums";
import { IChatsState } from "./types.d";

const initialState: IChatsState = {
    chats: [
        {
            id: 1,
            messageType: messageTypes.FROM,
            userImageSrc: 'https://i1.wp.com/avatar-management--avatars.us-west-2.prod.public.atl-paas.net/default-avatar-1.png?ssl=1',
            chatName: "Врач",
            userName: "Иванов Иван Иванович",
            message: "Текст (от лат. textus — ткань; сплетение, сочетание) — зафиксированная на каком-либо материальном носителе человеческая мысль; в общем плане связная и полная последовательность символов.",
        },
        {
            id: 2,
            messageType: messageTypes.FROM,
            userImageSrc: 'https://i1.wp.com/avatar-management--avatars.us-west-2.prod.public.atl-paas.net/default-avatar-1.png?ssl=1',
            chatName: "Юрист",
            userName: "Иванов Иван Иванович",
            message: "Текст (от лат. textus — ткань; сплетение, сочетание) — зафиксированная на каком-либо материальном носителе человеческая мысль; в общем плане связная и полная последовательность символов.",
        },
        {
            id: 3,
            messageType: messageTypes.FROM,
            userImageSrc: 'https://i1.wp.com/avatar-management--avatars.us-west-2.prod.public.atl-paas.net/default-avatar-1.png?ssl=1',
            chatName: "Менеджер",
            userName: "Иванов Иван Иванович",
            message: "Текст (от лат. textus — ткань; сплетение, сочетание) — зафиксированная на каком-либо материальном носителе человеческая мысль; в общем плане связная и полная последовательность символов.",
        },

    ]
}

const chatsReducer = (state = initialState, action: any,) => {
    switch (action) {
        case '':
            return state

        default:
            return state
    }
}

export default chatsReducer;