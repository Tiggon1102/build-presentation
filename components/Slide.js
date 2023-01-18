import React, { useRef, useState } from 'react';

import { getMyStyle } from './Slide.style.js';
import useStyle from '../hooks/useStyle';
import Element from './Element.js';
import useElements from '../hooks/useElements.js';

const Component = ({ currentSlide, setCurrentSlide, currentSlideIndex }) => {
	const { style } = useStyle(getMyStyle);

	const slideRef = useRef(null);
	const [selected, setSelected] = useState(-1);

	const { addElement, updateElement } = useElements(currentSlide, setCurrentSlide, slideRef);

	return (
		<div id="slide" style={style.slideContainer} onClick={(e) => (e.target.id ? setSelected(-1) : null)} onDoubleClick={addElement} ref={slideRef}>
			{currentSlide &&
				currentSlide.elements.map((element, index) => (
					<Element
						key={index}
						element={element}
						updateElement={updateElement}
						current={selected}
						setCurrent={setSelected}
						currentSlideIndex={currentSlideIndex}
						index={index}
					/>
				))}
		</div>
	);
};

export default Component;
