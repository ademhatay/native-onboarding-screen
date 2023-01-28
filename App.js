import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';
import Home from './src/screens/Home';
import Onboarding1 from './src/screens/Onboarding/Onboarding1';
import Onboarding2 from './src/screens/Onboarding/Onboarding2';
import Onboarding3 from './src/screens/Onboarding/Onboarding3';
import Onboarding4 from './src/screens/Onboarding/Onboarding4';


const Stack = createNativeStackNavigator();

export default function App() {
	return <>
		<NavigationContainer>
			<Stack.Navigator initialRouteName='onboarding1' screenOptions={{
				headerShown: false
			}}>
				<Stack.Screen name="onboarding1" component={Onboarding1} />
				<Stack.Screen name="onboarding2" component={Onboarding2} />
				<Stack.Screen name="onboarding3" component={Onboarding3} />
				<Stack.Screen name="onboarding4" component={Onboarding4} />
				<Stack.Screen name="home" component={Home} />
			</Stack.Navigator>
		</NavigationContainer>
	</>
}
