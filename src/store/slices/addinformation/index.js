import informationReducer, { actions } from './InformationSlice';
export default informationReducer;
export const { 
  setData,
  setNum,
  setMoney,
  setHouse,
  setCar,
  setDate,
  resetinformation,
} = actions;