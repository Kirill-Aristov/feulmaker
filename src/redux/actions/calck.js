import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status: false,
  calculations: {
    humidity: 0,
    ash: 0,
    heat: 0,
  },

}
export const calckulatorsSlice = createSlice({
  name: 'calck',
  initialState,
  reducers: {
    changeStatus: (state, action) => {
      state.status = action.payload
    },
    updateData: (state, action) => {
      state.humidity = action.payload[0]
      state.ash = action.payload[1]
      state.heat = action.payload[2]
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeStatus, updateData } = calckulatorsSlice.actions

export default calckulatorsSlice.reducer