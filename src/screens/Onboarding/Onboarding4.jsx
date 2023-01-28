import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Screen from '../Screen'
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from '../../config/colors';
import Pagination from '../../components/Pagination';

const Onboarding4 = ({ navigation }) => {
	return <>
		<Screen>
			<View className="flex-1 bg-lightBlue">
				<View className="flex-1 justify-center px-7">
					<Text className="text-2xl font-bold text-white mb-2">
						Do not pay for parking, maintenance and gasoline
					</Text>
					<Text className="text-lg text-white mt-2">
						We will pay for you, all expenses related to the car
					</Text>
				</View>
				<View className="flex-[2] ">
					<Image className="w-full h-full" resizeMode='stretch' source={require('../../assets/img4.png')} />
				</View>
				<View className="flex-1 flex-row justify-between px-8 items-center">
					<View className="w-[100px]">
						<Pagination page={4} navigation={navigation} />
					</View>
					<View>
						<TouchableOpacity onPress={() => navigation.navigate('home')} className="w-14 h-14 rounded-full justify-center items-center bg-white">
							<Ionicons name="chevron-forward" size={36} color={colors.lightBlue} />
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</Screen>
		<StatusBar backgroundColor={colors.lightBlue} style='light' />
	</>
}

export default Onboarding4