import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  table: []
}
export const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    createRows: (state) => {
      const rows = {
        keyRows: Date.now(),
        rows: "rows",
        rowsTitle: "",
        massa: "",
        humidity: "",
        ash: "",
        heat: "",
      }
      state.table.splice(0, 0, rows)
    },
    updateTable: (state, action) => { //action.payload[0] - идекс страки в которой происходит изменение action.payload[1] - само изменение
      state.table[action.payload[0] - 1] = action.payload[1]
    },
    createHeader: (state, action) => {
      state.table.push(action.payload)
    },
    btnCreateRowsAtTheHeader: (state, action) => {
      const rows = {
        keyRows: Date.now(),
        rows: "rows",
        rowsTitle: "",
        massa: "",
        humidity: "",
        ash: "",
        heat: "",
      }
      state.table.splice(action.payload, 0, rows)
    },
    removeHeader: (state, action) => {//action.payload[0]- номер строки header; action.payload[1]- количество элементов
      state.table.splice(action.payload[0] - 1, action.payload[1],)
    },
    removeRows: (state, action) => {
      state.table = state.table.filter((item, index) => index !== action.payload - 1)
    },
    clearTable: (state) => {
      state.table = []
    },
    addReadyMadeTable: (state, action) => {
      state.table.push(...action.payload)
    },

  }
})

// Action creators are generated for each case reducer function
export const { createRows, createHeader, clearTable, removeRows, removeHeader, updateTable, btnCreateRowsAtTheHeader, addReadyMadeTable, copyLastTable } = tableSlice.actions

export default tableSlice.reducer