import { configureStore } from '@reduxjs/toolkit';
import tableSlice from '../actions/actions';

export const store = configureStore({
  reducer: {
    tableActive: tableSlice,
  },

})