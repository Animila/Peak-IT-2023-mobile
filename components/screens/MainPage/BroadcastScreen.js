import { Image, SafeAreaView, Text } from 'react-native'

function BroadcastScreen() {
	return (
		<SafeAreaView
			style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
		>
			<Image
				source={require('../../../assets/header.jpg')}
				style={{ position: 'absolute', top: 0 }}
			/>
			<Text>Трансляции</Text>
		</SafeAreaView>
	)
}

export default BroadcastScreen
