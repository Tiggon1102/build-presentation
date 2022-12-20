const template = require('../config/styles.json');

const getMyStyle = () => ({
	topicContainer: {
		display: 'flex',
		flexDirection: 'column',
		gap: '10px',
	},
});

module.exports = {
	getMyStyle,
};
