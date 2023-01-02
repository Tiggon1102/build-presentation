const DALLE_API_KEY = process.env.OPENAPI_KEY;

const fetchImageUrl = async (topic) => {
	const encodedTopic = encodeURIComponent(topic);
	const apiUrl = `https://api.openai.com/v1/images/generations`;
	const headers = {
		'Content-Type': 'application/json',
		'Authorization': `Bearer ${DALLE_API_KEY}`,
	};
	const body = JSON.stringify({
		model: 'image-alpha-001',
		prompt: encodedTopic,
		size: '512x512',
	});
	const response = await fetch(apiUrl, { method: 'POST', headers, body });
	const data = await response.json();
	return data.data[0].url;
};

export { fetchImageUrl };
