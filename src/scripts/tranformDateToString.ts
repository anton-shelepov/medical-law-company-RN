const transformDateToString = (date: Date | string) => {
    if (typeof date === 'string') {
        date = new Date(date)
    }
    function correctDayAndMonthFormat(dayOrMonth: number) {
        const dayOrMonthString: string = dayOrMonth.toString()
        if (dayOrMonthString.length === 1) {
            return "0" + dayOrMonthString;
        }
        return dayOrMonthString
    }
    const month = correctDayAndMonthFormat(date.getMonth())
    const day = correctDayAndMonthFormat(date.getDate())
    const year = date.getFullYear();
    return `${month}.${day}.${year}`;
}

export default transformDateToString;