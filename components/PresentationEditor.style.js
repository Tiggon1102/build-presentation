const template = require('../config/styles.json');

const getMyStyle = () => ({
	presentationContainer: {
		display: 'flex',
		flexDirection: 'column',
	},
	navigationBar: {
		marginTop: 20,
	},
});

export { getMyStyle };
