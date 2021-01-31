import yup from 'utils/yup'

const defaultMessageLogin = 'O login e a senha precisam ser preenchidos'
export const validationsLogin = yup.object().shape({
  email: yup.string().email(defaultMessageLogin).required(defaultMessageLogin),
  password: yup.string().min(8, defaultMessageLogin).required(defaultMessageLogin)
})

export const validationsForgotPassword = yup.object().shape({
  email: yup.string().email().required()
})

export const validationsForgotPasswordCode = yup.object().shape({
  password_one: yup.string().required().min(8),
  password_two: yup.string()
    .oneOf([yup.ref('password_one'), null], 'Senha não são iguais')
    .required().min(8)
})
