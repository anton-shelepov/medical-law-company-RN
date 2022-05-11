import { IChatsState, MessageTypes } from "./types.d";

const initialState: IChatsState = {
    chats: [
        {
            id: 1,
            messageType: MessageTypes.FROM,
            avatarSrc: '',
            chatName: "Врач",
            author: "Иванов Иван Иванович",
            message: "Текст (от лат. textus — ткань; сплетение, сочетание) — зафиксированная на каком-либо материальном носителе человеческая мысль; в общем плане связная и полная последовательность символов.",
        },
        {
            id: 2,
            messageType: MessageTypes.FROM,
            avatarSrc: '',
            chatName: "Юрист",
            author: "Иванов Иван Иванович",
            message: "Текст (от лат. textus — ткань; сплетение, сочетание) — зафиксированная на каком-либо материальном носителе человеческая мысль; в общем плане связная и полная последовательность символов.",
        },
        {
            id: 3,
            messageType: MessageTypes.FROM,
            avatarSrc: '',
            chatName: "Менеджер",
            author: "Иванов Иван Иванович",
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