import { useNavigation } from '@react-navigation/native'
import { Image, SafeAreaView, TouchableOpacity, View } from 'react-native'

function ListAdventure() {
	const navigation = useNavigation()
	const handleViewPress = id => {
		navigation.navigate('QuestionPage', { questionId: id }) // Передача данных как параметра
	}
	return (
		<View>
			<SafeAreaView
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Image
					source={require('../../../../assets/header.jpg')}
					style={{ position: 'absolute', top: 0 }}
				/>
				<View
					style={{
						marginTop: 130,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						position: 'relative',
					}}
				>
					<Image source={require('../../../../assets/adventure/line.png')} />
					<TouchableOpacity
						onPress={() => handleViewPress(1)}
						style={{ position: 'absolute', top: -12, left: -72 }}
					>
						<View
							style={{
								width: 95,
								height: 85,
								borderRadius: 5,
								backgroundColor: '#B2DC61',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<Image
								source={require('../../../../assets/adventure/1.png')}
								style={{}}
							/>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => handleViewPress(3)}
						style={{ position: 'absolute', top: 157, left: -72 }}
					>
						<View
							style={{
								width: 95,
								height: 85,
								borderRadius: 5,
								backgroundColor: '#B2DC61',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<Image
								source={require('../../../../assets/adventure/3.png')}
								style={{}}
							/>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => handleViewPress(5)}
						style={{ position: 'absolute', top: 346, left: -72 }}
					>
						<View
							style={{
								width: 95,
								height: 85,
								borderRadius: 5,
								backgroundColor: '#B2DC61',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<Image
								source={require('../../../../assets/adventure/5.png')}
								style={{}}
							/>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => handleViewPress(2)}
						style={{ position: 'absolute', top: 72, right: -75 }}
					>
						<View
							style={{
								width: 95,
								height: 85,
								borderRadius: 5,
								backgroundColor: '#B2DC61',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<Image
								source={require('../../../../assets/adventure/2.png')}
								style={{}}
							/>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => handleViewPress(4)}
						style={{ position: 'absolute', top: 261, right: -75 }}
					>
						<View
							style={{
								width: 95,
								height: 85,
								borderRadius: 5,
								backgroundColor: '#B2DC61',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<Image
								source={require('../../../../assets/adventure/4.png')}
								style={{}}
							/>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => handleViewPress(6)}
						style={{ position: 'absolute', top: 431, right: -75 }}
					>
						<View
							style={{
								width: 95,
								height: 85,
								borderRadius: 5,
								backgroundColor: '#B2DC61',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<Image
								source={require('../../../../assets/adventure/6.png')}
								style={{}}
							/>
						</View>
					</TouchableOpacity>
				</View>
			</SafeAreaView>
		</View>
	)
}

export default ListAdventure
