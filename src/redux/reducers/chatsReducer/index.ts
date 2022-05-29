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
            message: "Привет 😊! Я Ваш врач! В ходе Вашего освобождения мы будем общаться в этом чате",
        },
        {
            id: 2,
            messageType: messageTypes.FROM,
            userImageSrc: 'https://i1.wp.com/avatar-management--avatars.us-west-2.prod.public.atl-paas.net/default-avatar-1.png?ssl=1',
            chatName: "Юрист",
            userName: "Иванов Иван Иванович",
            message: "Привет 😊! Я Ваш юрист! В ходе Вашего освобождения мы будем общаться в этом чате!",
        },
        {
            id: 3,
            messageType: messageTypes.FROM,
            userImageSrc: 'https://i1.wp.com/avatar-management--avatars.us-west-2.prod.public.atl-paas.net/default-avatar-1.png?ssl=1',
            chatName: "Менеджер",
            userName: "Иванов Иван Иванович",
            message: "Привет 😊! Я Ваш менеджер! В ходе Вашего освобождения мы будем общаться в этом чате!",
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