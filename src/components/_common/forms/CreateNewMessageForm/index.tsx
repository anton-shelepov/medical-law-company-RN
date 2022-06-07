import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import IoniconsSelector from "../../../../utils/IoniconsSelector";
import AuthFormSchema from "./schema";
import { Container, MessageButton, MessageTextInput } from "./styles";

interface IFormData {
    messageText: string,
}

interface IProps {
    textInputPlaceholder?: string
}

const CreateNewMessageForm: React.FC<IProps> = ({ textInputPlaceholder = "Сообщение..." }) => {

    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(AuthFormSchema),
    });

    const onHandleSubmit: SubmitHandler<IFormData> = (data) => {
        console.log(data)
        reset({
            messageText: '',
        })
    }

    const onHandleImageSelect = () => {

    }

    return (
        <Container>
            <MessageButton onPress={onHandleImageSelect}>
                <IoniconsSelector iconName="attach" size={30} color="#838383" />
            </MessageButton>

            <Controller
                control={control}
                render={({ field }) => (
                    <MessageTextInput
                        multiline={true}
                        placeholder={textInputPlaceholder}
                    />
                )}
                name="messageText"
            />

            <MessageButton onPress={handleSubmit(onHandleSubmit)}>
                <IoniconsSelector iconName="send" size={26} color="#838383" />
            </MessageButton>
        </Container>
    );
}

export default CreateNewMessageForm;