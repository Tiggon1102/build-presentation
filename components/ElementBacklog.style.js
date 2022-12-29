const template = require('../config/styles.json');

const getMyStyle = () => ({
	elementBacklog: {
		width: '100%',
	},
	title: {
		fontWeight: 'bold',
		fontFamily: template.fonts.main,
	},
	inputFields: {
		display: 'flex',
		gap: '15px',
		height: '30px',
		width: '100%',
	},
	input: {
		flex: '1',
		width: '100px',
	},
	images: {
		display: 'flex',
		marginTop: '20px',
		gap: '15px',
		width: '100%',
	},
	image: {
		width: 'auto',
		height: '80px',
	},
});

export { getMyStyle };
