import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { selectRestaurant } from '../contexts/restaurantSlice'
import { selectBasketItems } from '../contexts/basketSlice'
import { SafeAreaView } from 'react-native-safe-area-context'
import { XCircleIcon } from 'react-native-heroicons/outline'

export default function BasketScreen() {
  const [groupItemInBasket, setGroupItemInBasket] = useState([])
  const navigation = useNavigation()
  const restaurant = useSelector(selectRestaurant)
  const items = useSelector(selectBasketItems)
  const dispatch = useDispatch()

  useEffect(() => {
    const groupItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item)
      return results
    }, {})
    setGroupItemInBasket(groupItems)
  },
    [items])

  return (
    <SafeAreaView className=' flex-1 bg-white'>
      <View className='flex-1 bg-gray-100'>
        <View className='p-5 border-b border-[#00CCBB] bg-white shadow-sm'>
          <View>
            <Text className='text-lg font-bold text-center'>
              Basket
            </Text>
            <Text className='text-center text-gray-400'>
              {restaurant.title}
            </Text>
          </View>

          <TouchableOpacity
            onPress={navigation.goBack}
            className='rounded-full bg-gray-100 absolute top-3 right-5'>

            <XCircleIcon color='#00CCBB' height={50} width={50} />
          </TouchableOpacity>
        </View>

        <View className='flex-row items-center space-x-4 px-4 py-3 bg-white my-5'>
          <Image
            source={{
              uri: "https://burst.shopifycdn.com/photos/cozy-reading-in-bed.jpg?width=373&format=pjpg&exif=1&iptc=1",
            }}
            className="h-12 w-12 bg-gray-300 p-4 rounded-full"
          />
          <Text className='flex-1'>
            Deliver in 50-75 min
          </Text>
          <TouchableOpacity>
              <Text className='text-[#00CCBB]'>
                Change
              </Text>
          </TouchableOpacity>
        </View>

        <ScrollView>
            {Object.entries(groupItemInBasket).map(([key, items]) => (
              <View key={key}>
                <Text>{items.length}</Text>
              </View>
            ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}