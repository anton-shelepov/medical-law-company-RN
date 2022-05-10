import React, { useState } from "react";
import TextInput from "../styles/common/TextInput.styled";
import { ControllerRenderProps, FieldValues } from "react-hook-form";
import ErrorText from "../styles/common/ErrorText.styled";

interface IProps {
    placeholder: string;
    field: ControllerRenderProps<FieldValues, string>;
    errors: {[x: string]: any;}
    secureTextEntry?: boolean
}

const ValidatedTextInput: React.FC<IProps> =
    ({
         field: {name, onChange, onBlur, ref, value},
         errors,
         placeholder,
         secureTextEntry,
     }) => {

        const [isFocused, setIsFocused] = useState(false)

        const onInputFocus = () => {
            setIsFocused(true)
        }

        const onInputBlur = () => {
            setIsFocused(false)
            onBlur()
        }

        return (
            <>
                <TextInput
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
            </>

        )
    }

export default ValidatedTextInput
