const template = require('../config/styles.json');

const getMyStyle = () => ({
	navigationBar: {
		display: 'flex',
		width: '100%',
		justifyContent: 'space-between',
		marginTop: '20px',
	},
	slideNumbers: {
		display: 'flex',
		marginTop: '4px',
	},
	slideNumber: {
		cursor: 'pointer',
		textDecoration: 'none',
		marginRight: '5px',
		fontFamily: template.fonts.main,
		fontWeight: 'bold',
	},
	slideNumberActive: {
		cursor: 'pointer',
		textDecoration: 'underline',
		marginRight: '5px',
		fontFamily: template.fonts.main,
		fontWeight: 'bold',
	},
	navigationButtons: {
		display: 'flex',
		justifyContent: 'flex-end',
		gap: '3px',
	},
	navigationButton: {
		backgroundColor: template.colors.successButtonBackground,
		border: 'none',
		cursor: 'pointer',
		fontFamily: template.fonts.main,
		color: template.colors.successButtonLabel,
		width: '120px',
		height: '30px',
		textAlign: 'center',
		fontWeight: 'bold',
	},
});

export { getMyStyle };
