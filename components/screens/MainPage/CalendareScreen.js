import { Image, ScrollView, Text, View } from 'react-native'
import { Calendar, LocaleConfig } from 'react-native-calendars'
import { SvgXml } from 'react-native-svg'
import Block from '../../blocks/Block'
import Title from '../../blocks/TitleBlock'

function CalendarScreen() {
	LocaleConfig.locales['ru'] = {
		monthNames: [
			'Январь',
			'Февраль',
			'Март',
			'Апрель',
			'Май',
			'Июнь',
			'Июль',
			'Август',
			'Сентябрь',
			'Октябрь',
			'Ноябрь',
			'Декабрь',
		],
		monthNamesShort: [
			'Янв',
			'Фев',
			'Мар',
			'Апр',
			'Май',
			'Июн',
			'Июл',
			'Авг',
			'Сен',
			'Окт',
			'Ноя',
			'Дек',
		],
		dayNames: [
			'воскресенье',
			'понедельник',
			'вторник',
			'среда',
			'четверг',
			'пятница',
			'суббота',
		],
		dayNamesShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
		today: 'Сегодня',
	}
	LocaleConfig.defaultLocale = 'ru'

	const data1EventsNoSort = [
		{
			id: 1,
			title: 'Триум',
			url: 'https://yakutia-daily.ru/wp-content/uploads/2019/12/39-1.jpg',
		},
		{
			id: 2,
			title: 'Триум',
			url: 'https://yakutia-daily.ru/wp-content/uploads/2019/12/39-1.jpg',
		},
		{
			id: 3,
			title: 'Триум',
			url: 'https://yakutia-daily.ru/wp-content/uploads/2019/12/39-1.jpg',
		},
		{
			id: 4,
			title: 'Триум',
			url: 'https://yakutia-daily.ru/wp-content/uploads/2019/12/39-1.jpg',
		},
	]
	const data2EventsNoSort = [
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
			<Title style={{ marginTop: 70 }}>Мероприятия</Title>
			<Block
				style={{
					marginTop: 9,
					paddingHorizontal: 5,
					paddingVertical: 5,
					marginHorizontal: 25,
				}}
			>
				<Calendar
					// Customize the appearance of the calendar
					style={{
						borderWidth: 0,
						borderColor: 'gray',
					}}
					// Specify the current date
					current={'2024-06-25'}
					// Callback that gets called when the user selects a day
					onDayPress={day => {
						console.log('selected day', day)
					}}
					// Mark specific dates as marked
					markedDates={{
						'2024-06-26': {
							selected: true,
							marked: true,
							selectedColor: 'blue',
						},
						'2024-06-29': { marked: true },
						'2024-07-01': {
							selected: true,
							marked: true,
							selectedColor: 'blue',
						},
					}}
				/>
			</Block>
			<ScrollView horizontal={true}>
				{data1EventsNoSort.map(event => (
					<Block
						key={event.id}
						style={{
							marginTop: 9,
							marginHorizontal: 5,
							position: 'relative',
							borderColor: 'rgba(167, 167, 167, 0.14)',
						}}
					>
						<Image
							source={{ uri: event.url }}
							style={{ width: 117, height: 103, margin: 0, borderRadius: 5 }}
						/>
						<View
							style={{
								position: 'absolute',
								borderRadius: 5,
								bottom: 0,
								left: 0,
								right: 0,
								width: 'auto',
								height: '100%',
								backgroundColor: 'rgba(0, 0, 0, 0.5)', // Здесь вы можете настроить уровень прозрачности (0.5 для 50% прозрачности)
								padding: 5, // Добавляем отступы, чтобы текст не прилипал к границам
							}}
						>
							<Text
								style={{
									position: 'absolute',
									color: 'white',
									bottom: 13,
									left: 5,
								}}
							>
								{event.title}
							</Text>
						</View>
					</Block>
				))}
			</ScrollView>
			<Title style={{ marginTop: 5 }}>Сегодня</Title>
			<ScrollView>
				{data2EventsNoSort.map(event => (
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

export default CalendarScreen
