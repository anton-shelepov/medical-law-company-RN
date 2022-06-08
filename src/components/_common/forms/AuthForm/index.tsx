import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { View } from "react-native";
import { errorTypes } from "../../../../constants/enums";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { signinRequest } from "../../../../redux/reducers/userReducer/userActions";
import FilledButton from "../../buttons/FilledButton";
import ValidatedTextInput from "../../inputs/ValidatedTextInput";
import ErrorText from "../../_styles/ErrorText.styled";
import AuthFormSchema from "./schema";

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
    const user = useAppSelector(state => state.user)

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
                user.error?.type === errorTypes.AUTH &&
                <ErrorText style={{ marginBottom: 15, alignSelf: "center" }}>
                    {user.error.message}
                </ErrorText>
            }

            <FilledButton
                title="Авторизоваться"
                isLoading={user.isLoading}
                onPress={handleSubmit(onHandleSubmit)}
            />
        </View>
    );
}

export default AuthForm;