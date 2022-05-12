import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { TextInput } from "react-native";
import AuthFormSchema from "./schema";
import { Container, SendMessageBtn } from "./styles";


interface IFormData {
    messageText: string,
}

const CreateNewMessageForm: React.FC = () => {
    const {control, handleSubmit, reset, formState: {errors}} = useForm({
        resolver: yupResolver(AuthFormSchema),
    });
    const onHandleSubmit: SubmitHandler<IFormData> = (data) => {
        console.log(data)
        reset({
            messageText: '',
        })
    }

    return (
        <Container>
            <Controller
                control={control}
                render={({field}) => (
                    <TextInput

                    />
                )}
                name="messageText"
            />

            <SendMessageBtn title="" onPress={handleSubmit(onHandleSubmit)} />
        </Container>
    );
}

export default CreateNewMessageForm;