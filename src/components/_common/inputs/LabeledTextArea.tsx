import React, { useState } from "react";
import { ControllerRenderProps, FieldValues } from "react-hook-form";
import { View } from "react-native";
import Text from "../_styles/Text.styled";
import { TextAreaScalable } from "../_styles/TextAreaScalable.styled";


interface IProps {
    label: string,
    field: ControllerRenderProps<FieldValues, any>;
    errors: { [x: string]: any; }
    placeholder?: string,
    minHeight?: string,
    textAlignV?: 'top' | 'center' | 'bottom',
}

const LabeledTextArea: React.FC<IProps> = ({
    label,
    placeholder,
    field: { name, onChange, onBlur, ref, value },
    errors,
    minHeight,
    textAlignV = 'top'
}) => {

    const [isFocused, setIsFocused] = useState(false);

    const onInputFocus = () => {
        setIsFocused(true)
    }

    const onInputBlur = () => {
        setIsFocused(false)
        onBlur()
    }

    return (
        <View style={{ marginBottom: 10, marginTop: 10 }}>
            <Text style={{ marginBottom: 10 }}>{label}</Text>
            <TextAreaScalable
                value={value}
                ref={ref}
                isFocused={isFocused}
                onFocus={onInputFocus}
                onBlur={onInputBlur}
                onChangeText={onChange}
                minHeight={minHeight}
                textAlignV={textAlignV}
            />
        </View>
    )
}

export default LabeledTextArea;