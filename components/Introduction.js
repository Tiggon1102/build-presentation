import React from 'react';

import { getMyStyle } from './Introduction.style.js';
import useStyle from '../hooks/useStyle';

const Component = ({ route, texts }) => {
	const { style } = useStyle(getMyStyle);

	const introductionText = `This automatic presentation generator allows you to define a topic and set up a table of contents. Then build-my-presentation will automatically generate a presentation for you. With our platform, you can save hours of time that you would normally spend on researching the topic and creating a presentation from scratch. Our presentations are fully editable and can be exported in the end.`;

	return (
		<div style={style.introduction}>
			<h1 style={style.title}>build-my-presentation</h1>
			<img src="bluerobots.jpg" style={style.image} />
			<p style={style.text}>{texts['introduction-text']}</p>
			<button onClick={() => route('presentation')} style={style.button}>
				Start
			</button>
		</div>
	);
};

export default Component;
