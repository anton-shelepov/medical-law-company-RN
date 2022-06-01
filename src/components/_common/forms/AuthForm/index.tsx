import React from "react";
import { View } from "react-native";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import ValidatedTextInput from "../../inputs/ValidatedTextInput";
import FilledButton from "../../buttons/FilledButton";
import { yupResolver } from "@hookform/resolvers/yup";
import AuthFormSchema from "./schema";
import { signinRequest } from "../../../../redux/reducers/userReducer/userActions";
import ErrorText from "../../_styles/ErrorText.styled";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { errorTypes } from "../../../../constants/enums";

export interface IAuthFormData {
    phoneNumber: string;
    password: string;
}

const AuthForm: React.FC = () => {

    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(AuthFormSchema),
    });

    const dispatch = useAppDispatch()

    const onHandleSubmit: SubmitHandler<IAuthFormData> = (data) => {
        dispatch(signinRequest(data))
        reset({
            phoneNumber: '',
            password: '',
        })
    }
    const error = useAppSelector(state => state.user.error)

    return (
        <View style={{ width: '100%', flex: 1, marginTop: 60 }}>
            <View style={{ marginBottom: 15 }}>
                <Controller
                    control={control}
                    render={({ field }) => (
                        <ValidatedTextInput
                            field={field}
                            errors={errors}
                            maxLength={12}
                            onFocusInitialValue="+7"
                            placeholder={"Номер телефона"}
                        />
                    )}
                    name="phoneNumber"
                />

                <Controller
                    control={control}
                    render={({ field }) => (
                        <ValidatedTextInput
                            field={field}
                            errors={errors}
                            placeholder={"Пароль"}
                            secureTextEntry={true}
                        />
                    )}
                    name="password"
                />
            </View>

            {
                error?.type === errorTypes.AUTH &&
                <ErrorText style={{ marginBottom: 15, alignSelf: "center" }}>
                    {error.message}
                </ErrorText>
            }

            <FilledButton title="Авторизоваться" onPress={handleSubmit(onHandleSubmit)} />
        </View>
    );
}

export default AuthForm;