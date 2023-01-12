import { sendRequest } from './http.js';

const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;

const fetchImageUrl = async (topic) => {
	const searchTerm = topic.replace(' ', '-');
	const searchUrl = `https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=${UNSPLASH_ACCESS_KEY}`;

	const response = await sendRequest({
		method: 'GET',
		url: searchUrl,
		returnType: 'json',
	});

	const imageUrl = response.results[0].urls.regular;
	return imageUrl;
};

export { fetchImageUrl };
