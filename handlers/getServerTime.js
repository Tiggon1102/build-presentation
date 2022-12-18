import { getServerTime } from '../business/serverTime';

const handler = async () => {
	const result = { time: getServerTime() };
	return result;
};

export default handler;
