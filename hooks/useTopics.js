import { useState } from 'react';
import { getSubTopics } from '../fetchers/api';

const hook = () => {
	const [topic, setTopic] = useState('');
	const [subTopicOptions, setSubTopicOptions] = useState([]);
	const [subTopics, setSubTopics] = useState([]);

	const loadSubTopics = async (topic) => {
		const response = await getSubTopics(topic);
		const allSubTopics = response.subTopics;
		setSubTopicOptions(allSubTopics);
		setSubTopics(allSubTopics.slice(0, 5));
	};

	const updateSubTopic = (index, newSubTopic) => {
		const newSubTopics = [...subTopics];
		newSubTopics[index] = newSubTopic;
		setSubTopics(newSubTopics);
	};

	const addSubTopic = () => {
		if (subTopics.length < subTopicOptions.length) {
			setSubTopics([...subTopics, subTopicOptions[subTopics.length]]);
		}
	};

	const deleteSubTopic = (index) => {
		setSubTopics(subTopics.filter((_, i) => i !== index));
	};

	return {
		topic,
		setTopic,
		subTopics,
		loadSubTopics,
		updateSubTopic,
		addSubTopic,
		subTopicOptions,
		deleteSubTopic,
	};
};

export default hook;
