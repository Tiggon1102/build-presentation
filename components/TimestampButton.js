import React from 'react';
import { getMyStyle } from './TimestampButton.style.js';
import useStyle from '../hooks/useStyle';

const Component = ({ onClick, texts }) => {
	const { style } = useStyle(getMyStyle);

	return (
		<button id="timestamp" style={style.timestampButton} onClick={onClick}>
			{texts['save-visit-label']}
		</button>
	);
};

export default Component;
