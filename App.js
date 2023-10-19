import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import { useCallback, useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'

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
			{/* <Image source={require('./assets/first_logo.png')} /> */}
			<StatusBar style='auto' />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
