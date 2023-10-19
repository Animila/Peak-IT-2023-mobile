import { StyleSheet, View } from 'react-native'

const Block = ({ children, style }) => {
	return <View style={[styles.title_view, style]}>{children}</View>
}

const styles = StyleSheet.create({
	title_view: {
		backgroundColor: '#FCFCFC',
		width: 'auto',
		shadowRadius: '5px 4px 22px 0px',
		shadowOffset: { width: 0, height: 4 },
		shadowColor: '#000',
		shadowOpacity: 0.05,
		borderColor: 'rgba(0, 0, 0, 0.1)',
		borderWidth: 1,
		borderRadius: 5,
		display: 'flex',
		alignItems: 'start',
		justifyContent: 'center',
	},
})

export default Block
