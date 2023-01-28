import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Screen from '../Screen'
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from '../../config/colors';
import Pagination from '../../components/Pagination';

const Onboarding2 = ({ navigation }) => {
	return <>
		<Screen>
			<View className="flex-1 bg-secondary">
				<View className="flex-1 justify-center pl-5 pr-10">
					<Text className="text-3xl font-bold text-white mb-2">
						Always there: more than 1000 cars in World
					</Text>
					<Text className="text-lg text-white mt-2">
						Our company is a leader by the number of cars in the fleet
					</Text>
				</View>
				<View className="flex-[2]">
					<Image className="w-full h-full" resizeMode='stretch' source={require('../../assets/img2.png')} />
				</View>
				<View className="flex-1 flex-row justify-between px-8 items-center">
					<View className="w-[100px]">
						<Pagination page={2} navigation={navigation} />
					</View>
					<View>
						<TouchableOpacity onPress={() => navigation.navigate('onboarding3')} className="w-14 h-14 rounded-full justify-center items-center bg-white">
							<Ionicons name="chevron-forward" size={36} color={colors.secondary} />
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</Screen>
		<StatusBar backgroundColor={colors.secondary} style='light' />
	</>
}

export default Onboarding2