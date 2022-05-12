import { messageTypes } from "../../../common/constants/enums";
import { IChatState } from "./types";

const initialState: IChatState = {
    chatInfo: {
        chatName: "Врач",
        userName: "Иванов Иван Иванович",
        userImageSrc: "https://i1.wp.com/avatar-management--avatars.us-west-2.prod.public.atl-paas.net/default-avatar-1.png?ssl=1",
    },
    messages: [
        {
            id: 1,
            messageText: `Существуют две основные трактовки понятия «текст»: имманентная (расширенная, 
            философски нагруженная) и репрезентативная (более частная). Имманентный подход подразумевает 
            отношение к тексту как к автономной реальности, нацеленность на выявление его внутренней структуры. 
            Репрезентативный — рассмотрение текста как особой формы представления информации о внешней`,
            type: messageTypes.TO,
            sentDate: "22.03.2022"
        }
    ]
}

const chatReducer = (state = initialState, action: any) => {
    switch (action) {
        case '':
            return state

        default:
            return state
    }
}

export default chatReducer;