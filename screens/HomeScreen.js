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
      <ScrollView>

        <Categories />

        <FeaturedRow
          id={123}
          title="Featured"
          description=""
        />

        <FeaturedRow
          id={123}
          title="Tasty Discounts"
          description=""
        />

        <FeaturedRow
          id={123}
          title="Offers near you!"
          description=""
        />

      </ScrollView>

    </SafeAreaView>
  )
}