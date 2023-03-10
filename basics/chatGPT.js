const OPENAI_API_KEY = process.env.OPENAPI_KEY;

const ask = async (question, maxLength = 1000) => {
	const response = await fetch('https://api.openai.com/v1/completions', {
		method: 'POST',
		headers: {
			'Authorization': 'Bearer ' + OPENAI_API_KEY,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			model: 'text-davinci-003',
			prompt: question,
			max_tokens: maxLength,
			temperature: 1.0,
		}),
	});
	const data = await response.json();
	return data.choices[0].text;
};

export { ask };
