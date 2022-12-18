const UNSPLASH_ACCESS_KEY = '8o-mTkIItzXSpBixlH8NSYTELy6oWJyoKk-mV-YHjVk';
const UNSPLASH_SECRET_KEY = 'kEOpIuJubVybJtgmtEu8HZnh6NBqWJFxSPWEakFf-LY';

const fetchImageUrl = async (topic) => {
	const searchTerm = topic.replace(' ', '-');
	const searchUrl = `https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=${UNSPLASH_ACCESS_KEY}`;
	const response = await fetch(searchUrl);
	const data = await response.json();
	const imageUrl = data.results[0].urls.regular;
	return imageUrl;
};

export { fetchImageUrl };
