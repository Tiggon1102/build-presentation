import React from 'react';

import { getMyStyle } from './Slide.style.js';
import useStyle from '../hooks/useStyle';
import Element from './Element.js';
import useElements from '../hooks/useElements.js';

const Component = ({ currentSlide, setCurrentSlide }) => {
	const { style } = useStyle(getMyStyle);

	const { addElement } = useElements(currentSlide, setCurrentSlide);

	return (
		<div style={style.slideContainer} onDoubleClick={addElement}>
			{currentSlide &&
				currentSlide.elements.map((element, index) => (
					<Element key={index} element={element} index={index} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />
				))}
		</div>
	);
};

export default Component;
