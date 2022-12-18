import { generatePresentation } from '../business/presentation';

const handler = async (topic) => {
	const result = { presentation: await generatePresentation(topic) };
	return result;
};

export default handler;
