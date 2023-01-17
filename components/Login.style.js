const template = require('../config/styles.json');

const getMyStyle = () => ({
	contentContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
	},
	content: {
		minWidth: '600px',
		width: 'min-content',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignSelf: 'center',
		border: '1px solid white',
		borderRadius: '5px',
		padding: '20px',
	},
	input: {
		marginTop: '10px',
		width: '300px',
		alignSelf: 'center',
		padding: '10px',
		borderRadius: '5px',
		border: '1px solid white',
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
		alignSelf: 'center',
	},
});

export { getMyStyle };
