import { StatusBar } from 'expo-status-bar'
import { Image, StyleSheet, View } from 'react-native'

export default function App() {
	return (
		<View style={styles.container}>
			<Image source={require('./assets/first_logo.png')} />
			<StatusBar style='auto' />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
