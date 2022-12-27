const template = require('../config/styles.json');

const getMyStyle = () => ({
	topicContainer: {
		display: 'flex',
		flexDirection: 'column',
		gap: '10px',
		position: 'relative',
		minHeight: '400px',
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
		fontWeight: 'bold',
	},
	input: {
		width: '420px',
	},
	contentsButton: {
		backgroundColor: template.colors.primaryButtonBackground,
		border: 'none',
		cursor: 'pointer',
		marginLeft: '10px',
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
	subTopicSelect: {
		width: '220px',
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
		marginTop: '30px',
		marginLeft: '10px',
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
