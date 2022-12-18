import React, { useEffect, useState } from 'react';

import { getMyStyle } from './PresentationEditor.style.js';
import useStyle from '../hooks/useStyle';
import useSlider from '../hooks/useSlider';
import useCurrentSlide from '../hooks/useCurrentSlide';
import Slide from './Slide.js';
import TopicInput from './TopicInput.js';
import usePresentation from '../hooks/usePresentation.js';

const Component = ({ texts }) => {
	const { style } = useStyle(getMyStyle);

	const { presentation, generate, updateSlide } = usePresentation();

	const { currentSlideIndex, prevSlide, nextSlide } = useSlider(presentation ? presentation.slides.length : 0);

	const { currentSlide, setCurrentSlide } = useCurrentSlide(presentation, currentSlideIndex, updateSlide);

	useEffect(() => {
		console.log(currentSlide);
	}, [currentSlide]);

	return (
		<div style={style.presentationContainer}>
			<TopicInput startGeneration={generate} texts={texts} />
			<Slide currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />
			<div style={style.navigationBar}>
				<button onClick={prevSlide}>Previous</button>
				<button onClick={nextSlide}>Next</button>
			</div>
		</div>
	);
};

export default Component;
