import { recommendationStatuses } from "../../../constants/enums";
import { IRecommendationDetailsState } from "./types.d";

const initialState: IRecommendationDetailsState = {
    recommendationData: {
        id: 1,
        title: "Кардиолог",
        status: recommendationStatuses.IN_PROCESS,
        executionTime: new Date().toLocaleDateString("en-GB").replace(/\//g, '.'),
        recommendationText: "Жалобы на повышенное давление, показываете результаты ЭКГ, холтера, имеются значительные отклонения характерные для непризывного заболевания. Просите направить вас на холтер, после чего сообщите дату записи и результаты посещения кардиолога, для того, чтобы мы могли дальше нарабатывать историю болезни",
        employeePosition: "lawyer",
    },
    userRecommendationResults: [
        {
            id: 1,
            resultText: "Прошел кардиолога, получил медицинское заключение, основной поставленный диагноз - тахикардия",
            sentDate: "22.03.2022",
            documentsImages: [
                "",
                ""
            ]
        },
        {
            id: 2,
            resultText: "Получил направление на холтер и ЭКГ, запись на следующий месяц",
            sentDate: "23.03.2022",
            documentsImages: [
                "",
                ""
            ]
        },
        {
            id: 3,
            resultText: "Получил направление на холтер и ЭКГ, запись на следующий месяц",
            sentDate: "24.03.2022",
            documentsImages: [
                "",
                ""
            ]
        },
        {
            id: 4,
            resultText: "Получил направление на холтер и ЭКГ, запись на следующий месяц",
            sentDate: "25.03.2022",
            documentsImages: [
                "",
                ""
            ]
        },
    ]

}

const recommendationDetailsReducer = (state = initialState, action: any,) => {
    switch (action) {
        case '':
            return state

        default:
            return state
    }
}

export default recommendationDetailsReducer