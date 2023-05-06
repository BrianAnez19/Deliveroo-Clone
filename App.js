import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import { StatusBar } from 'expo-status-bar';
import {Platform} from 'react-native'; 

if ((Platform.OS === 'ios') || (Platform.OS === 'android')){
  require('react-native-url-polyfill/auto'); 
}  else {
  require('react-native-url-polyfill/index'); 
}

const Stack = createNativeStackNavigator()

export default function App() {
  
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
          <Stack.Screen name="Inicio" component={HomeScreen} />
        </Stack.Navigator>
      </TailwindProvider>
      <StatusBar style="auto" />
    </NavigationContainer >
  );
}
