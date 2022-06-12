import * as yup from "yup";
import { fieldIsRequired, minMaxlength } from "../../../../scripts/validationMessages";

const AuthFormSchema = yup.object().shape({

    phoneNumber: yup.string()
        .matches(/^(\+7)\d{10}$/, 'Введите корректный номер телефона (+7...)')
        .required(fieldIsRequired("Номер телефона")),

    password: yup.string()
        .min(8, minMaxlength('min', 8))
        .max(32, minMaxlength('max', 32))
        .required(fieldIsRequired("Пароль")),

});

export default AuthFormSchema;