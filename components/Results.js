import React from 'react';
import { getMyStyle } from './Results.style.js';
import useStyle from '../hooks/useStyle';

const Component = ({ texts, setCurrentStep }) => {
	const { style } = useStyle(getMyStyle);
	return (
		<div style={style.resultsContainer}>
			<div style={style.backButton} onClick={() => setCurrentStep('edit')}>
				Zurück zum Editor
			</div>
			<h2 style={style.headline}>Results</h2>
			<div style={style.imageContainer}>
				<img
					alt="img1"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKr5wT7rfkjkGvNeqgXjBmarC5ZNoZs-H2uMpML8O7Q4F9W-IlUQibBT6IPqyvX45NOgw&usqp=CAU"
					style={style.presentationImage}
				/>
				<p style={style.presentationLabel}>Presentation</p>
			</div>
			<button style={style.exportButton} onClick={() => null}>
				{texts['export-button']}
			</button>
		</div>
	);
};

export default Component;
