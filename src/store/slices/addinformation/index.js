import informationReducer, { actions } from './InformationSlice';
export default informationReducer;
export const { 
  setData,
  setBuyer,
  setLook,
  setNum,
  setMoney,
  setHouse,
  setCar,
  setDate,
  resetinformation,
} = actions;