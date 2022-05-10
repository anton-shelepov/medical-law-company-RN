export function fieldIsRequired(name) {
    return `Пожалуйста введите: ${name}*`
}

export function minMaxlength(type: 'min' | 'max', count: number) {
    switch (type) {
        case "min":
            return `Необходимо ввести более ${count} символов*`

        case "max":
            return `Необходимо ввести менее ${count} символов*`
    }
}