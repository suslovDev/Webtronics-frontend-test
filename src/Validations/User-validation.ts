import * as yup from 'yup';
import 'yup-phone';

export const userSchema = yup.object().shape({
    name: yup.string().required("Ошибка в имени!"),
    email: yup.string().email(" ").required("Ошибка в Email!"),
    phone: yup.string().phone().required("Ошибка в номере"),
});

