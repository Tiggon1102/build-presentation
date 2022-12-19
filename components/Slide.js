import React, { useRef } from 'react';

import { getMyStyle } from './Slide.style.js';
import useStyle from '../hooks/useStyle';
import Element from './Element.js';
import useElements from '../hooks/useElements.js';

const Component = ({ currentSlide, setCurrentSlide }) => {
	const { style } = useStyle(getMyStyle);

	const slideRef = useRef(null);

	const { addElement, updateElement } = useElements(currentSlide, setCurrentSlide, slideRef);

	return (
		<div style={style.slideContainer} onDoubleClick={addElement} ref={slideRef}>
			{currentSlide && currentSlide.elements.map((element, index) => <Element key={index} element={element} updateElement={updateElement} index={index} />)}
		</div>
	);
};

export default Component;
