import { Image, SafeAreaView, Text } from 'react-native'

function TicketsScreen() {
	return (
		<SafeAreaView
			style={{
				flex: 1,
			}}
		>
			<Image
				source={require('../../../assets/header.jpg')}
				style={{ position: 'absolute', top: 0 }}
			/>
			<Text>Билеты</Text>
		</SafeAreaView>
	)
}

export default TicketsScreen
