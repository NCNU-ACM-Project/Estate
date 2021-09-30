import { configureStore } from '@reduxjs/toolkit';

//------------------------------
//          Reducers
//------------------------------
import filterReducer from './slices/filter';
import informationReducer from './slices/addinformation';
import homePageReducer from './slices/homePage.reducer';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    information: informationReducer,
    home: homePageReducer,
  },
})