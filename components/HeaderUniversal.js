import React from 'react'
import { View, Text, Image } from 'react-native';
import { ChevronDownIcon, UserIcon } from 'react-native-heroicons/outline';

export default function HeaderUniversal() {
  return (
    <View className="flex-row pb-3 items-center mx-4 space-x-2">
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
  )
}