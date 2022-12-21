import React from 'react';
import { getMyStyle } from './TopicInput.style.js';
import useStyle from '../hooks/useStyle';
import useTopics from '../hooks/useTopics.js';

const Component = ({ startGeneration, texts }) => {
	const { style } = useStyle(getMyStyle);
	const { topic, setTopic, subTopics, loadSubTopics, updateSubTopic, addSubTopic, subTopicOptions, deleteSubTopic } = useTopics();

	return (
		<div style={style.topicContainer}>
			<p>
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
				<button onClick={() => loadSubTopics(topic)}>{texts['subtitle-button']}</button>
			</p>
			<p>
				{subTopics.map((subTopic, index) => (
					<div key={index} style={style.subTopicContainer}>
						<button style={style.deleteButton} onClick={() => deleteSubTopic(index)}>
							X
						</button>
						<select value={subTopic} onChange={(event) => updateSubTopic(index, event.target.value)}>
							{subTopicOptions.map((subTopicOption) => (
								<option key={subTopicOption} value={subTopicOption}>
									{subTopicOption}
								</option>
							))}
						</select>
					</div>
				))}
				<button onClick={addSubTopic}>+</button>
				<button onClick={() => startGeneration(topic, subTopics)}>{texts['generate-button']}</button>
			</p>
		</div>
	);
};

export default Component;
