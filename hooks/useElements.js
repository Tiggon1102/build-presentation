import { useState } from 'react';
import { generatePresentation } from '../fetchers/api';

const hook = (currentSlide, setCurrentSlide) => {
	const addElement = (e) => {
		setCurrentSlide({
			...currentSlide,
			elements: [...currentSlide.elements, { x: e.clientX, y: e.clientY, type: 'text', value: '' }],
		});
	};

	return { addElement };
};

export default hook;
