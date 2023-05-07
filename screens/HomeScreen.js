import { ScrollView } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import HeaderUniversal from '../components/HeaderUniversal';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchTop from '../components/SearchTop';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import FeaturedGen from '../Query/index';

export default function Home() {
  const navigation = useNavigation()
  const { featuredG } = FeaturedGen()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <SafeAreaView className="bg-white pt-2">
      {/* Header */}
      <HeaderUniversal />

      {/* Search */}
      <SearchTop />

      {/* body */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 112,
        }}
      >

        <Categories />

        {featuredG?.map((category) => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}