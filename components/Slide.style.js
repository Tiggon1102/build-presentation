const template = require('../config/styles.json');

const getMyStyle = () => ({
	slideContainer: {
		position: 'relative',
		marginTop: '20px',
		background: template.colors.defaultTheme,
		width: '100%',
		paddingBottom: '56.25%',
		border: '2px solid black',
		borderRadius: '5px',
	},
});

export { getMyStyle };
