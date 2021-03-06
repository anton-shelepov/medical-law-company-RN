import React, { useState } from "react";
import { View } from "react-native";
import TextInput from "../_styles/TextInput.styled";
import { ControllerRenderProps, FieldValues } from "react-hook-form";
import ErrorText from "../_styles/ErrorText.styled";

interface IProps {
    placeholder: string;
    field: ControllerRenderProps<FieldValues, any>;
    errors: { [x: string]: any; }
    secureTextEntry?: boolean;
    maxLength?: number;
    onFocusInitialValue?: string;
}

const ValidatedTextInput: React.FC<IProps> =
    ({
        field: { name, onChange, onBlur, ref, value },
        errors,
        placeholder,
        secureTextEntry,
        maxLength = 150,
        onFocusInitialValue,
    }) => {

        const [isFocused, setIsFocused] = useState(false)

        const onInputFocus = () => {
            if (onFocusInitialValue && value === undefined || value === '') {
                onChange(onFocusInitialValue)
            }
            setIsFocused(true)
        }

        const onInputBlur = () => {
            setIsFocused(false)
            onBlur()
        }

        return (
            <View style={{ marginBottom: 15 }}>
                <TextInput
                    maxLength={maxLength}
                    onFocus={onInputFocus}
                    onBlur={onInputBlur}
                    hasError={errors?.[name]}
                    onChangeText={onChange}
                    ref={ref}
                    value={value}
                    isFocused={isFocused}
                    placeholder={placeholder}
                    secureTextEntry={secureTextEntry}
                />
                {errors?.[name] && <ErrorText>{errors?.[name]?.message || "Неизвестная ошибка"}</ErrorText>}
            </View>
        )
    }

export default ValidatedTextInput
