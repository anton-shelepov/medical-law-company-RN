import { yupResolver } from "@hookform/resolvers/yup";
import { AxiosResponse } from "axios";
import React, { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import usersAPI from "../../../../api/users.api";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { currentUserDataFetchRequest } from "../../../../redux/reducers/userReducer/userActions";
import ValidatedTextInput from "../../inputs/ValidatedTextInput";
import ErrorText from "../../_styles/ErrorText.styled";
import ProfileEditFormSchema from "./schema";
import { InputsContainer, ProfileEditContainer, SectionName, SubmitButton } from "./styles";

interface IFormData {
    fullName: string,
    oldPassword: string,
    newPassword: string,
    confirmNewPassword: string,
}

interface IProps {

}

const ProfileEditForm: React.FC<IProps> = () => {

    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(ProfileEditFormSchema),
    });

    const [error, setError] = useState(null) // TODO: Вынести ошибку в reducer
    const dispatch = useAppDispatch()

    const onHandleSubmit: SubmitHandler<IFormData> = async (formData) => {

        const data = {};

        for (let key in formData) {
            if (formData[key] !== undefined) {
                data[key] = formData[key]
            }
        }

        if (Object.getOwnPropertyNames(data).length === 0)
            return

        usersAPI.changeCurrentUserData(formData).then((response: AxiosResponse) => { // TODO: Вынести логику по запросам и dispatch в redux saga и reducer
            dispatch(currentUserDataFetchRequest())
        }).catch(error => { setError('Неверно введен старый (текущий) пароль') })

        reset({
            fullName: undefined,
            oldPassword: undefined,
            newPassword: undefined,
            confirmNewPassword: undefined,
        })
    }

    return (
        <ProfileEditContainer>
            <InputsContainer>

                <SectionName>Личное</SectionName>

                <Controller
                    control={control}
                    render={({ field }) => (
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
                    render={({ field }) => (
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
                    render={({ field }) => (
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
                    render={({ field }) => (
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

            { // TODO: Получать ошибку из reducer
                error &&
                <ErrorText style={{ marginBottom: 15, alignSelf: "center" }}>
                    {error}
                </ErrorText>
            }

            <SubmitButton onPress={handleSubmit(onHandleSubmit)} title="Сохранить изменения" />

        </ProfileEditContainer>
    );
}

export default ProfileEditForm;