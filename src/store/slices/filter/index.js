import filterReducer, { actions } from './FilterSlice';
export default filterReducer;
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
  setNewsType,
  setOrderType,
  setDataType,
  setSearchNews,
  setChooseDate,
} = actions;
