import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import tableSlice from '../actions/actions';
import calckulatorsSlice from '../actions/calck';
import modalSlice from '../actions/modal';
import tableLocalStorageSlice from '../actions/table';

const rootReducer = combineReducers({
  tableLocal: tableLocalStorageSlice,
})

const persistConfig = {
  key: "dataTable",
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: {
    activeTable: tableSlice,
    tableLocal: persistedReducer,
    calck: calckulatorsSlice,
    modal: modalSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

})
export const persistor = persistStore(store)
export default store