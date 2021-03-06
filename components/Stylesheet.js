import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 25,
	},
	timeDisplay: {
		fontSize: 50
	},
	halfSize: {
		flex: 0.5,
	},
	row: {
		flexDirection: 'row'
	},
	spaced: {
		justifyContent: 'space-between'
	},
	column: {
		flexDirection: 'column'
	},
	flexOne: {
		flex: 1
	},
	flexTwo: {
		flex: 2
	},
	flexEnd: {
		alignSelf: 'flex-end'
	},
	appTitle: {
		fontWeight: 'bold',
		textAlign: 'center',
		fontSize: 30,
		padding: 30,
	},

	timeSetterTitle: { fontSize: 20 }

});
