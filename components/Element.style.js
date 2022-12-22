const template = require('../config/styles.json');

const getMyStyle = () => ({
	headlineElement: {},
	imageElement: {
		'width': 'calc(100% - 2px)',
		'height': 'calc(100% - 6px)',
		'border': '1px solid blue',
		'border-radius': '23px',
		'-webkit-user-drag': 'none',
	},
	textElement: {
		'width': 'calc(100% - 26px)',
		'height': 'calc(100% - 70px)',
		'padding': '32px 12px',
		'border': '1px black solid',
		'resize': 'none',
		'border-radius': '23px',
	},
});

export { getMyStyle };
