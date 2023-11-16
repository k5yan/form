import { forwardRef } from 'react';
import styles from '../styles/RegisterBlock.module.css';

export const RegButton = forwardRef(function RegButton(_, ref) {
	return (
		<button type="submit" className={styles.registerButton} ref={ref}>
			зарегистрироваться
		</button>
	);
});
