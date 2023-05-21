import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './contexts/basketSlice'
import restaurantReducer from './contexts/restaurantSlice'

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    restaurant: restaurantReducer,
  },
})