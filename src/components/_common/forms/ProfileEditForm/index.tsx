import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import ValidatedTextInput from "../../inputs/ValidatedTextInput";
import AuthFormSchema from "./schema";
import { SectionName, ProfileEditContainer, InputsContainer, SubmitButton } from "./styles";

interface IFormData {
    fullName: string,
    oldPassword: string,
    newPassword: string,
    confirmNewPassword: string,
}

interface IProps {

}

const ProfileEditForm: React.FC<IProps> = () => {

    const {control, handleSubmit, reset, formState: {errors}} = useForm({
        resolver: yupResolver(AuthFormSchema),
    });

    const onHandleSubmit: SubmitHandler<IFormData> = (data) => {

    }

    return (
        <ProfileEditContainer>
            <InputsContainer>

                <SectionName>Личное</SectionName>

                <Controller
                    control={control}
                    render={({field}) => (
                        <ValidatedTextInput
                            field={field}
                            errors={errors}
                            placeholder={"ФИО"}
                        />
                    )}
                    name="fullName"
                />

                <SectionName>Безопасность</SectionName>

                <Controller
                    control={control}
                    render={({field}) => (
                        <ValidatedTextInput
                            field={field}
                            errors={errors}
                            placeholder={"Старый пароль"}
                            secureTextEntry={true}
                        />
                    )}
                    name="oldPassword"
                />


                <Controller
                    control={control}
                    render={({field}) => (
                        <ValidatedTextInput
                            field={field}
                            errors={errors}
                            placeholder={"Новый пароль"}
                            secureTextEntry={true}
                        />
                    )}
                    name="newPassword"
                />

                <Controller
                    control={control}
                    render={({field}) => (
                        <ValidatedTextInput
                            field={field}
                            errors={errors}
                            placeholder={"Подтвердите новый пароль"}
                            secureTextEntry={true}
                        />
                    )}
                    name="confirmNewPassword"
                />
            </InputsContainer>

            <SubmitButton title="Сохранить изменения" />

        </ProfileEditContainer>
    );
}

export default ProfileEditForm;