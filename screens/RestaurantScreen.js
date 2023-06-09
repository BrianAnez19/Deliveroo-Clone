import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useEffect } from 'react'
import { useRoute } from '@react-navigation/native'
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { urlFor } from '../sanity';
import { ArrowLeftIcon, ChevronRightIcon, MapPinIcon, QuestionMarkCircleIcon, StarIcon } from 'react-native-heroicons/outline'
import DishRow from '../components/DishRow';
import BasketIcon from '../components/BasketIcon';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../contexts/restaurantSlice';


export default function RestaurantScreen() {
  const { params: { id, ImgUrl, title, rating, genre,
    address, short_description, dishes, long, lat } } = useRoute()
  const dispatch = useDispatch()
  const navigation = useNavigation()

  useEffect(() => {
    dispatch(setRestaurant({
      id, ImgUrl, title, rating, genre,
      address, short_description, dishes, long, lat
    }))
  }, [])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <SafeAreaView>
      <BasketIcon />
      <ScrollView>
        <View>
          <Image source={{ uri: urlFor(ImgUrl).url(), }}
            className="h-56 w-full bg-gray-300 p-4"
          />
          <TouchableOpacity
            onPress={navigation.goBack}
            className='absolute top-5 left-5 p-2 bg-gray-100 rounded-full'>
            <ArrowLeftIcon size={25} color='#00CCBB' />
          </TouchableOpacity>
        </View>

        <View className='bg-white'>
          <View className='px-4 pt-4'>
            <Text className='text-3xl font-bold'>{title}</Text>

            <View className='flex-row space-x-2 my-1'>
              <View className='flex-row items-center space-x-1'>
                <StarIcon color='green' opacity={0.5} size={22} />
                <Text className='text-xs text-gray-500'>
                  <Text className='text-green-500'>{rating}</Text> . {genre}
                </Text>
              </View>

              <View className='flex-row items-center space-x-1'>
                <MapPinIcon color='gray' opacity={0.4} size={22} />
                <Text className='text-xs text-gray-500'>
                  Nearby . {address}
                </Text>
              </View>
            </View>

            <Text className='text-gray-500 mt-2 pb-4'>
              {short_description}
            </Text>
          </View>

          <TouchableOpacity className='flex-row items-center space-x-2 p-4 border-y border-gray-300'>
            <QuestionMarkCircleIcon color='gray' opacity={0.6} size={20} />
            <Text className='pl-2 flex-1 text-md font-bold'>
              Have a food allergy?
            </Text>
            <ChevronRightIcon color='#00CCBB' />
          </TouchableOpacity>
        </View>

        <View className='pb-32'>
          <Text className='px-4 pt-2 mb-2 font-bold text-xl'>
            Menu
          </Text>

          {/* Dishrows */}

          {dishes.map((dish) => (
            <DishRow
              key={dish._id}
              id={dish._id}
              name={dish.name}
              description={dish.short_description}
              price={dish.price}
              image={dish.image}
            />
          ))}

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}