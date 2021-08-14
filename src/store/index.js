import { configureStore } from '@reduxjs/toolkit';

//------------------------------
//          Reducers
//------------------------------
import filterReducer from './slices/filter';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
  },
})