import { messageTypes } from "../../../constants/enums";
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
            messageText: `Привет 😊! Я Ваш врач! В ходе Вашего освобождения мы будем общаться в этом чате!`,
            type: messageTypes.FROM,
            sentDate: "12:01"
        },
        {
            id: 3,
            messageText: `Здравствуйте, обязательно делать УЗИ почек? Пол года назад делал, всё было в норме, результаты не сохранились`,
            type: messageTypes.TO,
            sentDate: "12:10"
        },
        {
            id: 4,
            messageText: `Здравствуйте, Желательно пройти узи почек. Хорошего дня!`,
            type: messageTypes.FROM,
            sentDate: "12:15"
        },
        {
            id: 5,
            messageText: `Если Вы не знаете, к кому обратиться с Вашим вопросом, пишите мне - со всем разберусь и сориентирую Вас по результату!`,
            type: messageTypes.FROM,
            sentDate: "12:20"
        },
        {
            id: 2,
            messageText: `Все имеющиеся мед. заключения и документы я приложил при ответе на вопросы`,
            type: messageTypes.TO,
            sentDate: "12:05"
        },
{
            id: 6,
            messageText: `Здравствуйте, дублирую информацию: мое рабочее время с 6:30-15:00 по Мск. Суббота, воскресенье - выходные.
Вам необходимо выполнить:
1. Ультразвуковое исследование почек (УЗИ почек) - по возможности платно.
2. Анализ крови на уровень тиреотропного гормона (кровь на ТТГ) - по возможности платно.
3. Фото торса спереди, с обоих боков, сзади, а так же фотографии всех проблем с кожей + родинки при наличии.
4. Фото стоп (как на фото, т.е прислать фото правой и левой стопы со стороны большого пальца) + отпечаток стоп (намазать стопу краской, аккуратно с пятки на носок наступить на белый лист бумаги, который лежит на твердой поверхности, если отпечаталась только верхняя и нижняя часть стопы, не нужно пытаться вдавить стопу сильнее).
5. Прислать фото всех имеющихся у вас медицинских документов (т.е амбулаторная карта - можно сфотографировать лист уточненных диагнозов в начале карты, заключения всех платных исследований, если были).
❗ВАЖНО: Фото отправляете в вертикальном виде. НЕ НУЖНО фотографировать: ОРВИ, ОРЗ, грипп, "здоров", "прививка", "осмотр", "патронаж".
7.Ведение дневника давления с пульсом в течение 7 дней утром и вечером с указанием всех возникающих в эти дни жалоб.
Хорошего дня!`,
            type: messageTypes.FROM,
            sentDate: "12:05"
        },

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