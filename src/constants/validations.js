import * as yup from 'yup';

export const validations = yup.object().shape({
	email: yup
		.string()
		.matches(
			/^[a-zA-Z]\w{3,}@\w{2,}\.\w{2,}$/,
			`Введите существующий адрес электронной почты`,
		)
		.required(`пожалуйста, введите ваш email`),
	password: yup
		.string()
		.matches(
			/^(?=.*\d)(?=.*[A-Z])[a-zA-Z0-9]{6,}$/,
			`Пароль должен содержать минимум одну цифру, заглавную букву и состоять из символов латинского алфавита`,
		)
		.max(20, `Максимальная длина пароля - 20 символов`)
		.min(6, `Минимальная длина пароля - 6 символов`)
		.required(`пожалуйста, введите пароль`),
	passwordConfirm: yup
		.string()
		.required(`пожалуйста, подтвердите пароль`)
		.oneOf([yup.ref(`password`)], `пароли не совпадают`),
});
