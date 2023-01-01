import { ask } from '../basics/chatGPT';
import { fetchImageUrl } from '../basics/unsplash';

const getSubTopics = async (topic) => {
	const res = await ask(
		`I need 20 subtopics about the topic ${topic}. I want you to answer only with a json object which looks like this (do not use any new lines and do use double quotes around the strings): ["Behaviour", "Types of cat", "Food", ... ]`
	);
	const subTopics = JSON.parse(res);
	return subTopics;
};

const generatePresentation = async (topic, subTopics) => {
	let content = await fetchDescriptionsForSubTopics(topic, subTopics);
	content = await fetchImageUrlsForSubTopics(content);
	const slides = await generateSlides(topic, content);
	return { topic, slides };
};

const fetchDescriptionsForSubTopics = async (topic, subTopics) => {
	const res = await ask(
		`I need you to build an array of json objects for these subtopics (${JSON.stringify(
			subTopics
		)}). Please assign an id. Add a title attribute which is the name of the subtopic. Also find one important fact (as a bullet point) for each of these subtopics of the topic ${topic}. Save this fact in an attribute called description. I want you to send me only a json object. Do not use any new lines. Use double quotes around every string. It should look like this: [{ "id": 0, "title": "Breeds of Cat", "description": "very wild" }, { "id": 1, "title": "Types of Cat", "description": "pet cats" }, ... ]`
	);
	const content = JSON.parse(res);
	return content;
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

const generateSlides = async (topic, topics) => {
	const startSlides = [
		{
			id: 0,
			elements: [{ id: 0, x: 10, y: 0, width: '90%', height: 'auto', value: topic, type: 'headline' }],
		},
		{
			id: 1,
			elements: topics.map((topic, i) => ({
				id: i,
				x: 10,
				y: 10 + i * 50,
				width: '90%',
				height: 'auto',
				value: topic.title,
				type: 'text',
			})),
		},
	];
	const contentSlides = topics.map((topic) => ({
		id: Number(topic.id) + 2,
		elements: [
			{ id: 0, x: 10, y: 0, width: '90%', height: 'auto', value: topic.title, type: 'headline' },
			{ id: 1, x: 10, y: 80, width: '90%', height: 'auto', value: topic.description, type: 'text' },
			{ id: 2, x: 10, y: 200, width: '15%', height: 'auto', value: topic.imageUrl, type: 'image' },
		],
	}));
	return [...startSlides, ...contentSlides];
};

export { getSubTopics, generatePresentation };
