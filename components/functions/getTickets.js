// Ваш импорт данных и функции
import data from '../data/questionsData' // Путь к файлу с данными

export default getQuestionById = id => {
	// Эмуляция запроса к серверу
	return new Promise(resolve => {
		// Имитируем задержку, как будто мы ждем ответа от сервера
		setTimeout(() => {
			// Ищем вопрос по id
			const question = data.find(item => item.id === id)

			if (question) {
				resolve(question)
			} else {
				resolve(null) // Возвращаем null, если вопрос с таким id не найден
			}
		}, 1000) // 1000 миллисекунд (1 секунда) задержки
	})
}
