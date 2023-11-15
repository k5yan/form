import { forwardRef } from 'react';
import styles from '../styles/RegisterBlock.module.css';

export const RegButton = forwardRef(function RegButton(_, reference) {
	return (
		<button type="submit" className={styles.registerButton} ref={reference}>
			зарегистрироваться
		</button>
	);
});
