import { getCurrentDate } from '../basics/timedate';

const getServerTime = () => getCurrentDate().toString();

export { getServerTime };
