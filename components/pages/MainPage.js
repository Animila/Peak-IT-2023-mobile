import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image, View } from 'react-native'
import { SvgXml } from 'react-native-svg'
import AdventuresScreen from '../screens/MainPage/AdventureScreen'
import BroadcastScreen from '../screens/MainPage/BroadcastScreen'
import CalendarScreen from '../screens/MainPage/CalendareScreen'
import ResultScreen from '../screens/MainPage/ResultScreen'
import TicketsScreen from '../screens/MainPage/TicketsScreen'

const Tab = createBottomTabNavigator()

const MainPage = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
				tabBarStyle: {
					backgroundColor: '#7BB4D2',
					position: 'absolute',
					bottom: 10,
					marginHorizontal: 10,
					borderRadius: 16,
					height: 66,
					shadowColor: '#000000',
					shadowOpacity: 0.25,
				},
			}}
		>
			<Tab.Screen
				name={'Calendar'}
				component={CalendarScreen}
				options={{
					tabBarIcon: ({ focused }) => (
						<View>
							<SvgXml
								xml={`<svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.65625 1.625V5.84375M28.3438 1.625V5.84375M1.625 31.1562V10.0625C1.625 8.94362 2.06947 7.87056 2.86064 7.07939C3.65181 6.28822 4.72487 5.84375 5.84375 5.84375H31.1562C32.2751 5.84375 33.3482 6.28822 34.1394 7.07939C34.9305 7.87056 35.375 8.94362 35.375 10.0625V31.1562M1.625 31.1562C1.625 32.2751 2.06947 33.3482 2.86064 34.1394C3.65181 34.9305 4.72487 35.375 5.84375 35.375H31.1562C32.2751 35.375 33.3482 34.9305 34.1394 34.1394C34.9305 33.3482 35.375 32.2751 35.375 31.1562M1.625 31.1562V17.0938C1.625 15.9749 2.06947 14.9018 2.86064 14.1106C3.65181 13.3195 4.72487 12.875 5.84375 12.875H31.1562C32.2751 12.875 33.3482 13.3195 34.1394 14.1106C34.9305 14.9018 35.375 15.9749 35.375 17.0938V31.1562M18.5 19.9062H18.515V19.9213H18.5V19.9062ZM18.5 24.125H18.515V24.14H18.5V24.125ZM18.5 28.3438H18.515V28.3587H18.5V28.3438ZM14.2812 24.125H14.2963V24.14H14.2812V24.125ZM14.2812 28.3438H14.2963V28.3587H14.2812V28.3438ZM10.0625 24.125H10.0775V24.14H10.0625V24.125ZM10.0625 28.3438H10.0775V28.3587H10.0625V28.3438ZM22.7188 19.9062H22.7338V19.9213H22.7188V19.9062ZM22.7188 24.125H22.7338V24.14H22.7188V24.125ZM22.7188 28.3438H22.7338V28.3587H22.7188V28.3438ZM26.9375 19.9062H26.9525V19.9213H26.9375V19.9062ZM26.9375 24.125H26.9525V24.14H26.9375V24.125Z" stroke="${
									focused ? '#CEE99D' : 'white'
								}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`}
								color={focused ? '#CEE99D' : 'white'}
							/>
						</View>
					),
				}}
			></Tab.Screen>
			<Tab.Screen
				name={'Ticket'}
				component={TicketsScreen}
				options={{
					tabBarIcon: ({ focused }) => (
						<View>
							<SvgXml
								xml={`<svg width="35" height="41" viewBox="0 0 35 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32.9688 9.95312C32.9688 14.2244 26.0425 17.6875 17.5 17.6875C8.9575 17.6875 2.03125 14.2244 2.03125 9.95312M32.9688 9.95312C32.9688 5.68187 26.0425 2.21875 17.5 2.21875C8.9575 2.21875 2.03125 5.68187 2.03125 9.95312M32.9688 9.95312V31.0469C32.9688 35.3181 26.0425 38.7812 17.5 38.7812C8.9575 38.7812 2.03125 35.3181 2.03125 31.0469V9.95312M32.9688 9.95312V16.9844M2.03125 9.95312V16.9844M32.9688 16.9844V24.0156C32.9688 28.2869 26.0425 31.75 17.5 31.75C8.9575 31.75 2.03125 28.2869 2.03125 24.0156V16.9844M32.9688 16.9844C32.9688 21.2556 26.0425 24.7188 17.5 24.7188C8.9575 24.7188 2.03125 21.2556 2.03125 16.9844" stroke="${
									focused ? '#CEE99D' : 'white'
								}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`}
								color={focused ? '#CEE99D' : 'white'}
							/>
						</View>
					),
				}}
			></Tab.Screen>
			<Tab.Screen
				name={'Adventure'}
				component={AdventuresScreen}
				options={{
					tabBarIcon: ({ focused }) => (
						<View>
							<Image source={require('../../assets/menu/adventure.png')} />
						</View>
					),
				}}
			></Tab.Screen>
			<Tab.Screen
				name={'Broadcast'}
				component={BroadcastScreen}
				options={{
					tabBarIcon: ({ focused }) => (
						<View>
							<SvgXml
								xml={`<svg width="41" height="29" viewBox="0 0 41 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.5312 11.6875L36.3812 2.8375C36.5779 2.64108 36.8284 2.50735 37.101 2.45319C37.3736 2.39903 37.6562 2.42688 37.913 2.53321C38.1698 2.63955 38.3893 2.8196 38.5439 3.05063C38.6984 3.28166 38.781 3.5533 38.7812 3.83125V25.1688C38.781 25.4467 38.6984 25.7183 38.5439 25.9494C38.3893 26.1804 38.1698 26.3605 37.913 26.4668C37.6562 26.5731 37.3736 26.601 37.101 26.5468C36.8284 26.4927 36.5779 26.3589 36.3812 26.1625L27.5312 17.3125M6.4375 27.1562H23.3125C24.4314 27.1562 25.5044 26.7118 26.2956 25.9206C27.0868 25.1294 27.5312 24.0564 27.5312 22.9375V6.0625C27.5312 4.94362 27.0868 3.87056 26.2956 3.07939C25.5044 2.28822 24.4314 1.84375 23.3125 1.84375H6.4375C5.31862 1.84375 4.24556 2.28822 3.45439 3.07939C2.66322 3.87056 2.21875 4.94362 2.21875 6.0625V22.9375C2.21875 24.0564 2.66322 25.1294 3.45439 25.9206C4.24556 26.7118 5.31862 27.1562 6.4375 27.1562Z" stroke="${
									focused ? '#CEE99D' : 'white'
								}" stroke-width="2.5" stroke-linecap="round"/>
</svg>
`}
								color={focused ? '#CEE99D' : 'white'}
							/>
						</View>
					),
				}}
			></Tab.Screen>
			<Tab.Screen
				name={'Result'}
				component={ResultScreen}
				options={{
					tabBarIcon: ({ focused }) => (
						<View>
							<SvgXml
								xml={`<svg width="35" height="41" viewBox="0 0 35 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.2813 5.1925C16.1594 5.58625 16.0938 6.00437 16.0938 6.4375C16.0938 7.21375 16.7237 7.84375 17.5 7.84375H25.9375C26.3105 7.84375 26.6681 7.69559 26.9319 7.43187C27.1956 7.16815 27.3438 6.81046 27.3438 6.4375C27.3439 6.01546 27.2807 5.59578 27.1562 5.1925M16.2813 5.1925C16.5476 4.33131 17.0826 3.578 17.808 3.04289C18.5334 2.50777 19.4111 2.21896 20.3125 2.21875H23.125C25.0225 2.21875 26.6256 3.47125 27.1562 5.1925M16.2813 5.1925C15.5763 5.23562 14.875 5.28625 14.1737 5.3425C12.0531 5.51875 10.4688 7.32437 10.4688 9.4525V13.4688M27.1562 5.1925C27.8612 5.23562 28.5625 5.28625 29.2638 5.3425C31.3844 5.51875 32.9688 7.32437 32.9688 9.4525V28.9375C32.9688 30.0564 32.5243 31.1294 31.7331 31.9206C30.9419 32.7118 29.8689 33.1562 28.75 33.1562H24.5312M10.4688 13.4688H4.14062C2.97625 13.4688 2.03125 14.4138 2.03125 15.5781V36.6719C2.03125 37.8362 2.97625 38.7812 4.14062 38.7812H22.4219C23.5862 38.7812 24.5312 37.8362 24.5312 36.6719V33.1562M10.4688 13.4688H22.4219C23.5862 13.4688 24.5312 14.4138 24.5312 15.5781V33.1562M9.0625 27.5312L11.875 30.3438L17.5 23.3125" stroke="${
									focused ? '#CEE99D' : 'white'
								}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`}
							/>
						</View>
					),
				}}
			></Tab.Screen>
		</Tab.Navigator>
	)
}

export default MainPage
