import yup from 'services/validates/yup';

export const validationsLogin = yup.object().shape({
  email: yup
    .string()
    .email('Insira um email válido')
    .required('O login precisa ser preenchido'),
  password: yup
    .string()
    .min(3, 'Insira uma senha forte')
    .required('A senha precisa ser preenchido'),
});
