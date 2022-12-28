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
	},
	input: {
		flex: '1',
	},
	images: {
		display: 'flex',
		marginTop: '20px',
		gap: '15px',
	},
	image: {
		width: 'auto',
		height: '200px',
	},
});

export { getMyStyle };
