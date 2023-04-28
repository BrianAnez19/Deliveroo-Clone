import { ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

export default function Categories() {
    return (
        <ScrollView
            contentContainerStyle={{
                paddingTop: 10,
                paddingHorizontal: 15
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
        >

            <CategoryCard ImgUrl="https://burst.shopifycdn.com/photos/cozy-reading-in-bed.jpg?width=373&format=pjpg&exif=1&iptc=1"
                Title="testeo pal perreo" />
                
            <CategoryCard ImgUrl="https://burst.shopifycdn.com/photos/cozy-reading-in-bed.jpg?width=373&format=pjpg&exif=1&iptc=1"
                Title="testeo pal perreo" />

            <CategoryCard ImgUrl="https://burst.shopifycdn.com/photos/cozy-reading-in-bed.jpg?width=373&format=pjpg&exif=1&iptc=1"
                Title="testeo pal perreo" />

            <CategoryCard ImgUrl="https://burst.shopifycdn.com/photos/cozy-reading-in-bed.jpg?width=373&format=pjpg&exif=1&iptc=1"
                Title="testeo pal perreo" />

            <CategoryCard ImgUrl="https://burst.shopifycdn.com/photos/cozy-reading-in-bed.jpg?width=373&format=pjpg&exif=1&iptc=1"
                Title="testeo pal perreo" />

            <CategoryCard ImgUrl="https://burst.shopifycdn.com/photos/cozy-reading-in-bed.jpg?width=373&format=pjpg&exif=1&iptc=1"
                Title="testeo pal perreo" />

            <CategoryCard ImgUrl="https://burst.shopifycdn.com/photos/cozy-reading-in-bed.jpg?width=373&format=pjpg&exif=1&iptc=1"
                Title="testeo pal perreo" />

        </ScrollView>
    )
}