import { Image, SafeAreaView, Text } from 'react-native'

function ResultScreen() {
	return (
		<SafeAreaView
			style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
		>
			<Image
				source={require('../../../assets/header.jpg')}
				style={{ position: 'absolute', top: 0 }}
			/>
			<Text>Приключения</Text>
		</SafeAreaView>
	)
}

export default ResultScreen
