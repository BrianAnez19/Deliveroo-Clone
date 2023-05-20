import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './contexts/basketSlice'

export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
})