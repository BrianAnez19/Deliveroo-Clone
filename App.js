import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PreparingOrderScreen from './screens/PreparingOrderScreen';
import { NavigationContainer } from '@react-navigation/native';
import { TailwindProvider } from 'tailwindcss-react-native';
import RestaurantScreen from './screens/RestaurantScreen';
import DeliveryScreen from './screens/DeliveryScreen';
import BasketScreen from './screens/BasketScreen';
import HomeScreen from './screens/HomeScreen';
import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';

if ((Platform.OS === 'ios') || (Platform.OS === 'android')) {
  require('react-native-url-polyfill/auto');
} else {
  require('react-native-url-polyfill/index');
}

const Stack = createNativeStackNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Restaurante" component={RestaurantScreen} />
            <Stack.Screen name="Basket" component={BasketScreen}
              options={{ presentation: 'modal', headerShown: false }} />
            <Stack.Screen name="PreparingOrderScreen" component={PreparingOrderScreen}
              options={{ presentation: 'fullScreenModal', headerShown: false }} />
            <Stack.Screen name="Delivery" component={DeliveryScreen}
              options={{ presentation: 'fullScreenModal', headerShown: false }} />
          </Stack.Navigator>
        </TailwindProvider>
        <StatusBar style="auto" />
      </Provider>
    </NavigationContainer >
  );
}