import { ask } from '../basics/chatGPT';
import { fetchImageUrl } from '../basics/unsplash';

const getSubTopics = async (topic) => {
	const res = await ask("give me a list of up to 20 subtopics about the topic '" + topic + "'");
	let subTopics = res.split(/\d\.\s/);
	subTopics.shift();
	return subTopics;
};

const generatePresentation = async (topic, subTopics) => {
	let content = subTopics.map((st, i) => ({ id: i, title: st, description: null, imageUrl: null }));
	content = await fetchDescriptionsForSubTopics(topic, content);
	content = await fetchImageUrlsForSubTopics(content);
	const slides = await generateSlides(content);
	return { topic, slides };
};

const fetchDescriptionsForSubTopics = async (topic, subTopics) => {
	const subTopicsWithDescriptions = await Promise.all(
		subTopics.map(async (subTopic) => {
			try {
				const description = await ask("give me exactly one bullet point about the topic '" + topic + "' and focus on '" + subTopic.title + "'");
				return { ...subTopic, description: description.split(' ').slice(1).join(' ') };
			} catch (error) {
				return { ...subTopic, description: null };
			}
		})
	);
	return subTopicsWithDescriptions;
};

const fetchImageUrlsForSubTopics = async (topics) => {
	const topicsWithImageUrls = await Promise.all(
		topics.map(async (topic) => {
			try {
				const imageUrl = await fetchImageUrl(topic.title);
				return { ...topic, imageUrl };
			} catch (error) {
				return { ...topic, imageUrl: null };
			}
		})
	);
	return topicsWithImageUrls;
};

const generateSlides = async (topics) => {
	const slides = topics.map((topic) => ({
		id: topic.id,
		elements: [
			{ id: 0, x: 10, y: 0, width: '90%', height: 'auto', value: topic.title, type: 'headline' },
			{ id: 1, x: 10, y: 80, width: '90%', height: 'auto', value: topic.description, type: 'text' },
			{ id: 2, x: 10, y: 200, width: '15%', height: 'auto', value: topic.imageUrl, type: 'image' },
		],
	}));
	return slides;
};

export { getSubTopics, generatePresentation };
