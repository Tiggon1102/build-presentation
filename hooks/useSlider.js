import { useState } from 'react';

const hook = (presentationLength) => {
	const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

	const prevSlide = () => {
		if (currentSlideIndex > 0) {
			setCurrentSlideIndex(currentSlideIndex - 1);
		}
	};

	const nextSlide = () => {
		if (currentSlideIndex < presentationLength - 1) {
			setCurrentSlideIndex(currentSlideIndex + 1);
		}
	};

	return { currentSlideIndex, prevSlide, nextSlide, setCurrentSlideIndex };
};

export default hook;
