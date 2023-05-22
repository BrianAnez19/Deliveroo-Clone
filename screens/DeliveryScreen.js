import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectRestaurant } from '../contexts/restaurantSlice'
import { SafeAreaView } from 'react-native-safe-area-context'
import { XCircleIcon } from 'react-native-heroicons/outline'
import * as Progress from 'react-native-progress'
import * as Animatable from 'react-native-animatable'

export default function DeliveryScreen() {
    const navigation = useNavigation()
    const restaurant = useSelector(selectRestaurant)

    return (
        <View className='bg-[#00CCBB] flex-1'>
            <SafeAreaView className='z-50'>
                <View className='flex-row justify-between items-center p-5'>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Home')}>
                        <XCircleIcon color='white' size={40} />
                    </TouchableOpacity>

                    <Text className='font-light text-white text-lg'>
                        Order Help
                    </Text>
                </View>

                <View className='bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md'>
                    <View className='flex-row justify-between'>

                        <View>
                            <Text className='text-lg text-gray-400'>
                                Estimated Arrival
                            </Text>
                            <Text className='text-4xl font-bold'>
                                50-75 Minutes
                            </Text>
                        </View>

                        <Animatable.Image
                            source={require('../assets/Gifdelivery.gif')}
                            animation='slideInUp'
                            iterationCount={1}
                            className='h-20 w-20'
                        />
                    </View>

                    <Progress.Bar size={30} color='#00CCBB' indeterminate={true} />
                </View>
            </SafeAreaView>
        </View>
    )
}