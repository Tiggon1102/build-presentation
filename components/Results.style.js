const template = require('../config/styles.json');

const getMyStyle = () => ({
	resultsContainer: {
		display: 'flex',
		flexDirection: 'column',
	},
	backButton: {
		textDecoration: 'underline',
		color: template.colors.primaryFont,
		fontFamily: template.fonts.main,
		cursor: 'pointer',
		marginRight: 'auto',
	},
	imageContainer: {
		display: 'flex',
		alignItems: 'center',
		marginTop: '20px',
	},
	headline: {
		marginRight: '1em',
		marginTop: '80px',
		fontFamily: template.fonts.main,
		color: template.colors.primaryFont,
		fontWeight: 'bold',
	},
	presentationImage: {
		height: '200px',
		marginRight: '1em',
		marginLeft: '20px',
	},
	presentationLabel: {
		textDecoration: 'underline',
		fontFamily: template.fonts.main,
		color: template.colors.primaryFont,
	},
	exportButton: {
		width: '150px',
		height: '40px',
		backgroundColor: template.colors.primaryButtonBackground,
		fontFamily: template.fonts.main,
		color: template.colors.primaryButtonLabel,
		textAlign: 'center',
		fontWeight: 'bold',
		cursor: 'pointer',
		border: 'none',
		marginTop: '60px',
		marginLeft: '20px',
	},
});

export { getMyStyle };
