import * as yup from "yup";
import { fieldIsRequired, minMaxlength } from "../../../../scripts/validationMessages";

const CreateNewMessageFormSchema = yup.object().shape({

    phone: yup.string()
        .required(fieldIsRequired("Номер телефона")),

    password: yup.string()
        .min(8, minMaxlength('min', 8))
        .max(32, minMaxlength('max', 32))
        .required(fieldIsRequired("Пароль")),

});

export default CreateNewMessageFormSchema;