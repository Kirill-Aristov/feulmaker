import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  table: [
    {
      rows: "rows",
      rowsTitle: "1",
      massa: "",
      humidity: "",
      ashContent: "",
      heat: "",
    },
    {
      rows: "rows",
      rowsTitle: "2",
      massa: "",
      humidity: "",
      ashContent: "",
      heat: "",
    },
    {
      rows: "rows",
      rowsTitle: "3",
      massa: "",
      humidity: "",
      ashContent: "",
      heat: "",
    },
    {
      rows: "rows",
      rowsTitle: "4",
      massa: "",
      humidity: "",
      ashContent: "",
      heat: "",
    }
  ]
}
export const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    createRows: (state, action) => {
      state.table.unshift(action.payload)
    },
    removeRows: (state, action) => {
      state.table = state.table.filter((item, index) => index !== action.payload - 1)
    },
    updateTable: (state, action) => {
      state.table[action.payload[0] - 1] = action.payload[1]
    },
    createHeader: (state, action) => {
    },
    createPlusRows: (state, action) => {
    },
    clearTable: (state) => {
      state.table = []

    }
  },
})

// Action creators are generated for each case reducer function
export const { createRows, createHeader, clearTable, createPlusRows, removeRows, updateTable } = tableSlice.actions

export default tableSlice.reducer