import { useState } from 'react';
import { generatePresentation } from '../fetchers/api';

const hook = (setCurrentStep) => {
	const [presentation, setPresentation] = useState(null);

	const generate = async (topic, subTopics) => {
		const response = await generatePresentation(topic, subTopics);
		setPresentation(response.presentation);
		setCurrentStep('edit');
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
