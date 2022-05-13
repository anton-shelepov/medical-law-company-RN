import { recommendationStatuses } from "../../../constants/enums";
import { IRecommendationDetailsState } from "./types.d";

const initialState: IRecommendationDetailsState = {
    recommendationData: {
        id: 1,
        title: "Кардиолог",
        status: recommendationStatuses.IN_PROCESS,
        executionTime: new Date().toLocaleDateString("en-GB").replace(/\//g, '.'),
        recommendationText: "Текст (от лат. textus — ткань; сплетение, сочетание) — зафиксированная на каком-либо материальном носителе человеческая мысль; в общем плане связная и полная последовательность символов. Текст (от лат. textus — ткань; сплетение, сочетание) — зафиксированная на каком-либо материальном носителе человеческая мысль; в общем плане связная и полная последовательность символов. Текст (от лат. textus — ткань; сплетение, сочетание) — зафиксированная на каком-либо материальном носителе человеческая мысль; в общем плане связная и полная последовательность символов.",
        employeePosition: "lawyer",
    },
    userRecommendationResults: [
        {
            id: 1,
            resultText: "зафиксированная на каком-либо материальном носителе человеческая мысль; в общем плане связная и полная последовательность символов",
            sentDate: "22.03.2022",
            documentsImages: [
                "",
                ""
            ]
        },
        {
            id: 2,
            resultText: "зафиксированная на каком-либо материальном носителе человеческая мысль; в общем плане связная и полная последовательность символов",
            sentDate: "22.03.2022",
            documentsImages: [
                "",
                ""
            ]
        }
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