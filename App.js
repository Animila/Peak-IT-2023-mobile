import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useCallback, useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import MainPage from './components/pages/MainPage'
import StartScreen from './components/pages/StartPage'
import ListAdventure from './components/screens/EnterPage/AdventurePage/ListAdventure'
import QuestionPage from './components/screens/EnterPage/AdventurePage/QuestionPage'
import ResultPage from './components/screens/EnterPage/ResultPage'

const Stack = createStackNavigator()

export default function App() {
	const [appIsReady, setAppIsReady] = useState(false)

	useEffect(() => {
		async function prepare() {
			try {
				await SplashScreen.preventAutoHideAsync()
				await new Promise(resolve => setTimeout(resolve, 2000))
				useFonts({
					regular: require('./assets/fonts/Inter-Regular.ttf'),
					medium: require('./assets/fonts/Inter-Medium.ttf'),
				})
			} catch (e) {
				console.log(e)
			} finally {
				setAppIsReady(true)
			}
		}
		prepare()
	}, [])

	const onLayoutRootView = useCallback(async () => {
		if (appIsReady) {
			await SplashScreen.hideAsync()
		}
	}, [appIsReady])

	if (!appIsReady) {
		return null
	}

	return (
		<View style={styles.container} onLayout={onLayoutRootView}>
			<NavigationContainer>
				<Stack.Navigator initialRouteName='StartScreen'>
					<Stack.Screen
						name='StartScreen'
						component={StartScreen}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name='MainScreen'
						component={MainPage}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name='ResultPage'
						component={ResultPage}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name='ListAdventure'
						component={ListAdventure}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name='QuestionPage'
						component={QuestionPage}
						options={{ headerShown: false }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		position: 'relative',
		height: '100%',
		backgroundColor: '#FFFFFF',
	},
	photo: {
		position: 'absolute',
		bottom: 0,
	},
})
