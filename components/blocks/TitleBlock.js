import { StyleSheet, Text, View } from 'react-native'

const Title = ({ children, style }) => {
	return (
		<View style={[styles.title_view, style]}>
			<Text style={styles.title}>{children}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	title_view: {
		marginHorizontal: 25,
		backgroundColor: '#FCFCFC',
		paddingHorizontal: 19,
		width: 'auto',
		shadowRadius: '5px 4px 22px 0px',
		shadowOffset: { width: 0, height: 4 },
		shadowColor: '#000',
		shadowOpacity: 0.05,
		height: 51.256,
		borderColor: 'rgba(0, 0, 0, 0.1)',
		borderWidth: 1,
		borderRadius: 5,
		display: 'flex',
		alignItems: 'start',
		justifyContent: 'center',
	},
	title: {
		color: '#4DC2FB',
		textAlign: 'left',
		fontWeight: '500',
	},
})

export default Title
