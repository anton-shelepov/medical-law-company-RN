import * as ImagePicker from 'expo-image-picker';
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import IoniconsSelector from "../../../../utils/IoniconsSelector";
import { Container, MessageButton, MessageTextInput } from "./styles";


interface IFormData {
    messageText: string,
}

interface IProps {
    textInputPlaceholder?: string,
    withFilePickerButton?: boolean,
    onMessageSubmit: (data: { messageText: string }) => void
}

const CreateNewMessageForm: React.FC<IProps> = ({
    textInputPlaceholder = "Сообщение...",
    withFilePickerButton = true,
    onMessageSubmit,
}) => {

    const { control, handleSubmit, reset } = useForm();

    const onHandleSubmit: SubmitHandler<IFormData> = (data) => {
        onMessageSubmit(data)
        reset({
            messageText: '',
        })
    }

    const onHandleImageSelect = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                quality: 1,
            })

            if (result.cancelled === false) {
                // const formData = new FormData();
                // const image: any = {
                //     uri: result.uri,
                //     name: result.uri.split('/').pop(),
                //     type: 'image/' + result.uri.split('.').pop(),
                // }
                // formData.append('image', image)
                console.log(result.base64)
            }
            return false
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Container>
            {withFilePickerButton &&
                <MessageButton onPress={onHandleImageSelect}>
                    <IoniconsSelector iconName="attach" size={30} color="#838383" />
                </MessageButton>
            }

            <Controller
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                    <MessageTextInput
                        {...field}
                        onChangeText={field.onChange}
                        multiline={true}
                        style={!withFilePickerButton && { paddingLeft: 15 }}
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