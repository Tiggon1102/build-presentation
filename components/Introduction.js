import React from 'react';

import { getMyStyle } from './Introduction.style.js';
import useStyle from '../hooks/useStyle';

const Component = ({ route, texts }) => {
	const { style } = useStyle(getMyStyle);

	return (
		<div style={style.introduction}>
			<h1 style={style.title}>build-my-presentation</h1>
			<img src="slideshow.png" alt="slideshow" style={style.image} />
			<p style={style.text}>{texts['introduction-text']}</p>
			<button onClick={() => route('presentation')} style={style.button}>
				Start
			</button>
		</div>
	);
};

export default Component;
