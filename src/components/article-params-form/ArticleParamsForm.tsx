import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { clsx } from 'clsx';
import styles from './ArticleParamsForm.module.scss';
import { useState } from 'react';
import { Text } from 'src/ui/text';

export const ArticleParamsForm = () => {
	const [isActive, setActive] = useState(false);

	return (
		<>
			<ArrowButton
				isOpen={isActive}
				onClick={() => {
					setActive(!isActive);
				}}
			/>
			<aside
				className={clsx(styles.container, {
					[styles.container_open]: isActive,
				})}>
				<form className={styles.form}>
					<Text size={31} weight={800} uppercase={true}>
						Задайте параметры
					</Text>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
