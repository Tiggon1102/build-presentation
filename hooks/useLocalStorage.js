import { useEffect, useRef } from 'react';
import { load, save } from '../basics/localStorage';

const APPLICATION_PREFIX = 'nextjs-template-';

const hook = (key, state, setter) => {
	const isLoading = useRef(false);

	useEffect(() => {
		isLoading.current = true;
		const res = load(APPLICATION_PREFIX + key);
		console.log(APPLICATION_PREFIX + key + ': ' + res);
		if (res !== null && res !== undefined) {
			if (typeof state === 'number') {
				setter(parseFloat(res));
			} else {
				setter(res);
			}
			// ToDo: add more type converts here
		} else {
			isLoading.current = false;
		}
	}, []);

	useEffect(() => {
		console.log('state changed');
		if (!isLoading.current) {
			save(APPLICATION_PREFIX + key, state);
		} else {
			isLoading.current = false;
		}
	}, [state]);

	return {};
};

export default hook;
