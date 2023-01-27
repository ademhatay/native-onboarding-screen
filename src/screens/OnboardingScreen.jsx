import React from 'react'
import Screen from './Screen'

import { Text, View } from 'react-native'

const OnboardingScreen = () => {
	return <>
		<Screen>
			<View className="flex-1 bg-red-500">
				<Text>Onboarding Screen</Text>
			</View>
		</Screen>
	</>
}

export default OnboardingScreen