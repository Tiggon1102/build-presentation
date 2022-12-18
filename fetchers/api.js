import { sendRequest } from '../basics/http';

const PROTOCOL = process.env.NEXT_PUBLIC_IS_LOCAL === 'true' ? 'http' : 'https';
const HOST = () => window.location.host;

const generatePresentation = async (topic) =>
	await sendRequest({ method: 'POST', url: PROTOCOL + '://' + HOST() + '/api/generatePresentation', body: { topic } });

export { generatePresentation };
