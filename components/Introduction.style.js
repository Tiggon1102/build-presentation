const template = require('../config/styles.json');

const getMyStyle = () => ({
	introduction: {
		textAlign: 'center',
	},
	title: {
		fontSize: '2em',
		fontFamily: template.fonts.main,
		fontWeight: 'bold',
		textDecoration: 'underline',
	},
	image: {
		height: '400px',
		marginTop: '-20px',
	},
	text: {
		marginTop: '30px',
		fontFamily: template.fonts.main,
		fontWeight: 'bold',
	},
	button: {
		backgroundColor: template.colors.primaryButtonBackground,
		border: 'none',
		cursor: 'pointer',
		marginTop: '30px',
		fontFamily: template.fonts.main,
		color: template.colors.primaryButtonLabel,
		width: '150px',
		height: '40px',
		padding: '5px',
		textAlign: 'center',
		fontWeight: 'bold',
	},
});

export { getMyStyle };
