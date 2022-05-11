import { IRecommendationsState, RecommendationStatuses } from "./types.d";

const initialState: IRecommendationsState = {
    recommendations: [
        {
            id: 1,
            title: "Кардиолог",
            status: RecommendationStatuses.IN_PROCESS,
            executionTime: new Date().toLocaleDateString("en-GB").replace(/\//g, '.'),
            recommendationText: "Текст (от лат. textus — ткань; сплетение, сочетание) — зафиксированная на каком-либо материальном носителе человеческая мысль; в общем плане связная и полная последовательность символов.",
            employeePosition: "lawyer",
        },
        {
            id: 2,
            title: "Кардиолог",
            status: RecommendationStatuses.IN_PROCESS,
            executionTime: new Date().toLocaleDateString("en-GB").replace(/\//g, '.'),
            recommendationText: "Текст (от лат. textus — ткань; сплетение, сочетание) — зафиксированная на каком-либо материальном носителе человеческая мысль; в общем плане связная и полная последовательность символов.",
            employeePosition: "lawyer",
        },
        {
            id: 3,
            title: "Кардиолог",
            status: RecommendationStatuses.IN_PROCESS,
            executionTime: new Date().toLocaleDateString("en-GB").replace(/\//g, '.'),
            recommendationText: "Текст (от лат. textus — ткань; сплетение, сочетание) — зафиксированная на каком-либо материальном носителе человеческая мысль; в общем плане связная и полная последовательность символов.",
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