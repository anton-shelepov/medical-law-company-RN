import { useNavigation } from "@react-navigation/native";
import { AxiosResponse } from "axios";
import React, { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import recommendationsAPI from "../../../../api/recommendations.api";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import transformDateToString from "../../../../scripts/tranformDateToString";
import DatePicker from "../../buttons/DatePicker";
import FilledButton from "../../buttons/FilledButton";
import LabeledTextArea from "../../inputs/LabeledTextArea";
import { Wrapper } from "./styles";

export interface ICreateRecommendationFormData {
    name: string;
    description: string;
}

interface IProps {
    userId: number,
    group: string,
}

const CreateRecommendationForm: React.FC<IProps> = ({ userId, group }) => {

    const { control, handleSubmit, reset, formState: { errors } } = useForm();

    const [dateValue, setDateValue] = useState(new Date());

    const navigation = useNavigation();
    const dispatch = useAppDispatch()

    const onHandleSubmit: SubmitHandler<ICreateRecommendationFormData> = async (formData) => { // TODO: remove async
        const data = {
            ...formData,
            executionDate: transformDateToString(dateValue),
            group,
        }
        const response: AxiosResponse = await recommendationsAPI.createNewRecommendation(userId, data) // TODO: Вынести запрос и dispatch логику в Redux saga и reducers
        setDateValue(new Date())
        reset({
            name: '',
            description: '',
        })
        navigation.goBack();
    }

    return (
        <Wrapper>
            <Controller
                control={control}
                render={({ field }) => (
                    <LabeledTextArea
                        field={field}
                        errors={errors}
                        label="Заголовок"
                        textAlignV="center"
                    />
                )}
                name="name"
            />

            <Controller
                control={control}
                render={({ field }) => (
                    <LabeledTextArea
                        field={field}
                        errors={errors}
                        label="Описание рекомендации "
                        minHeight="200px"
                    />
                )}
                name="description"
            />

            <DatePicker
                title="Назначить дату выполнения"
                setDateValue={setDateValue}
                dateValue={dateValue}
            />

            <FilledButton
                title="Создать рекомендацию"
                onPress={handleSubmit(onHandleSubmit)}
            />
        </Wrapper>
    );
}

export default CreateRecommendationForm;