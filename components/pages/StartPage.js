import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
const StartScreen = () => {
	const [selectedScreenIndex, setSelectedScreenIndex] = useState(0)
	const navigation = useNavigation()
	const screens = [
		{
			text: 'Международные спортивные игры «Дети Азии» проводятся по летним и зимним видам спорта среди детей и юношества в индивидуальных и командных видах спорта',
			image: require('../../assets/launchScreens/1.png'),
			textStyle: styles.textOne,
			imageStyle: styles.imageOne,
		},
		{
			text: 'Игры проводятся каждые четыре года под Патронатом ЮНЕСКО, Международного Олимпийского комитета и при поддержке Президента и Правительства Российской Федерации, Олимпийского совета Азии, Олимпийского комитета России.',
			image: require('../../assets/launchScreens/2.png'),
			textStyle: styles.textTwo,
			imageStyle: styles.imageTwo,
		},
		{
			text: 'За все время проведения в Играх приняли участие более 15 000 юных спортсменов из стран Азии и регионов Российской Федерации.',
			image: require('../../assets/launchScreens/3.png'),
			textStyle: styles.textThree,
			imageStyle: styles.imageThree,
		},
	]

	const changeScreen = () => {
		// Переключаемся на следующий экран, или к началу, если достигнут последний экран
		if (selectedScreenIndex === screens.length - 1) {
			// Переходим на новое окно
			navigation.navigate('MainScreen')
		} else {
			// Переключаемся на следующий экран
			setSelectedScreenIndex(selectedScreenIndex + 1)
		}
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.content} onStartShouldSetResponder={changeScreen}>
				<Text style={screens[selectedScreenIndex].textStyle}>
					{screens[selectedScreenIndex].text}
				</Text>
				<Image
					source={screens[selectedScreenIndex].image}
					style={screens[selectedScreenIndex].imageStyle}
				/>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},

	content: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		position: 'relative',
	},
	textOne: {
		position: 'absolute',
		top: 176,
		left: 40,
		width: 280,
		fontSize: 16,
	},
	imageOne: {
		width: '100%',
		// height: 'auto',
		position: 'absolute',
		bottom: 0,
	},
	textTwo: {
		position: 'absolute',
		bottom: 154,
		right: 29,
		width: 322,
		fontSize: 16,
		textAlign: 'right',
	},
	imageTwo: {
		width: '100%',
		// height: 'auto',
		position: 'absolute',
		top: 0,
	},
	textThree: {
		position: 'absolute',
		top: 171,
		right: 56,
		width: 242,
		fontSize: 16,
		textAlign: 'right',
	},
	imageThree: {
		width: '100%',
		// height: 'auto',
		position: 'absolute',
		bottom: 73,
	},
})

export default StartScreen
