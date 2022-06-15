const translateEmployeePosition = (position: string) => {
    switch (position) {
        case "DOCTOR":
            return 'Врач'

        case "LAWYER":
            return "Юрист"

        case "MANAGER":
            return "Менеджер"

        default:
            return 'unknown position'
    }
}

export default translateEmployeePosition;