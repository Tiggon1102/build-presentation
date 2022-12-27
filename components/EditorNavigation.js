import React from 'react';
import { getMyStyle } from './EditorNavigation.style.js';
import useStyle from '../hooks/useStyle';

const Component = ({ texts, setCurrentStep }) => {
	const { style } = useStyle(getMyStyle);

	return (
		<div style={style.container}>
			<div style={style.backButton} onClick={() => setCurrentStep('topic')}>
				{texts['back-to-topics-button']}
			</div>
			<button style={style.exportButton} onClick={() => setCurrentStep('result')}>
				{texts['export-button']}
			</button>
		</div>
	);
};

export default Component;
