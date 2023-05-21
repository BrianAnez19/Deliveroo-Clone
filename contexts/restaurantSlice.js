import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    restaurant: {
        id: null,
        ImgUrl: null, 
        address: null, 
        title: null,
        dishes: null, 
        rating: null,
        short_description: null, 
        genre: null,
    },
}

export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {
            setRestaurant: (state, action) => {
                state.restaurant = action.payload
            }
        },
    },
)

export const { setRestaurant } = restaurantSlice.actions

export const selectRestaurant = (state) => state.restaurant.restaurant

export default restaurantSlice.reducer 