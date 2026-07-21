import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import axiosInstance from "../../../component/utilities/axiosInstance";

// First, create the thunk
// export const loginUserThunk = createAsyncThunk("users/fetchById", async ({username,password},{rejectWithValue}) => {
//   try {
//     const response = await axiosInstance.post("/user/login", {
//       username,
//       password,
//     });
//     console.log(response);
//     return response.data
//   } catch (error) {
//     console.error(error)
//     console.log(error?.response?.data?.errMessage);
//     const errorOutput = error?.response?.data?.errMessage
//     toast.error(errorOutput)
//     return rejectWithValue(errorOutput);
//      console.log("Message:", error.message);

//   return rejectWithValue(error.response?.data || error.message);
//   }
// });

// second
export const loginUserThunk = createAsyncThunk(
  "user/login",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/user/login", {
        username,
        password,
      });

      // toast.success("Login Successfull")
      console.log(response);

      return response.data;
    } catch (error) {
      console.log(error?.response?.data?.errMessage);
      const errorOutput =
        error?.response?.data?.errMessage || "Something went wrong";

      toast.error(errorOutput);

      return rejectWithValue(errorOutput);
    }
  },
);

export const registerUserThunk = createAsyncThunk(
  "user/signup",
  async ({ fullName, username, password, gender }, { rejectWithValue }) => {
    // console.log(fullName,username,password,gender)
    try {
      const response = await axiosInstance.post("/user/register", {
        fullName,
        username,
        password,
        gender,
      });

      toast.success("Account Created Successfully")
      // console.log(response);

      return response.data;
    } catch (error) {
      console.log(error)
      console.log(error?.response?.data?.errMessage);
      const errorOutput =
        error?.response?.data?.errMessage || "Something went wrong";

      toast.error(errorOutput);

      return rejectWithValue(errorOutput);
    }
  },
);


export const registerUserThunk = createAsyncThunk(
  "user/signup",
  async ({ fullName, username, password, gender }, { rejectWithValue }) => {
    // console.log(fullName,username,password,gender)
    try {
      const response = await axiosInstance.post("/user/register", {
        fullName,
        username,
        password,
        gender,
      });

      toast.success("Account Created Successfully")
      // console.log(response);

      return response.data;
    } catch (error) {
      console.log(error)
      console.log(error?.response?.data?.errMessage);
      const errorOutput =
        error?.response?.data?.errMessage || "Something went wrong";

      toast.error(errorOutput);

      return rejectWithValue(errorOutput);
    }
  },
);