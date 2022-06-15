import { IChatsState } from "./types.d";

const initialState: IChatsState = {
    chats: [],

}

const chatsReducer = (state = initialState, action: any,) => {
    switch (action.type) {
        case 'SET_CHATS':
            console.log(action)
            return {
                ...state,
                chats: action.payload.map(chat => ({
                    id: chat.id,
                    imageURL: chat.imageURL,
                    position: chat.position,
                    fullName: chat.fullName,
                    lastMessage: chat?.rooms[0]?.messages[0]?.text
                }))
            }

        default:
            return state
    }
}

export default chatsReducer;