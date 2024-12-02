import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { clsx } from 'clsx';
import styles from './ArticleParamsForm.module.scss';
import { useState } from 'react';
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

type TArticleParamsProps = {
	setParamsFn: (_: ArticleStateType) => void;
};

export const ArticleParamsForm = ({ setParamsFn }: TArticleParamsProps) => {
	const [isMenuActive, setMenuActive] = useState(false);
	const [state, setState] = useState(defaultArticleState);

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
				})}>
				<form
					className={styles.form}
					onSubmit={(evt: React.FormEvent<EventTarget>) => {
						evt.preventDefault();
						setParamsFn(state);
					}}>
					<Text size={31} weight={800} uppercase={true}>
						Задайте параметры
					</Text>
					<Separator />
					<Select
						selected={state.fontFamilyOption}
						options={fontFamilyOptions}
						title='Шрифт'
						onChange={(opt) => {
							setState({
								...state,
								fontFamilyOption: opt,
							});
						}}
					/>
					<Separator />
					<RadioGroup
						name='fontsize'
						options={fontSizeOptions}
						selected={state.fontSizeOption}
						title='рАЗМЕР шрифта'
						onChange={(opt) => {
							setState({
								...state,
								fontSizeOption: opt,
							});
						}}
					/>
					<Separator />
					<Select
						selected={state.fontColor}
						options={fontColors}
						title='Цвет шрифта'
						onChange={(opt) => {
							setState({
								...state,
								fontColor: opt,
							});
						}}
					/>
					<Separator />
					<Separator />
					<Select
						selected={state.backgroundColor}
						options={backgroundColors}
						title='Цвет фона'
						onChange={(opt) => {
							setState({
								...state,
								backgroundColor: opt,
							});
						}}
					/>
					<Separator />
					<Select
						selected={state.contentWidth}
						options={contentWidthArr}
						title='Ширина контента'
						onChange={(opt) => {
							setState({
								...state,
								contentWidth: opt,
							});
						}}
					/>
					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							htmlType='reset'
							type='clear'
							onClick={() => {
								setState(defaultArticleState);
								setParamsFn(defaultArticleState);
							}}
						/>
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
