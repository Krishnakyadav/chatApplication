import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import { axiosInstance } from "../../../component/utilities/axiosInstance";

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

      toast.success("Account Created Successfully");
      // console.log(response);

      return response.data;
    } catch (error) {
      console.log(error);
      console.log(error?.response?.data?.errMessage);
      const errorOutput =
        error?.response?.data?.errMessage || "Something went wrong";

      toast.error(errorOutput);

      return rejectWithValue(errorOutput);
    }
  },
);

export const logoutUserThunk = createAsyncThunk(
  "user/logout",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/user/logout");

      toast.success("Logout Successfull");
      // console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      console.log(error?.response?.data?.errMessage);
      const errorOutput =
        error?.response?.data?.errMessage || "Something went wrong";

      toast.error(errorOutput);

      return rejectWithValue(errorOutput);
    }
  },
);

export const getUserProfileThunk = createAsyncThunk(
  "user/get-profile",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/user/get-profile");
      return response.data;
    } catch (error) {
      console.log(error);
      console.log(error?.response?.data?.errMessage);
      console.log("Status:", error.response?.status);
      console.log("Response:", error.response?.data);
      const errorOutput =
        error?.response?.data?.errMessage || "Something went wrong";

      // toast.error(errorOutput);

      return rejectWithValue(errorOutput);
    }
  },
);

export const getOtherUsersThunk = createAsyncThunk(
  "user/getOtherUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/user/get-other-users");
      // console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      console.log(error?.response?.data?.errMessage);
      const errorOutput =
        error?.response?.data?.errMessage || "Something went wrong";

      // toast.error(errorOutput);

      return rejectWithValue(errorOutput);
    }
  },
);
