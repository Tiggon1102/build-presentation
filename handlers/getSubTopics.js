import { getSubTopics } from '../business/presentation';

const handler = async (topic) => {
	const result = { subTopics: await getSubTopics(topic) };
	return result;
};

export default handler;
