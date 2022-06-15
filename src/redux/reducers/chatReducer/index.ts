import { IChatState } from "./types";

const initialState: IChatState = {
    chatInfo: {
        chatName: "Врач",
        userName: "Иванов Иван Иванович",
        userImageSrc: "https://i1.wp.com/avatar-management--avatars.us-west-2.prod.public.atl-paas.net/default-avatar-1.png?ssl=1",
    },
    messages: []
}

const chatReducer = (state = initialState, action: any) => {
    switch (action.type) {

        case 'SET_MESSAGES':
            return {
                ...state,
                messages: action.payload
            }

        default:
            return state
    }
}

export default chatReducer;