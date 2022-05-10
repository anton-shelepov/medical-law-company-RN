
const initialState = {
    recommendations: [

    ]
}

const recommendationsReducer = (action: any, state = initialState) => {
    switch (action) {
        case '':
            return state

        default:
            return state
    }
}

export default recommendationsReducer