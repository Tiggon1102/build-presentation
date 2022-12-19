import { ask } from '../basics/chatGPT';
import { fetchImageUrl } from '../basics/unsplash';

const generatePresentation = async (topic) => {
	let subTopics = await generateSubTopics(topic);
	subTopics = await fetchImageUrlsForSubTopics(subTopics);
	const slides = await generateSlides(subTopics);
	return { topic, slides };
};

const generateSubTopics = async (topic) => {
	const answer = await ask(
		`please write a lecture with 6 paragraphs about ${topic}. 
                                  each paragraph must have a title and one sentence of content. 
                                  i do not want introduction or conclusion as paragraphs. 
                                  we do not want to have a table of contents. 
                                  there must be \n between title and content of a paragraph.
                                  there must be \n\n between paragraphs.`,
		1000
	);
	const blocks = answer.split('\n\n');
	const subTopics = [];
	for (let i = 0; i < blocks.length; i++) {
		const block = blocks[i];
		const [title, description] = block.split('\n');
		const data = {
			id: i,
			title: title.replace(`${i}. `, '').replace('paragraph', '').replace(':', '').replace('\t', ''),
			description,
		};
		subTopics.push(data);
	}
	return subTopics.filter((topic) => topic.title !== '');
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
			{ x: 10, y: 0, width: 400, height: 100, value: topic.title, type: 'headline' },
			{ x: 10, y: 90, width: 400, height: 200, value: topic.description, type: 'text' },
			{ x: 10, y: 300, width: 200, height: 200, value: topic.imageUrl, type: 'image' },
		],
	}));
	return slides;
};

export { generatePresentation };
