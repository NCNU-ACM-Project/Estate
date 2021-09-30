import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: "",
  buyer:"",
  look:"",
  num:"",
  money:"",
  house:"",
  car:"",
  date:"",
}
const informationSlice = createSlice({
  name: "information",
  initialState: initialState,
  reducers: {
    setData: (state, action) => { state.data = action.payload; },
    setBuyer: (state, action) => { state.buyer = action.payload; },
    setLook: (state, action) => { state.look = action.payload; },
    setNum: (state, action) => { state.num = action.payload; },
    setMoney: (state, action) => { state.money = action.payload; },
    setHouse: (state, action) => { state.house = action.payload; },
    setCar: (state, action) => { state.car = action.payload; },
    setDate: (state, action) => { state.date = action.payload; },
    resetinformation: (state) => { Object.assign(state, initialState) },
  }
});
export default informationSlice.reducer;
export const actions = informationSlice.actions;