import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  clearModal: false,
  loadModal: false,
  savedModal: false,

  errorModal: {
    section: false,
    massa: {
      active: false,
      maxMassa: 0,
    },
    ash: {//законченный компонент
      active: false,
      numberRows: 0,
    },
    humidity: {
      active: false,
      numberRows: 0,
    }
  }
}
export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    changeModalClear: (state, action) => {
      state.clearModal = action.payload
    },
    changeSavedModal: (state, action) => {
      state.savedModal = action.payload
    },
    changeLoadModal: (state, action) => {
      state.loadModal = action.payload
    },

    changeErrorMassa: (state, action) => {
      state.errorModal.errorMassa = action.payload
    },
    changeAshError: (state, action) => {
      state.errorModal.ash.active = action.payload
    },
    changeHumidityError: (state, action) => {
      state.errorModal.humidityError = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { changeModalClear, changeLoadModal, changeErrorMassa, changeAshError, changeHumidityError, changeSavedModal } = modalSlice.actions

export default modalSlice.reducer