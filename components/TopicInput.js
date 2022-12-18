import React, { useState } from 'react';
import { getMyStyle } from './TopicInput.style.js';
import useStyle from '../hooks/useStyle';

const Component = ({ startGeneration, texts }) => {
	const { style } = useStyle(getMyStyle);
	const [topic, setTopic] = useState('');

	return (
		<div style={style.topicContainer}>
			<label>
				{texts['topic-label']}
				<input
					type="text"
					value={topic}
					onChange={(event) => {
						setTopic(event.target.value);
					}}
				/>
			</label>
			<button onClick={() => startGeneration(topic)}>{texts['generate-button']}</button>
		</div>
	);
};

export default Component;
