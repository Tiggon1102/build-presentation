const template = require('../config/styles.json');

const getMyStyle = () => ({
	container: {
		display: 'flex',
		alignItems: 'center',
		width: '100%',
	},
	backButton: {
		textDecoration: 'underline',
		color: template.colors.primaryFont,
		fontFamily: template.fonts.main,
		cursor: 'pointer',
		marginRight: 'auto',
	},
	exportButton: {
		width: '150px',
		height: '40px',
		marginLeft: 'auto',
		backgroundColor: template.colors.primaryButtonBackground,
		fontFamily: template.fonts.main,
		color: template.colors.primaryButtonLabel,
		textAlign: 'center',
		fontWeight: 'bold',
		cursor: 'pointer',
		border: 'none',
	},
});

module.exports = {
	getMyStyle,
};
