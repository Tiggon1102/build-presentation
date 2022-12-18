import { sendRequest } from '../basics/http';

const PROTOCOL = process.env.NEXT_PUBLIC_IS_LOCAL === 'true' ? 'http' : 'https';
const HOST = () => window.location.host;

const getServerTime = async () => await sendRequest({ method: 'GET', url: PROTOCOL + '://' + HOST() + '/api/getServerTime' });

export { getServerTime };
