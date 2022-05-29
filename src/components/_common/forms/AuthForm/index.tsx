import React from "react";
import { View } from "react-native";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import ValidatedTextInput from "../../inputs/ValidatedTextInput";
import FilledButton from "../../buttons/FilledButton";
import { yupResolver } from "@hookform/resolvers/yup";
import AuthFormSchema from "./schema";
import { signinRequest } from "../../../../redux/reducers/userReducer/userActions";

export interface IAuthFormData {
    phoneNumber: string;
    password: string;
}

const AuthForm: React.FC = () => {
    const {control, handleSubmit, reset ,formState: {errors}} = useForm({
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
    return (
        <View style={{width: '100%', flex: 1, marginTop: 60}}>
            <Controller
                control={control}
                render={({field}) => (
                    <ValidatedTextInput
                        colors="light"
                        field={field}
                        errors={errors}
                        placeholder={"Номер телефона"}
                    />
                )}
                name="phoneNumber"
            />

            <Controller
                control={control}
                render={({field}) => (
                    <ValidatedTextInput
                        colors="light"
                        field={field}
                        errors={errors}
                        placeholder={"Пароль"}
                        secureTextEntry={true}
                    />
                )}
                name="password"
            />
            <FilledButton title="Авторизоваться" onPress={handleSubmit(onHandleSubmit)} />
        </View>
    );
}

export default AuthForm;