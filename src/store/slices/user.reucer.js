import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login, logout } from "../../services/authentication";

const initialState = {
  loggingIn: false,
  user: null,
};

export const loginRequest = createAsyncThunk(
  "users/authentication",
  async ({ userName = "none", passWd = "none" }, thunkAPI) => {
    let response = {userName: "123", avatorImg: "jkdsl;jfadsf"};

    // not working, maybe can use this to handle the async request
    // thunkAPI.fulfillWithValue({userName: "123", avatorImg: "jkdsl;jfadsf"});

    return response;
  }
);

const homeSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    logOut: (state, action) => {
      state.user = null;

      // revoke the token and some cleanup
      logout();
    },
  },
  extraReducers: (builder) => {
    // login pending
    builder.addCase(loginRequest.pending, (state, action) => {
      state.loggingIn = true;
    });

    // login success
    builder.addCase(loginRequest.fulfilled, (state, action) => {
      state.loggingIn = false;
      state.user = action.payload;
    });

    // login failed
    builder.addCase(loginRequest.rejected, (state, action) => {
      state.loggingIn = false;
    });
  },
});

export const { logOut } = homeSlice.actions;
export default homeSlice.reducer;
