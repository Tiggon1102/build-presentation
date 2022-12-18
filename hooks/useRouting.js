import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const hook = () => {
	const router = useRouter();
	const [path, setPath] = useState('');

	const route = (newPath) => {
		router.push('/?path=' + newPath, undefined, { shallow: true });
		window.scrollTo(0, 0);
	};

	useEffect(() => {
		if (router.query.path) {
			setPath(router.query.path);
		}
	}, [router]);

	return { path, route };
};

export default hook;
