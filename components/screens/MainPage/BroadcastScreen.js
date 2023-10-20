import { Image, ScrollView, Text, View } from 'react-native'
import { SvgXml } from 'react-native-svg'
import YoutubePlayer from 'react-native-youtube-iframe'
import Block from '../../blocks/Block'

function BroadcastScreen() {
	const reporters = [
		{
			id: 1,
			title: 'Старт заявочной кампании волонтеров VIII больше и больше',
			url: 'https://yakutia-daily.ru/wp-content/uploads/2019/12/39-1.jpg',
			time: '1995-12-17T03:24:00',
			pay: 2345,
		},
		{
			id: 2,
			title: 'Старт заявочной кампании волонтеров VIII больше и больше',
			url: 'https://yakutia-daily.ru/wp-content/uploads/2019/12/39-1.jpg',
			time: '1995-12-17T03:24:00',
			pay: 2345,
		},
		{
			id: 3,
			title: 'Старт заявочной кампании волонтеров VIII больше и больше',
			url: 'https://yakutia-daily.ru/wp-content/uploads/2019/12/39-1.jpg',
			time: '1995-12-17T03:24:00',
			pay: 2345,
		},
		{
			id: 4,
			title: 'Старт заявочной кампании волонтеров VIII больше и больше',
			url: 'https://yakutia-daily.ru/wp-content/uploads/2019/12/39-1.jpg',
			time: '1995-12-17T03:24:00',
			pay: 2345,
		},
	]
	return (
		<ScrollView style={{ flex: 1, position: 'relative' }}>
			<Image
				source={require('../../../assets/header.jpg')}
				style={{ position: 'absolute', top: 0 }}
			/>
			<Block
				style={{
					marginTop: 86,
					paddingHorizontal: 5,
					paddingVertical: 5,
					marginHorizontal: 25,
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<YoutubePlayer
					width={300}
					height={180}
					play={true}
					videoId={'P58VlYO0Le8'}
					contentScale={true}
					webViewStyle={{ display: 'block' }}
				/>
				<Text style={{ fontSize: 13 }}>
					Репортер А.Г.Семенов: «Детский спорт
				</Text>
			</Block>
			<ScrollView>
				{reporters.map(event => (
					<Block
						key={event.id}
						style={{
							marginTop: 9,
							marginHorizontal: 25,
							display: 'flex',
							position: 'relative',
							borderColor: 'rgba(167, 167, 167, 0.14)',
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'flex-start',
							padding: 8,
						}}
					>
						<Image
							source={{ uri: event.url }}
							style={{ width: 87, height: 62, margin: 0, borderRadius: 5 }}
						/>

						<View
							style={{
								width: 180, // Устанавливаем фиксированную ширину
								marginLeft: 5, // Добавляем небольшой отступ между изображением и текстом
							}}
						>
							<Text
								numberOfLines={2}
								ellipsizeMode='tail'
								style={{
									fontSize: 13,
								}}
							>
								{event.title}
							</Text>
							<View
								style={{
									display: 'flex',
									flexDirection: 'row',
									justifyContent: 'space-between',
								}}
							>
								<Text
									style={{
										fontSize: 13,
									}}
								>
									{'Дата: ' +
										new Date(event.time).getDate().toString() +
										'.' +
										new Date(event.time).getMonth().toString()}
								</Text>
								<Text
									style={{
										fontSize: 13,
									}}
								>
									{'от ' + event.pay.toString() + 'Р'}
								</Text>
							</View>
						</View>

						<SvgXml
							xml={`<svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M1.4046 1.5L8.86125 9L1.4046 16.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
							`}
							style={{ alignSelf: 'center', display: 'block' }}
						/>
					</Block>
				))}
			</ScrollView>
		</ScrollView>
	)
}

export default BroadcastScreen
