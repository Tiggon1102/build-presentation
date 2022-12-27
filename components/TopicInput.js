import React from 'react';
import { getMyStyle } from './TopicInput.style.js';
import useStyle from '../hooks/useStyle';
import useTopics from '../hooks/useTopics.js';

const Component = ({ generate, texts }) => {
	const { style } = useStyle(getMyStyle);
	const { topic, setTopic, subTopics, loadSubTopics, updateSubTopic, addSubTopic, subTopicOptions, deleteSubTopic } = useTopics();

	return (
		<div style={style.topicContainer}>
			<div style={style.topicInputContainer}>
				<label style={style.label}>{texts['topic-label']}</label>
				<input
					type="text"
					value={topic}
					onChange={(event) => {
						setTopic(event.target.value);
					}}
					style={style.input}
				/>
				<button style={style.contentsButton} onClick={() => loadSubTopics(topic)}>
					{texts['subtitle-button']}
				</button>
			</div>
			{subTopics.length > 0 && (
				<>
					<div style={style.subTopicContainer}>
						<label style={style.label}>{texts['contents-label']}</label>
						{subTopics.map((subTopic, index) => (
							<div key={index} style={style.subTopic}>
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
						<button style={style.addButton} onClick={addSubTopic}>
							+
						</button>
					</div>
					<button style={style.generateButton} onClick={() => generate(topic, subTopics)}>
						{texts['generate-button']}
					</button>
				</>
			)}
		</div>
	);
};

export default Component;
