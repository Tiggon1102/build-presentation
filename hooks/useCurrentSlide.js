import { useState, useEffect } from 'react';

const hook = (presentation, currentSlideIndex, updateSlide) => {
	const [currentSlide, setCurrentSlide] = useState(null);

	useEffect(() => {
		//if(currentSlide === null) {
		setCurrentSlide(presentation ? presentation.slides[currentSlideIndex] : null);
		//}
	}, [presentation]);

	useEffect(() => {
		updateSlide(currentSlideIndex, currentSlide ? currentSlide : null);
	}, [currentSlide]);

	useEffect(() => {
		setCurrentSlide(presentation ? presentation.slides[currentSlideIndex] : null);
	}, [currentSlideIndex]);

	return { currentSlide, setCurrentSlide };
};

export default hook;
