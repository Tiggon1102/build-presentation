const template = require('../config/styles.json');

const getMyStyle = () => ({
	container: {
		background: 'linear-gradient(140deg, ' + template.colors.secondaryTheme + ' 0%, ' + template.colors.primaryTheme + ' 95%)',
		width: '100%',
		height: '100%',
		minHeight: '100vh',
		padding: '0px',
		margin: '0px',
		display: 'flex',
		flexDirection: 'column',
	},
});

export { getMyStyle };
