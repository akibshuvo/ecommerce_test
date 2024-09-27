'use client'
import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slices/cartSlice'

export default configureStore({
  reducer: {
    cartReducer: cartSlice
  },
})