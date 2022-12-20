import { generatePresentation } from '../business/presentation';

const handler = async (topic, subTopics) => {
	const result = { presentation: await generatePresentation(topic, subTopics) };
	return result;
};

export default handler;
