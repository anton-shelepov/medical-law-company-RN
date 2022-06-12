import * as yup from "yup";
import { CORRECT_FULL_NAME, minMaxlength } from "../../../../scripts/validationMessages";

const ProfileEditFormSchema = yup.object().shape({

    fullName: yup.string()
        .optional()
        .matches(/[А-Яа-я]/g, CORRECT_FULL_NAME)
        .min(9, CORRECT_FULL_NAME)
        .max(40, CORRECT_FULL_NAME),

    oldPassword: yup.string()
        .optional()
        .min(8, minMaxlength('min', 8))
        .max(32, minMaxlength('max', 32)),

    newPassword: yup.string()
        .optional()
        .matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, 'Пароль слишком легкий')
        .min(8, minMaxlength('min', 8))
        .max(32, minMaxlength('max', 32)),

    confirmNewPassword: yup.string()
        .optional()

        .min(8, minMaxlength('min', 8))
        .max(32, minMaxlength('max', 32))
        .oneOf([yup.ref('newPassword'), null], 'Корректно подтвердите новый пароль'),

});

export default ProfileEditFormSchema;
