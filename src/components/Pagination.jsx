import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Pagination = ({ navigation, page }) => {

	return <>
		<View className="mb-2 w-full h-3 flex-row justify-evenly">
			<TouchableOpacity
				onPress={() => navigation.navigate('onboarding1')}
				className={`w-${page === 1 ? '8' : '3'} h-3 mx-2 bg-white ${page === 1 ? '' : 'opacity-50'} rounded-full`}></TouchableOpacity>

			<TouchableOpacity
				onPress={() => navigation.navigate('onboarding2')}
				className={`w-${page === 2 ? '8' : '3'} h-3 mx-2 bg-white ${page === 2 ? '' : 'opacity-50'} rounded-full`}></TouchableOpacity>

			<TouchableOpacity
				onPress={() => navigation.navigate('onboarding3')}
				className={`w-${page === 3 ? '8' : '3'} h-3 mx-2 bg-white ${page === 3 ? '' : 'opacity-50'} rounded-full`}></TouchableOpacity>

			<TouchableOpacity
				onPress={() => navigation.navigate('onboarding4')}
				className={`w-${page === 4 ? '8' : '3'} h-3 mx-2 bg-white ${page === 4 ? '' : 'opacity-50'} rounded-full`}></TouchableOpacity>
		</View>
		<TouchableOpacity onPress={() => navigation.navigate('home')} className="mt-2">
			<Text className="text-lg text-center text-white tracking-widest">Skip</Text>
		</TouchableOpacity>
	</>
}

export default Pagination