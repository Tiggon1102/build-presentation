import getServerTime from '../../handlers/getServerTime';

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
		if (endpoint === 'getServerTime') {
			if (method === 'GET') {
				result = await getServerTime();
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
