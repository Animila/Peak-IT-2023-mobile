import { useRoute } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import {
	Image,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native'
import getQuestionById from '../../../functions/getQuestionById'

import quest1 from '../../../../assets/adventure/big1.png'
import quest2 from '../../../../assets/adventure/big2.png'
import quest3 from '../../../../assets/adventure/big3.png'
import quest4 from '../../../../assets/adventure/big4.png'
import quest5 from '../../../../assets/adventure/big5.png'
import quest6 from '../../../../assets/adventure/big6.png'

const QuestionPage = () => {
	const route = useRoute()
	const { questionId } = route.params
	const [question, setQuestion] = useState(null)

	useEffect(() => {
		// Вызываем функцию для получения вопроса по id
		getQuestionById(questionId)
			.then(response => {
				if (response) {
					setQuestion(response)
				} else {
					console.error('Вопрос не найден')
				}
			})
			.catch(error => {
				console.error('Ошибка при загрузке вопроса', error)
			})
	}, [questionId])

	function getImageByQuestionId(questionId) {
		console.log(questionId)
		switch (questionId) {
			case 1:
				return quest1
			case 2:
				return quest2
			case 3:
				return quest3
			case 4:
				return quest4
			case 5:
				return quest5
			case 6:
				return quest6
			// Добавьте другие кейсы по мере необходимости для других изображений
			default:
				return null // Возврат null, если не найдено подходящее изображение
		}
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
				<View style={style[`quest_${questionId}`]}>
					<Image
						source={getImageByQuestionId(questionId)}
						style={style[`image_${questionId}`]}
					/>
					{question ? (
						<>
							<View style={style[`circle_${questionId}`]}>
								<Text>{question.description}</Text>
							</View>
							<View
								style={{
									justifyContent: 'center',
									marginTop: 257,
									flexDirection: 'row',
									gap: 14,
								}}
							>
								{question.results.map((item, index) => (
									<TouchableOpacity key={index}>
										<View>
											<Text>{item.title}</Text>
										</View>
									</TouchableOpacity>
								))}
							</View>
						</>
					) : (
						<Text>Загрузка вопроса...</Text>
					)}
				</View>
			</SafeAreaView>
		</View>
	)
}

const style = StyleSheet.create({
	quest_1: {
		marginTop: 101,
		justifyContent: 'center',
		alignItems: 'center',
	},
	circle_1: {
		position: 'absolute',
		top: 87,
		left: 79,
		borderRadius: 100,
		padding: 12,
		borderWidth: 2,
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: '#CEE99D',
		width: 213,
		height: 213,
	},
	circle_2: {
		position: 'absolute',
		top: 120,
		left: 20,
		padding: 12,
		borderWidth: 2,
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: '#CEE99D',
		width: 213,
	},
	quest_2: {
		marginTop: 173,

		justifyContent: 'center',
		alignItems: 'center',
		position: 'relative',
	},
	image_2: {
		marginLeft: 100,
	},

	question: {
		borderRadius: 10,
		borderWidth: 2,
	},
})

export default QuestionPage
