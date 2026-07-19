import { createAsyncThunk } from "@reduxjs/toolkit";

// First, create the thunk
export const loginUserThunk = createAsyncThunk("users/fetchById", async () => {
    console.log("hello");
    
});
