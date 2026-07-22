import { createSlice } from "@reduxjs/toolkit";
import {
  getUserProfileThunk,
  loginUserThunk,
  logoutUserThunk,
  registerUserThunk,
} from "./user.thunk";

const initialState = {
  isAuthenticated: false,
  screenLoading: true,
  userProfile: null,
  buttonLoading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},

  //LOGIN USER
  extraReducers: (builder) => {
    builder.addCase(loginUserThunk.pending, (state, action) => {
      state.buttonLoading = true;
    });
    builder.addCase(loginUserThunk.fulfilled, (state, action) => {
      // console.log(action.payload);
      state.userProfile = action.payload?.responseData?.user;
      state.isAuthenticated = true;
      state.buttonLoading = false;
    });
    builder.addCase(loginUserThunk.rejected, (state, action) => {
      state.buttonLoading = false;
    });

    // REGISTER USER
    builder.addCase(registerUserThunk.pending, (state, action) => {
      state.buttonLoading = true;
    });
    builder.addCase(registerUserThunk.fulfilled, (state, action) => {
      console.log(action.payload);
      state.userProfile = action.payload?.responseData?.user;
      state.isAuthenticated = true;
      state.buttonLoading = false;
    });
    builder.addCase(registerUserThunk.rejected, (state, action) => {
      state.buttonLoading = false;
    });

    //LOGOUT USER
    builder.addCase(logoutUserThunk.pending, (state, action) => {
      state.buttonLoading = true;
    });
    builder.addCase(logoutUserThunk.fulfilled, (state, action) => {
      console.log(action.payload);
      ((state.userProfile = null),
        (state.isAuthenticated = false),
        (state.buttonLoading = false));
    });
    builder.addCase(logoutUserThunk.rejected, (state, action) => {
      state.buttonLoading = false;
    });

    //GET USER profile

    builder.addCase(getUserProfileThunk.pending, (state, action) => {});
    builder.addCase(getUserProfileThunk.fulfilled, (state, action) => {
      ((state.isAuthenticated = true), (state.screenLoading = false));
       console.log(action.payload);
    });
    builder.addCase(getUserProfileThunk.rejected, (state, action) => {
      state.screenLoading = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = userSlice.actions;

export default userSlice.reducer;
