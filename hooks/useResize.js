import { useRef } from 'react';

const hook = (currentSlide, setCurrentSlide, index) => {
	const elementRef = useRef(null);

	const resize = () => {
		const { width, height } = elementRef.current.getBoundingClientRect();
		setCurrentSlide({
			...currentSlide,
			elements: [...currentSlide.elements.slice(0, index), { ...currentSlide.elements[index], width, height }, ...currentSlide.elements.slice(index + 1)],
		});
	};

	return { elementRef, resize };
};

export default hook;
