import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: "",
  minTime: "",
  maxTime: "",
  minSize: "",
  maxSize: "",
  minPrice: "",
  maxPrice: "",
  sortingMethod: ""
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
    resetFilter: (state) => { Object.assign(state, initialState) }
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