const ending = (num: number) => {
    switch ((+num.toString().charAt(0)) !== 1 ? (+num.toString().slice(-1)) : 0) {
        case 1:
            return ''

        case 2:
            return 'a'

        case 3:
            return 'a'

        case 4:
            return 'a'

        default:
            return 'ов'
    }
}

export default ending;