import generatePresentation from '../../handlers/generatePresentation';
import getSubTopics from '../../handlers/getSubTopics';

const api = async (req, res) => {
	try {
		// read request
		const {
			query: { endpoint },
			method,
			headers,
			body,
		} = req;

		// process request
		let result;
		if (endpoint === 'getSubTopics') {
			if (method === 'POST') {
				const { topic } = body;
				result = await getSubTopics(topic);
			} else {
				throw new Error('Wrong request method.');
			}
		} else if (endpoint === 'generatePresentation') {
			if (method === 'POST') {
				const { topic, subTopics } = body;
				result = await generatePresentation(topic, subTopics);
			} else {
				throw new Error('Wrong request method.');
			}
		} else {
			throw new Error('Endpoint doesnt exist.');
		}

		// send response
		res.status('200').json(result);
	} catch (error) {
		res.status('500').json({ error: error.toString().split('Error: ')[1] });
	}
};

export default api;
