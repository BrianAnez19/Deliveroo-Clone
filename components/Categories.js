import { ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'
import { CategoriesG } from '../Query'
import { urlFor } from '../sanity'

export default function Categories() {
    const { categoriesG } = CategoriesG()

    return (
        <ScrollView
            contentContainerStyle={{
                paddingTop: 10,
                paddingHorizontal: 15
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            {categoriesG?.map((category) => (
                <CategoryCard
                    key={category._id}
                    ImgUrl={urlFor(category.image).url()}
                    Title={category.name} />
            ))}
        </ScrollView>
    )
}