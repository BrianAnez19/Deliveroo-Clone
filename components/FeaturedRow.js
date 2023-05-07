import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'
import { FeaturedEsp } from '../Query/index'

export default function FeaturedRow({ id, title, description }) {
    const { featuredE } = FeaturedEsp({ id })

    return (
        <View>
            <View className="mt-4 flex-row items-center justify-between px-4">
                <Text className="font-bold text-lg">
                    {title}
                </Text>
                <ArrowRightIcon color="#00CCBB" />
            </View>

            <Text className="text-xs text-gray-500 px-4">
                {description}
            </Text>

            <ScrollView horizontal
                contentContainerStyle={{
                    paddingHorizontal: 15,
                }}
                showsHorizontalScrollIndicator={false}
                className="pt-4">

                {featuredE?.map(restaurant => (
                    <RestaurantCard
                        key={restaurant._id}
                        id={restaurant._id}
                        ImgUrl={restaurant.image}
                        address={restaurant.address}
                        title={restaurant.name}
                        dishes={restaurant.dishes}
                        rating={restaurant.rating}
                        short_description={restaurant.short_description}
                        genre={restaurant.type?.name}
                        long={restaurant.long}
                        lat={restaurant.lat}
                    />
                ))}

            </ScrollView>
        </View>
    )
}