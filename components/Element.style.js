const template = require('../config/styles.json');

const getMyStyle = ({ element }) => ({
	elementContainer: {
		position: 'absolute',
		top: element.y,
		left: element.x,
		resize: 'both',
		overflow: 'hidden',
		width: element.width,
		height: element.height,
	},
	headlineElement: {
		fontSize: template.sizes.headlineFont,
		fontFamily: template.fonts.main,
	},
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
		'user-select': 'none',
		'overflow': 'hidden',
		'fontSize': template.sizes.dataFont,
		'fontFamily': template.fonts.main,
	},
});

export { getMyStyle };
