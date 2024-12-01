import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { clsx } from 'clsx';
import styles from './ArticleParamsForm.module.scss';
import { useState } from 'react';
import { Text } from 'src/ui/text';
import { Select } from 'src/ui/select';
import {
	backgroundColors,
	contentWidthArr,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';

export const ArticleParamsForm = () => {
	const [isActive, setActive] = useState(false);
	const [selectedFont, setFont] = useState(fontFamilyOptions[0]);
	const [selectedFontSize, setFontSize] = useState(fontSizeOptions[0]);
	const [selectedFontColor, setFontColor] = useState(fontColors[0]);
	const [selectedBg, setBg] = useState(backgroundColors[0]);
	const [selectedContentWidth, setContentWidth] = useState(contentWidthArr[0]);

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
					<Separator />
					<Select
						selected={selectedFont}
						options={fontFamilyOptions}
						title='Шрифт'
						onChange={(opt) => {
							setFont(opt);
						}}
					/>
					<Separator />
					<RadioGroup
						name='fontsize'
						options={fontSizeOptions}
						selected={selectedFontSize}
						title='рАЗМЕР шрифта'
						onChange={(opt) => {
							setFontSize(opt);
						}}
					/>
					<Separator />
					<Select
						selected={selectedFontColor}
						options={fontColors}
						title='Цвет шрифта'
						onChange={(opt) => {
							setFontColor(opt);
						}}
					/>
					<Separator />
					<Separator />
					<Select
						selected={selectedBg}
						options={backgroundColors}
						title='Цвет фона'
						onChange={(opt) => {
							setBg(opt);
						}}
					/>
					<Separator />
					<Select
						selected={selectedContentWidth}
						options={contentWidthArr}
						title='Ширина контента'
						onChange={(opt) => {
							setContentWidth(opt);
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
