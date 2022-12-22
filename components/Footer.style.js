const template = require('../config/styles.json');

const getMyStyle = () => ({
	container: {
		paddingTop: '20px',
		width: '100%',
		alignSelf: 'flex-end',
	},
	leftBar: {
		float: 'left',
		display: 'flex',
		color: template.colors.linkText,
		marginLeft: '30px',
		marginBottom: '20px',
	},
	rightBar: {
		float: 'right',
		color: template.colors.linkText,
		marginRight: '50px',
	},
	link: {
		color: template.colors.linkText,
		fontFamily: template.colors.errorButtonLabel,
		fontSize: '20px',
		marginLeft: '22px',
		cursor: 'pointer',
	},
	icon: {
		width: '30px',
		marginRight: '20px',
	},
});

export { getMyStyle };
