import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommandHouses: [],
  systemInfo: [
    {
      date: "2021-08-08",
      content:
        "werawerkwejrwalejrklwejrlwerjlwekfjelwjklfawefawjefklawjefklajflwafejwkl",
    },
    {
      date: "2021-08-09",
      content:
        "werawerkwejrwalejrklwejrlwerjlwekfjelwjklfawefawjefklawjefklajflwafejwkl",
    },
    {
      date: "2021-08-10",
      content:
        "werawerkwejrwalejrklwejrlwerjlwekfjelwjklfawefawjefklawjefklajflwafejwkl",
    },
  ],
};

const homeSlice = createSlice({
  name: "home",
  initialState: initialState,
  reducers: {},
});


export const {} = homeSlice.actions;
export default homeSlice.reducer;