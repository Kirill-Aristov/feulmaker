import { createSlice } from '@reduxjs/toolkit'
import { dataReadyTable } from '../../assets/data/dataReadyTable'

const initialState = {
  lastTable: [],
  savedTable: [
    {
      category: 1,
      title: "Полный компонентный состав (40 компонентов)",
      rows: dataReadyTable
    }]
}
export const tableLocalStorageSlice = createSlice({
  name: 'localStorageTable',
  initialState,
  reducers: {
    savedListTable: (state, action) => {
      const table = {
        category: state.savedTable.length + 1,
        title: action.payload[0],
        rows: action.payload[1]
      }
      state.savedTable.push(table)
    },
    removeListTable: (state, action) => {
      state.savedTable = state.savedTable.filter((item, index) => index !== action.payload - 1)
    }
  }
})

export const { savedListTable, removeListTable } = tableLocalStorageSlice.actions

export default tableLocalStorageSlice.reducer