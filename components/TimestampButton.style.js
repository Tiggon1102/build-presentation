const template = require('../config/styles.json');

const getMyStyle = () => ({
	timestampButton: {
		fontFamily: template.fonts.main,
		fontSize: template.sizes.contentFont,
		fontWeight: 'bold',
		backgroundColor: template.colors.buttonBackground,
		color: template.colors.font,
		width: '300px',
		height: '50px',
		textAlign: 'center',
		marginTop: '30px',
		alignSelf: 'center',
	},
});

module.exports = {
	getMyStyle,
};
