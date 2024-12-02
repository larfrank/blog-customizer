import { useEffect } from 'react';

type TUseClose = {
	isActive: boolean;
	onClose: () => void;
	rootRef: React.RefObject<HTMLDivElement>;
};

export const useClose = ({ isActive, rootRef, onClose }: TUseClose) => {
	useEffect(() => {
		if (!isActive) return;
		const handleClickOutside = (event: MouseEvent) => {
			const { target } = event;
			if (
				target instanceof Node &&
				!rootRef.current?.contains(target) &&
				rootRef.current
			) {
				onClose();
			}
		};

		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				onClose();
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		document.addEventListener('keydown', handleEscape);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
			document.removeEventListener('keydown', handleEscape);
		};
	}, [isActive, rootRef, onClose]);
};
