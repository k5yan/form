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
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: ``,
			password: ``,
			passwordConfirm: ``,
		},
		resolver: yupResolver(validations),
	});

	const registerButtonRef = useRef(null);

	const emailInputError = errors.email?.message;
	const passwordInputError = errors.password?.message;
	const passwordConfirmError = errors.passwordConfirm?.message;
	useEffect(() => {
		if (!emailInputError) {
			registerButtonRef.current.focus();
		}
	}, [emailInputError]);

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
				<RegButton reference={registerButtonRef} />
				{emailInputError && <div>{emailInputError}</div>}
				{passwordInputError && <div>{passwordInputError}</div>}
				{passwordConfirmError && !passwordInputError && (
					<div>{passwordConfirmError}</div>
				)}
			</form>
		</>
	);
};
