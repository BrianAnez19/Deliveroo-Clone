import { ScrollView } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import HeaderUniversal from '../components/HeaderUniversal';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchTop from '../components/SearchTop';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

export default function Home() {
  const navigation = useNavigation()

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

        <FeaturedRow
          id={123}
          title="Featured"
          description="Paid placements from our partners"
        />

        <FeaturedRow
          id={123}
          title="Tasty Discounts"
          description="Everyone's been enjoying these juicy discounts!"
        />

        <FeaturedRow
          id={123}
          title="Offers near you!"
          description="Why not support your local restaurant tonight!"
        />

      </ScrollView>
    </SafeAreaView>
  )
}