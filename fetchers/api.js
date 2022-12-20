import { sendRequest } from '../basics/http';

const PROTOCOL = process.env.NEXT_PUBLIC_IS_LOCAL === 'true' ? 'http' : 'https';
const HOST = () => window.location.host;

const getSubTopics = async (topic) => await sendRequest({ method: 'POST', url: PROTOCOL + '://' + HOST() + '/api/getSubTopics', body: { topic } });

const generatePresentation = async (topic, subTopics) =>
	await sendRequest({ method: 'POST', url: PROTOCOL + '://' + HOST() + '/api/generatePresentation', body: { topic, subTopics } });

export { getSubTopics, generatePresentation };
