import { configureStore } from '@reduxjs/toolkit';

//------------------------------
//          Reducers
//------------------------------
import filterReducer from './slices/filter';
import homePageReducer from './slices/homePage.reducer';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    home: homePageReducer,
  },
})