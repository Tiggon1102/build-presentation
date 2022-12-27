const template = require('../config/styles.json');

const getMyStyle = () => ({
	topicContainer: {
		display: 'flex',
		flexDirection: 'column',
		gap: '10px',
		position: 'relative',
		height: '50vh',
	},
	topicInputContainer: {
		display: 'flex',
		alignItems: 'center',
		selfAlign: 'flex-start',
	},
	label: {
		marginRight: '10px',
		fontFamily: template.fonts.main,
		color: template.colors.primaryFont,
	},
	input: {
		flex: 1,
	},
	contentsButton: {
		backgroundColor: template.colors.primaryButtonBackground,
		border: 'none',
		cursor: 'pointer',
		margin: '0 10px',
		fontFamily: template.fonts.main,
		color: template.colors.primaryButtonLabel,
		width: '150px',
		height: '40px',
		padding: '5px',
		textAlign: 'center',
		fontWeight: 'bold',
	},
	subTopicContainer: {
		display: 'flex',
		flexDirection: 'column',
		gap: '10px',
		position: 'relative',
	},
	deleteButton: {
		backgroundColor: template.colors.errorButtonBackground,
		border: 'none',
		cursor: 'pointer',
		width: '20px',
		height: '20px',
		borderRadius: '50%',
		fontFamily: template.fonts.main,
		color: template.colors.errorButtonLabel,
		margin: '0 10px',
	},
	addButton: {
		backgroundColor: template.colors.successButtonBackground,
		border: 'none',
		cursor: 'pointer',
		width: '24px',
		height: '24px',
		fontFamily: template.fonts.main,
		color: template.colors.successButtonLabel,
		margin: '0 8px',
		borderRadius: '50%',
	},
	generateButton: {
		backgroundColor: template.colors.primaryButtonBackground,
		border: 'none',
		cursor: 'pointer',
		position: 'absolute',
		bottom: '0px',
		fontFamily: template.fonts.main,
		color: template.colors.primaryButtonLabel,
		width: '150px',
		height: '40px',
		padding: '5px',
		textAlign: 'center',
		fontWeight: 'bold',
	},
});

module.exports = {
	getMyStyle,
};
