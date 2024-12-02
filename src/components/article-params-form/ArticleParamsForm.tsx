import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { clsx } from 'clsx';
import styles from './ArticleParamsForm.module.scss';
import { useRef, useState } from 'react';
import { Text } from 'src/ui/text';
import { Select } from 'src/ui/select';
import {
	ArticleStateType,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';
import { useClose } from 'src/hooks/useClose';

type TArticleParamsProps = {
	setParamsFn: (_: ArticleStateType) => void;
};

export const ArticleParamsForm = ({ setParamsFn }: TArticleParamsProps) => {
	const [isMenuActive, setMenuActive] = useState(false);
	const [formState, setFormState] = useState(defaultArticleState);
	const containerRef = useRef(null);

	useClose({
		isActive: isMenuActive,
		rootRef: containerRef,
		onClose: () => setMenuActive(false),
	});

	const handleReset = () => {
		setFormState(defaultArticleState);
		setParamsFn(defaultArticleState);
	};

	const handleSubmit = (evt: React.FormEvent<EventTarget>) => {
		evt.preventDefault();
		setParamsFn(formState);
	};

	return (
		<>
			<ArrowButton
				isOpen={isMenuActive}
				onClick={() => {
					setMenuActive(!isMenuActive);
				}}
			/>
			<aside
				className={clsx(styles.container, {
					[styles.container_open]: isMenuActive,
				})}
				ref={containerRef}>
				<form className={styles.form} onSubmit={handleSubmit}>
					<Text size={31} weight={800} uppercase={true}>
						Задайте параметры
					</Text>
					<Separator />
					<Select
						selected={formState.fontFamilyOption}
						options={fontFamilyOptions}
						title='Шрифт'
						onChange={(opt) => {
							setFormState({
								...formState,
								fontFamilyOption: opt,
							});
						}}
					/>
					<Separator />
					<RadioGroup
						name='fontsize'
						options={fontSizeOptions}
						selected={formState.fontSizeOption}
						title='рАЗМЕР шрифта'
						onChange={(opt) => {
							setFormState({
								...formState,
								fontSizeOption: opt,
							});
						}}
					/>
					<Separator />
					<Select
						selected={formState.fontColor}
						options={fontColors}
						title='Цвет шрифта'
						onChange={(opt) => {
							setFormState({
								...formState,
								fontColor: opt,
							});
						}}
					/>
					<Separator />
					<Separator />
					<Select
						selected={formState.backgroundColor}
						options={backgroundColors}
						title='Цвет фона'
						onChange={(opt) => {
							setFormState({
								...formState,
								backgroundColor: opt,
							});
						}}
					/>
					<Separator />
					<Select
						selected={formState.contentWidth}
						options={contentWidthArr}
						title='Ширина контента'
						onChange={(opt) => {
							setFormState({
								...formState,
								contentWidth: opt,
							});
						}}
					/>
					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							htmlType='reset'
							type='clear'
							onClick={handleReset}
						/>
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
