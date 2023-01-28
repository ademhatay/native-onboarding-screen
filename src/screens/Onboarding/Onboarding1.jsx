import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Screen from '../Screen'
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from '../../config/colors';
import Pagination from '../../components/Pagination';

const Onboarding1 = ({ navigation }) => {

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
					<Image className="w-full h-full" resizeMode='stretch' source={require('../../assets/img1.png')} />
				</View>
				<View className="flex-1 flex-row justify-between px-8 items-center">
					<View className="w-[100px]">
						<Pagination page={1} navigation={navigation} />
					</View>
					<View>
						<TouchableOpacity onPress={() => navigation.navigate('onboarding2')} className="w-14 h-14 rounded-full justify-center items-center bg-white">
							<Ionicons name="chevron-forward" size={36} color={colors.primary} />
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</Screen>
		<StatusBar backgroundColor={colors.primary} style='light' />
	</>
}

export default Onboarding1