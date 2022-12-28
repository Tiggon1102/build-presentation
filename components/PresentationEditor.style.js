const template = require('../config/styles.json');

const getMyStyle = () => ({
	presentationContainer: {
		display: 'flex',
		flexDirection: 'column',
		position: 'relative',
		width: '100%',
		height: 'min-content',
	},
});

export { getMyStyle };
