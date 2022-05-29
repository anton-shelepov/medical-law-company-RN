import { recommendationStatuses } from "../../../constants/enums";
import { IRecommendationsState } from "./types";

const initialState: IRecommendationsState = {
    recommendations: [
        {
            id: 1,
            title: "Военкомат",
            status: recommendationStatuses.IN_PROCESS,
            executionTime: new Date().toLocaleDateString("en-GB").replace(/\//g, '.'),
            recommendationText: "Жалобы на повышенное давление, показываете результаты ЭКГ, холтера, имеются значительные отклонения характерные для непризывного заболевания. Просите направить вас на холтер, после чего сообщите дату записи и результаты посещения кардиолога, для того, чтобы мы могли дальше нарабатывать историю болезни",
            employeePosition: "lawyer",
        },
        {
            id: 2,
            title: "Делопроизводство",
            status: recommendationStatuses.IN_PROCESS,
            executionTime: new Date().toLocaleDateString("en-GB").replace(/\//g, '.'),
            recommendationText: "Жалобы на повышенное давление, показываете результаты ЭКГ, холтера, имеются значительные отклонения характерные для непризывного заболевания. Просите направить вас на холтер, после чего сообщите дату записи и результаты посещения кардиолога, для того, чтобы мы могли дальше нарабатывать историю болезни",
            employeePosition: "lawyer",
        },
        {
            id: 3,
            title: "Кардиолог",
            status: recommendationStatuses.IN_PROCESS,
            executionTime: new Date().toLocaleDateString("en-GB").replace(/\//g, '.'),
            recommendationText: "Жалобы на повышенное давление, показываете результаты ЭКГ, холтера, имеются значительные отклонения характерные для непризывного заболевания. Просите направить вас на холтер, после чего сообщите дату записи и результаты посещения кардиолога, для того, чтобы мы могли дальше нарабатывать историю болезни",
            employeePosition: "doctor",
        },
        {
            id: 4,
            title: "Терапевт",
            status: recommendationStatuses.IN_PROCESS,
            executionTime: new Date().toLocaleDateString("en-GB").replace(/\//g, '.'),
            recommendationText: "Жалобы на повышенное давление, показываете результаты ЭКГ, холтера, имеются значительные отклонения характерные для непризывного заболевания. Просите направить вас на холтер, после чего сообщите дату записи и результаты посещения кардиолога, для того, чтобы мы могли дальше нарабатывать историю болезни",
            employeePosition: "doctor",
        },
        {
            id: 5,
            title: "Невролог",
            status: recommendationStatuses.IN_PROCESS,
            executionTime: new Date().toLocaleDateString("en-GB").replace(/\//g, '.'),
            recommendationText: "Жалобы на повышенное давление, показываете результаты ЭКГ, холтера, имеются значительные отклонения характерные для непризывного заболевания. Просите направить вас на холтер, после чего сообщите дату записи и результаты посещения кардиолога, для того, чтобы мы могли дальше нарабатывать историю болезни",
            employeePosition: "doctor",
        },
        {
            id: 5,
            title: "Эндокринолог",
            status: recommendationStatuses.IN_PROCESS,
            executionTime: new Date().toLocaleDateString("en-GB").replace(/\//g, '.'),
            recommendationText: "Жалобы на повышенное давление, показываете результаты ЭКГ, холтера, имеются значительные отклонения характерные для непризывного заболевания. Просите направить вас на холтер, после чего сообщите дату записи и результаты посещения кардиолога, для того, чтобы мы могли дальше нарабатывать историю болезни",
            employeePosition: "doctor",
        },
        {
            id: 6,
            title: "Уролог",
            status: recommendationStatuses.IN_PROCESS,
            executionTime: new Date().toLocaleDateString("en-GB").replace(/\//g, '.'),
            recommendationText: "Жалобы на повышенное давление, показываете результаты ЭКГ, холтера, имеются значительные отклонения характерные для непризывного заболевания. Просите направить вас на холтер, после чего сообщите дату записи и результаты посещения кардиолога, для того, чтобы мы могли дальше нарабатывать историю болезни",
            employeePosition: "doctor",
        },
        {
            id: 7,
            title: "Невролог",
            status: recommendationStatuses.IN_PROCESS,
            executionTime: new Date().toLocaleDateString("en-GB").replace(/\//g, '.'),
            recommendationText: "Жалобы на повышенное давление, показываете результаты ЭКГ, холтера, имеются значительные отклонения характерные для непризывного заболевания. Просите направить вас на холтер, после чего сообщите дату записи и результаты посещения кардиолога, для того, чтобы мы могли дальше нарабатывать историю болезни",
            employeePosition: "doctor",
        },

    ]
}

const recommendationsReducer = (state = initialState, action: any,) => {
    switch (action) {
        case '':
            return state

        default:
            return state
    }
}

export default recommendationsReducer