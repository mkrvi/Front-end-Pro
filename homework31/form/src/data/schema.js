import * as yup from "yup";

export const schemaFirstStep = yup
    .object({
        firstName: yup.string().matches(/^[A-Za-z]+$/, 'Allowed only en letters').required(),
        lastName: yup.string().matches(/^[A-Za-z]+$/, 'Allowed only en letters').required(),
        email: yup.string().nullable().email().matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Enter valid email').required(),
    })
    .required();

export const schemaSecondStep = yup
    .object({
            password: yup.string().required('Password is required'),
            passwordConfirmation: yup.string()
                .oneOf([yup.ref('password'), null], 'Passwords must match')
    })
    .required();

export const schemaThirdStep = yup
    .object({
        image: yup.string()
})

