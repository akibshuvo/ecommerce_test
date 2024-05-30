import { configureStore } from '@reduxjs/toolkit'
import usersSlices from './slices/userSlices'

export default configureStore({
  reducer: {
    currentUser: usersSlices,
  }
})