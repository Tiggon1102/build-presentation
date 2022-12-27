import React from 'react';

import { getMyStyle } from './SlideNavigation.style.js';
import useStyle from '../hooks/useStyle';

const Component = ({ texts, prevSlide, nextSlide }) => {
	const { style } = useStyle(getMyStyle);

	return (
		<div style={style.navigationBar}>
			<button onClick={prevSlide}>{texts['previous-button']}</button>
			<button onClick={nextSlide}>{texts['next-button']}</button>
		</div>
	);
};

export default Component;
