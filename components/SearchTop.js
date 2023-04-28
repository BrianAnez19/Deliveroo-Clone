import React from 'react';
import { View, TextInput } from 'react-native';
import { AdjustmentsHorizontalIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';

export default function SearchTop() {
    return (
        <View className="flex-row items-center space-x-2 pb-2 mx-4">
            <View className="flex-row rounded-full flex-1 space-x-2 bg-gray-200 p-3">
                <MagnifyingGlassIcon color="gray" size={20} />
                <TextInput placeholder='Restaurant and cuisines'
                    keyboardType='default' />
            </View>

            <AdjustmentsHorizontalIcon color="#00CCBB" />
        </View>
    )
}