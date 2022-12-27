import React from 'react';

import { getMyStyle } from './PresentationEditor.style.js';
import useStyle from '../hooks/useStyle';
import useSlider from '../hooks/useSlider';
import useCurrentSlide from '../hooks/useCurrentSlide';
import Slide from './Slide.js';
import SlideNavigation from './SlideNavigation.js';
import EditorNavigation from './EditorNavigation.js';
import SlideSettings from './SlideSettings.js';
import ElementBacklog from './ElementBacklog.js';

const Component = ({ texts, presentation, updateSlide, setCurrentStep }) => {
	const { style } = useStyle(getMyStyle);

	const { currentSlideIndex, prevSlide, nextSlide } = useSlider(presentation ? presentation.slides.length : 0);

	const { currentSlide, setCurrentSlide } = useCurrentSlide(presentation, currentSlideIndex, updateSlide);

	return (
		<div style={style.presentationContainer}>
			<EditorNavigation texts={texts} setCurrentStep={setCurrentStep} />
			<SlideNavigation texts={texts} prevSlide={prevSlide} nextSlide={nextSlide} />
			<Slide currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />
			<SlideSettings texts={texts} />
			<ElementBacklog texts={texts} />
		</div>
	);
};

export default Component;
