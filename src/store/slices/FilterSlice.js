import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: "",
  minTime: 0,
  maxTime: 0,
  minSize: 0,
  maxSize: 0,
  minPrice: 0,
  maxPrice: 0,
  sortingMethod: "",
  newsType: "0",
  orderType: "asc",
  dataType: "date",
  searchNews: "",
}
const filterSlice = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {
    setLocation: (state, action) => { state.location = action.payload;},
    setMinTime: (state, action) => { state.minTime = action.payload; },
    setMaxTime: (state, action) => { state.maxTime = action.payload; },
    setMinSize: (state, action) => { state.minSize = action.payload; },
    setMaxSize: (state, action) => { state.maxSize = action.payload; },
    setMinPrice: (state, action) => { state.minPrice = action.payload; },
    setMaxPrice: (state, action) => { state.maxPrice = action.payload; },
    setSortingMethod: (state, action) => { state.sortingMethod = action.payload; },
    resetFilter: (state) => { Object.assign(state, initialState) },

    setNewsType: (state, action) => { state.newsType = action.payload; },
    setOrderType: (state, action) => { state.orderType = action.payload; },
    setDataType: (state, action) => { state.dataType = action.payload; },
    setSearchNews:(state, action) => { state.searchNews = action.payload; },
  }
});
export default filterSlice.reducer;
export const {
  setLocation,
  setMinTime,
  setMaxTime,
  setMinSize,
  setMaxSize,
  setMinPrice,
  setMaxPrice,
  setSortingMethod,
  resetFilter,
} = filterSlice.actions;
