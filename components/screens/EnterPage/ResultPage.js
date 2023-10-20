import { Image, ScrollView, Text, View } from 'react-native'
import Block from '../../blocks/Block'
import Title from '../../blocks/TitleBlock'

function ResultPage(data) {
	const SelectedPost = {
		id: 1,
		uri: 'https://yakutia-daily.ru/wp-content/uploads/2022/10/img_0668-e1666917241463-900x596.jpg',
		title: 'ЮНЫЕ ПРИМОРЦЫ СТАЛИ ОБЛАДАТЕЛЯМИ 66 МЕДАЛЕЙ ИГР «ДЕТИ АЗИИ»',
		description:
			'В Приморье завершились VII Международные спортивные игры «Дети Азии». Зрелищная и бескомпромиссная борьба на спортивных аренах Владивостока и Артема продолжалась 11 дней. Юные атлеты разыграли 273 комплекта наград в 19 видах спорта. Больше всего медалей выиграла команда Сибирского федерального округа – 119, из них 45 золотых – 38 серебряных – 36 бронзовых.В Приморье завершились VII Международные спортивные игры «Дети Азии». Зрелищная и бескомпромиссная борьба на спортивных аренах Владивостока и Артема продолжалась 11 дней. Юные атлеты разыграли 273 комплекта наград в 19 видах спорта. Больше всего медалей выиграла команда Сибирского федерального округа – 119, из них 45 золотых – 38 серебряных – 36 бронзовых',
	}
	return (
		<ScrollView style={{ flex: 1 }}>
			<Image
				source={require('../../../assets/header.jpg')}
				style={{ position: 'absolute', top: 0 }}
			/>
			<Title style={{ marginTop: 86 }}>Итоги мероприятий</Title>
			<Block
				style={{
					marginTop: 8,
					paddingHorizontal: 7,
					paddingVertical: 5,
					marginHorizontal: 25,
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<View style={{ marginVertical: 5 }}>
					<Image
						source={{ uri: SelectedPost.uri }}
						style={{ width: 'auto', height: 188, borderRadius: 5 }}
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
						{SelectedPost.title}
					</Text>
				</View>
			</Block>
			<Block
				style={{
					marginTop: 8,
					paddingHorizontal: 7,
					paddingVertical: 5,
					marginHorizontal: 25,
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<Text>{SelectedPost.description}</Text>
			</Block>
		</ScrollView>
	)
}

export default ResultPage
