const template = require('../config/styles.json');

const getMyStyle = ({ element }) => ({
	elementContainer: {
		position: 'absolute',
		top: element.y,
		left: element.x,
		overflow: 'inherit',
		width: element.type === 'img' ? '15%' : element.width,
	},
	headlineElement: {
		'width': 'calc(100% - 26px)',
		'height': 'calc(100% - 26px)',
		'padding': '12px 12px',
		'border': '0px black solid',
		'resize': 'none',
		'user-select': 'none',
		'overflow': 'hidden',
		'fontSize': template.sizes.headlineFont,
		'fontFamily': template.fonts.main,
	},
	imageElement: {
		'width': 'calc(100% - 2px)',
		'height': 'calc(100% - 2px)',
		'border': '1px solid blue',
		'border-radius': '23px',
		'-webkit-user-drag': 'none',
	},
	textElement: {
		width: 'calc(100% - 26px)',
		height: 'calc(100% - 70px)',
		padding: '32px 12px',
		border: '1px black solid',
		resize: 'none',
		borderRadius: '23px',
		userSelect: 'none',
		overflow: 'hidden',
		fontSize: template.sizes.dataFont,
		fontFamily: template.fonts.main,
	},
});

export { getMyStyle };
