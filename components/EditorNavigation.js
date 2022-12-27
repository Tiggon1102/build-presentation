import React from 'react';

const Component = ({ texts, setCurrentStep }) => {
	return (
		<div>
			<button onClick={() => setCurrentStep('topic')}>{texts['back-to-topics-button']}</button>
			<button onClick={() => setCurrentStep('result')}>{texts['export-button']}</button>
		</div>
	);
};

export default Component;
