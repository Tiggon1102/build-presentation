import React from 'react';
import { getMyStyle } from './TimeDisplay.style.js';
import useStyle from '../hooks/useStyle';

const Component = ({ label, value }) => {
	const { style } = useStyle(getMyStyle);

	return (
		<div style={style.displayContainer}>
			<p style={style.displayText}>
				{label}: {value}
			</p>
		</div>
	);
};

export default Component;
