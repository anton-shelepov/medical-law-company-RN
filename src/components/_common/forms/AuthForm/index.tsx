import React from "react";
import { View } from "react-native";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import ValidatedTextInput from "../../inputs/ValidatedTextInput";
import FilledButton from "../../buttons/FilledButton";
import { yupResolver } from "@hookform/resolvers/yup";
import AuthFormSchema from "./schema";


interface IFormData {
    phone: string;
    password: string;
}

const AuthForm: React.FC = () => {
    const {control, handleSubmit, reset ,formState: {errors}} = useForm({
        resolver: yupResolver(AuthFormSchema),
    });
    const onHandleSubmit: SubmitHandler<IFormData> = (data) => {
        console.log(data)
        reset({
            phone: '',
            password: '',
        })
    }

    return (
        <View>
            <Controller
                control={control}
                render={({field}) => (
                    <ValidatedTextInput
                        field={field}
                        errors={errors}
                        placeholder={"Номер телефона"}
                    />
                )}
                name="phone"
            />

            <Controller
                control={control}
                render={({field}) => (
                    <ValidatedTextInput
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