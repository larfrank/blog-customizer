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
	const [isActive, setActive] = useState(false);
	const [tmpOpts, setTmpOpts] = useState(defaultArticleState);

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
				<form
					className={styles.form}
					onSubmit={(evt: React.FormEvent<EventTarget>) => {
						evt.preventDefault();
						setParamsFn(tmpOpts);
					}}>
					<Text size={31} weight={800} uppercase={true}>
						Задайте параметры
					</Text>
					<Separator />
					<Select
						selected={tmpOpts.fontFamilyOption}
						options={fontFamilyOptions}
						title='Шрифт'
						onChange={(opt) => {
							setTmpOpts({
								...tmpOpts,
								fontFamilyOption: opt,
							});
						}}
					/>
					<Separator />
					<RadioGroup
						name='fontsize'
						options={fontSizeOptions}
						selected={tmpOpts.fontSizeOption}
						title='рАЗМЕР шрифта'
						onChange={(opt) => {
							setTmpOpts({
								...tmpOpts,
								fontSizeOption: opt,
							});
						}}
					/>
					<Separator />
					<Select
						selected={tmpOpts.fontColor}
						options={fontColors}
						title='Цвет шрифта'
						onChange={(opt) => {
							setTmpOpts({
								...tmpOpts,
								fontColor: opt,
							});
						}}
					/>
					<Separator />
					<Separator />
					<Select
						selected={tmpOpts.backgroundColor}
						options={backgroundColors}
						title='Цвет фона'
						onChange={(opt) => {
							setTmpOpts({
								...tmpOpts,
								backgroundColor: opt,
							});
						}}
					/>
					<Separator />
					<Select
						selected={tmpOpts.contentWidth}
						options={contentWidthArr}
						title='Ширина контента'
						onChange={(opt) => {
							setTmpOpts({
								...tmpOpts,
								contentWidth: opt,
							});
						}}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
