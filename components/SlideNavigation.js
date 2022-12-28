import React from 'react';

import { getMyStyle } from './SlideNavigation.style.js';
import useStyle from '../hooks/useStyle';

const Component = ({ texts, prevSlide, nextSlide, currentSlideIndex, setCurrentSlideIndex, presentationLength }) => {
	const { style } = useStyle(getMyStyle);

	return (
		<div style={style.navigationBar}>
			<div style={style.slideNumbers}>
				{Array.from(Array(presentationLength).keys()).map((slideNumber) => (
					<span
						key={slideNumber}
						style={slideNumber === currentSlideIndex ? style.slideNumberActive : style.slideNumber}
						onClick={() => setCurrentSlideIndex(slideNumber)}
					>
						{slideNumber}
					</span>
				))}
			</div>
			<div style={style.navigationButtons}>
				<button style={style.navigationButton} onClick={prevSlide}>
					{texts['previous-button']}
				</button>
				<button style={style.navigationButton} onClick={nextSlide}>
					{texts['next-button']}
				</button>
			</div>
		</div>
	);
};

export default Component;
