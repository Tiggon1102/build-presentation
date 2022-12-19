import { useRef } from 'react';

const hook = (element, updateElement, index) => {
	const elementRef = useRef(null);

	const resize = () => {
		const { width, height } = elementRef.current.getBoundingClientRect();
		updateElement(index, { ...element, width, height });
	};

	return { elementRef, resize };
};

export default hook;
