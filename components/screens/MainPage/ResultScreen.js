import { useNavigation } from '@react-navigation/native'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Title from '../../blocks/TitleBlock'

function ResultScreen() {
	const navigation = useNavigation()
	const data = [
		{
			id: 1,
			uri: 'https://yakutia-daily.ru/wp-content/uploads/2022/10/img_0668-e1666917241463-900x596.jpg',
			title: 'ЮНЫЕ ПРИМОРЦЫ СТАЛИ ОБЛАДАТЕЛЯМИ 66 МЕДАЛЕЙ ИГР «ДЕТИ АЗИИ»',
		},
		{
			id: 1,
			uri: 'https://yakutia-daily.ru/wp-content/uploads/2022/10/img_0668-e1666917241463-900x596.jpg',
			title: 'ЮНЫЕ ПРИМОРЦЫ СТАЛИ ОБЛАДАТЕЛЯМИ 66 МЕДАЛЕЙ ИГР «ДЕТИ АЗИИ»',
		},
		{
			id: 1,
			uri: 'https://yakutia-daily.ru/wp-content/uploads/2022/10/img_0668-e1666917241463-900x596.jpg',
			title: 'ЮНЫЕ ПРИМОРЦЫ СТАЛИ ОБЛАДАТЕЛЯМИ 66 МЕДАЛЕЙ ИГР «ДЕТИ АЗИИ»',
		},
		{
			id: 1,
			uri: 'https://yakutia-daily.ru/wp-content/uploads/2022/10/img_0668-e1666917241463-900x596.jpg',
			title: 'ЮНЫЕ ПРИМОРЦЫ СТАЛИ ОБЛАДАТЕЛЯМИ 66 МЕДАЛЕЙ ИГР «ДЕТИ АЗИИ»',
		},
	]

	const handleViewPress = id => {
		navigation.navigate('ResultPage', { id: id }) // Передача данных как параметра
	}

	return (
		<ScrollView style={{ flex: 1 }}>
			<Image
				source={require('../../../assets/header.jpg')}
				style={{ position: 'absolute', top: 0 }}
			/>
			<Title style={{ marginTop: 86 }}>Итоги мероприятий</Title>
			<View
				style={{
					paddingHorizontal: 5,
					paddingVertical: 5,
					marginHorizontal: 25,
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				{data.map((item, index) => (
					<TouchableOpacity key={index} onPress={() => handleViewPress(item)}>
						<View key={index} style={{ marginVertical: 5 }}>
							<Image
								source={{ uri: item.uri }}
								style={{ width: 300, height: 188, borderRadius: 5 }}
							/>
							<Text
								style={{
									position: 'absolute',
									bottom: 0,
									color: 'white',
									fontSize: 15,
									width: 238,
									fontWeight: 'medium',
									left: 10,
									bottom: 5,
								}}
							>
								{item.title}
							</Text>
						</View>
					</TouchableOpacity>
				))}
			</View>
		</ScrollView>
	)
}

export default ResultScreen
