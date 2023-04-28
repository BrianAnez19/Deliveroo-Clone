import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronDownIcon, UserIcon } from 'react-native-heroicons/outline';

export default function Home() {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <SafeAreaView className="bg-white pt-2">
      <View className="flex-row pb-3 items-center mx-4 space-x-2 px-1">
        <Image
          source={{
            uri: "https://burst.shopifycdn.com/photos/cozy-reading-in-bed.jpg?width=373&format=pjpg&exif=1&iptc=1",
          }}
          className="h-12 w-12 bg-gray-300 p-4 rounded-full"
        />



        <View className="flex-1">
          
          <Text className="font-bold text-gray-400 text-xs">
            Deliver Now!
          </Text>

          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>

        <UserIcon size={35} color="#00CCBB" />

      </View>
    </SafeAreaView>
  )
}