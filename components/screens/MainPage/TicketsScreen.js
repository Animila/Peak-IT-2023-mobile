import { Image, ScrollView, Text, View } from 'react-native'
import { SvgUri, SvgXml } from 'react-native-svg'
import Block from '../../blocks/Block'
import Title from '../../blocks/TitleBlock'
import ticketsData from '../../data/ticketsData'

function TicketsScreen() {
	//

	return (
		<ScrollView
			style={{
				flex: 1,
			}}
		>
			<Image
				source={require('../../../assets/header.jpg')}
				style={{ position: 'absolute', top: 0 }}
			/>
			<Title style={{ marginTop: 70 }}>Мои билеты</Title>
			<View style={{ marginTop: 9, marginHorizontal: 25 }}>
				{ticketsData.map((item, index) => (
					<Block
						key={index}
						style={{
							paddingVertical: 30,
							paddingHorizontal: 15,
							marginVertical: 10,
						}}
					>
						<View
							style={{
								justifyContent: 'space-between',
								flexDirection: 'row',
							}}
						>
							<Text>Билет № {item.number}</Text>
							<View
								style={{
									backgroundColor: item.status == '2' ? '#CEE99D' : 'green',
									borderRadius: 5,
									paddingHorizontal: 17,
									paddingVertical: 6,
								}}
							>
								<Text>
									{item.status == '1' && 'Ждет оплаты'}
									{item.status == '2' && 'Оплачено'}
									{item.status == '3' && 'Исполнен'}
								</Text>
							</View>
						</View>
						<View style={{ flexDirection: 'row', marginTop: 26 }}>
							<Image
								source={{ uri: item.place.uri }}
								style={{ width: 117, height: 103, borderRadius: 5 }}
							></Image>
							<View style={{ marginLeft: 16 }}>
								<Text>{item.place.title}</Text>
								<Text>
									Дата: {new Date(item.place.date).getDate()}/
									{new Date(item.place.date).getMonth()}/
									{new Date(item.place.date).getFullYear()}
								</Text>
								<Text>
									Время: {new Date(item.place.date).getHours()}:
									{new Date(item.place.date).getMinutes()}
								</Text>
							</View>
						</View>
						<View style={{ alignItems: 'center' }}>
							<SvgXml
								xml={`<svg width="272" height="1" viewBox="0 0 272 1" fill="none" xmlns="http://www.w3.org/2000/svg">
							<line y1="0.5" x2="272" y2="0.5" stroke="#D8D9D9"/>
							</svg>
							`}
								style={{ marginTop: 17 }}
							/>

							<SvgUri uri={item.qrCode} width={170} style={{ margin: 0 }} />
							<SvgXml
								xml={`<svg width="272" height="1" viewBox="0 0 272 1" fill="none" xmlns="http://www.w3.org/2000/svg">
							<line y1="0.5" x2="272" y2="0.5" stroke="#D8D9D9"/>
							</svg>
							`}
								style={{ marginTop: 17 }}
							/>
						</View>
						<View style={{ width: '100%', marginTop: 10 }}>
							<Text>Билеты</Text>
							{item.tickets.map((item, index) => (
								<View
									style={{
										flexDirection: 'row',
										justifyContent: 'space-between',
									}}
								>
									<Text>{item.title}</Text>
									<Text>{item.description}</Text>
									<Text>{item.count}</Text>
								</View>
							))}
						</View>
					</Block>
				))}
			</View>
		</ScrollView>
	)
}

export default TicketsScreen
