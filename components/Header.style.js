const template = require('../config/styles.json');

const getMyStyle = () => ({
	container: {
		width: '100%',
		height: '100px',
		alignSelf: 'flex-start',
		justifyContent: 'center',
		alignItems: 'center',
	},
	leftBar: {
		float: 'left',
		display: 'flex',
		color: template.colors.linkText,
		marginLeft: '30px',
		marginBottom: '20px',
		display: 'flex',
		alignItems: 'center',
		height: '100%',
	},
	rightBar: {
		float: 'right',
		color: template.colors.linkText,
		marginRight: '50px',
		display: 'flex',
		alignItems: 'center',
		height: '100%',
	},
	startPageIcon: {
		cursor: 'pointer',
		height: '60px',
	},
	loginLink: {
		cursor: 'pointer',
		fontFamily: template.fonts.main,
		color: template.colors.defaultTheme,
		fontWeight: 'bold',
		fontSize: template.sizes.contentFont,
		textDecoration: 'underline',
	},
});

export { getMyStyle };
