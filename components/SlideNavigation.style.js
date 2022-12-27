const template = require('../config/styles.json');

const getMyStyle = () => ({
	navigationBar: {
		display: 'flex',
		width: '100%',
	},
	slideNumbers: {
		display: 'flex',
	},
	slideNumber: {
		cursor: 'pointer',
		textDecoration: 'none',
	},
	navigationButtons: {
		display: 'flex',
		justifyContent: 'flex-end',
	},
});

export { getMyStyle };
