import { configureStore } from '@reduxjs/toolkit';

//------------------------------
//          Reducers
//------------------------------
import filterReducer from './slices/FilterSlice';
import homePageReducer from './slices/homePage.reducer';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    home: homePageReducer,
  },
})