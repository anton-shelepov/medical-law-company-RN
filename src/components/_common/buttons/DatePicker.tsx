import RNDateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import TransparentButton from "./TransparentButton";


interface IProps {
    dateValue: Date,
    setDateValue: React.Dispatch<React.SetStateAction<Date>>,
    title: string,
}

const DatePicker: React.FC<IProps> = ({ setDateValue, title, dateValue }) => {

    const [isOpen, setIsOpen] = useState(false);

    const onHandleDateSelect = (event: any, date?: Date) => {

        setIsOpen(false)

        if (event.type === 'dismissed')
            return

        setDateValue(event.nativeEvent.timestamp)
    }

    return (
        <>
            <TransparentButton
                fontSize={16}
                title={title}
                onPress={() => setIsOpen(true)}
            />

            {isOpen ? (
                <RNDateTimePicker
                    onChange={onHandleDateSelect}
                    textColor='red'
                    value={dateValue}
                />
            ) : <></>}
        </>
    )
}

export default DatePicker;