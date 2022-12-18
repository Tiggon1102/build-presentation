const template = require('../config/styles.json');

const getMyStyle = () => ({
	displayContainer: {
		marginTop: '30px',
		height: 'auto',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
	},
	displayText: {
		fontFamily: template.fonts.main,
		fontSize: template.sizes.contentFont,
		fontWeight: 'bold',
		color: template.colors.font,
		width: '100%',
		textAlign: 'center',
		marginBottom: '30px',
	},
});

module.exports = {
	getMyStyle,
};
