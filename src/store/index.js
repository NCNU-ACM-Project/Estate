import { configureStore } from '@reduxjs/toolkit';

//------------------------------
//          Reducers
//------------------------------
import filterReducer from './slices/filter';
import homePageReducer from './slices/homePage.reducer';
import userReucer from './slices/user.reucer';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    home: homePageReducer,
    user: userReucer,
  },
})