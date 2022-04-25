
const initialState = {

}

const homeReducer = (action: any, state = initialState) => {
    switch (action) {
        case '':
            return state

        default:
            return state
    }
}

export default homeReducer