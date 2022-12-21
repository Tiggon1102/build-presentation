const template = require('../config/styles.json');

const getMyStyle = () => ({
	topicContainer: {
		display: 'flex',
		flexDirection: 'column',
		gap: '10px',
	},
	subTopicContainer: {
		display: 'flex',
	},
	deleteButton: {
		backgroundColor: 'red',
		color: 'white',
		border: 'none',
		cursor: 'pointer',
		width: '20px',
		height: '20px',
	},
});

module.exports = {
	getMyStyle,
};
