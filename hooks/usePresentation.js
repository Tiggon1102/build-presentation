import { useState } from 'react';
import { generatePresentation } from '../fetchers/api';

const hook = () => {
	const [presentation, setPresentation] = useState(null);

	const generate = async (topic) => {
		const response = await generatePresentation(topic);
		setPresentation(response.presentation);
	};

	const updateSlide = (index, newSlide) => {
		if (!presentation) return;
		let newPresentation = presentation;
		newPresentation.slides[index] = newSlide;
		setPresentation(newPresentation);
	};

	return { presentation, generate, updateSlide };
};

export default hook;