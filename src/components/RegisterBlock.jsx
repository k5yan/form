import styles from '../styles/RegisterBlock.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useRef } from 'react';
import { RegButton } from './RegButton';
import { validations } from '../constants/validations';
export const RegisterBlock = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: ``,
			password: ``,
			passwordConfirm: ``,
		},
		mode: `all`,
		resolver: yupResolver(validations),
	});

	const registerButtonRef = useRef(null);

	const emailInputError = errors.email?.message;
	const passwordInputError = errors.password?.message;
	const passwordConfirmError = errors.passwordConfirm?.message;

	useEffect(() => {
		const notNull = watch(`email`) && watch(`password`) && watch(`passwordConfirm`);
		const withoutErrors =
			!emailInputError && !passwordInputError && !passwordConfirmError;
		if (notNull && withoutErrors && registerButtonRef.current) {
			registerButtonRef.current.focus();
		}
	}, [
		emailInputError,
		passwordInputError,
		passwordConfirmError,
		registerButtonRef,
		watch,
	]);

	const sendData = (data) => {
		console.log(data);
	};

	return (
		<>
			<form className={styles.box} onSubmit={handleSubmit(sendData)}>
				<input name="email" placeholder="Введите email" {...register(`email`)} />
				<input
					name="password"
					placeholder="Введите пароль"
					{...register(`password`)}
				/>
				<input
					name="passwordConfirm"
					placeholder="Подтвердите пароль"
					{...register(`passwordConfirm`)}
				/>
				<RegButton ref={registerButtonRef} />
				{emailInputError && <div>{emailInputError}</div>}
				{passwordInputError && <div>{passwordInputError}</div>}
				{passwordConfirmError && !passwordInputError && (
					<div>{passwordConfirmError}</div>
				)}
			</form>
		</>
	);
};
