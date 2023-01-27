import { StatusBar } from 'expo-status-bar';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Screen from './src/screens/Screen';
import Ionicons from '@expo/vector-icons/Ionicons';

// const screens = [
// 	{
// 		title: 'Your first car without a driver\'s license',
// 		subtitle: 'Goes to meet people who just got their license',
// 		image: require('./src/assets/img1.png'),
// 		color: ['bg-primary', #F0CF69]
// 	}
// ]

export default function App() {
	return <>
		<Screen>
			<View className="flex-1 bg-primary">
				<View className="flex-1 justify-center px-5 pr-16">
					<Text className="text-3xl font-bold text-white mb-2">
						Your first car without a driver's license
					</Text>
					<Text className="text-lg text-white mt-2">
						Goes to meet people who just got their license
					</Text>
				</View>
				<View className="flex-[2]">
					<Image className="w-full h-full" source={require('./src/assets/img1.png')} />
				</View>
				<View className="flex-1 flex-row justify-between px-8 items-center">
					<View className="w-[100px]">
						<View className="mb-2 w-full h-3 flex-row justify-evenly">
							<View className="w-8 h-3 mx-2 bg-white  rounded-full"></View>
							<View className="w-3 h-3 mx-2 bg-white opacity-50 rounded-full"></View>
							<View className="w-3 h-3 mx-2 bg-white opacity-50 rounded-full"></View>
							<View className="w-3 h-3 mx-2 bg-white opacity-50 rounded-full"></View>
						</View>
						<TouchableOpacity className="mt-2">
							<Text className="text-lg text-center text-white tracking-widest">Skip</Text>
						</TouchableOpacity>
					</View>
					<View>
						<TouchableOpacity className="w-14 h-14 rounded-full justify-center items-center bg-white">
							<Ionicons name="chevron-forward" size={36} color="#F0CF69" />
						</TouchableOpacity>
					</View>
				</View>
			</View>

		</Screen>
		<StatusBar style="auto" backgroundColor='#F0CF69' />
	</>
}
