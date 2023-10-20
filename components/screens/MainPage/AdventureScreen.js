import { useNavigation } from '@react-navigation/native'
import {
	Image,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native'

function AdventuresScreen() {
	const navigation = useNavigation()
	const handleViewPress = id => {
		navigation.navigate('ListAdventure',) // Передача данных как параметра
	}
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Image
				source={require('../../../assets/header.jpg')}
				style={{ position: 'absolute', top: 0 }}
			/>
			<View
				style={{ flex: 1, display: 'flex', justifyContent: 'center', gap: 54 }}
			>
				<TouchableOpacity onPress={() => handleViewPress()}>
					<View style={style.button}>
						<Text style={style.text}>Тесты</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => handleViewPress()}>
					<View style={style.button}>
						<Text style={style.text}>Вебинар</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => handleViewPress()}>
					<View style={style.button}>
						<Text style={style.text}>Челлендж</Text>
					</View>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	)
}

const style = StyleSheet.create({
	button: {
		backgroundColor: '#B2DC61',
		paddingHorizontal: 5,
		paddingVertical: 5,
		marginHorizontal: 25,
		borderRadius: 10,
		width: 'auto',
		height: 73,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 32,
	},

})

export default AdventuresScreen
