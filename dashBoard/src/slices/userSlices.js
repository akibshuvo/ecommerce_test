import { createSlice } from '@reduxjs/toolkit'

export const userSlices = createSlice({
  name: 'user',
  initialState: {
    value: null
  },
  reducers: {
    activeUser: (state,action) => {
      state.value = action.payload
    }
  }
})


export const { activeUser } = userSlices.actions

export default userSlices.reducer