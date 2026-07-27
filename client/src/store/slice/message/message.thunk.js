import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import { axiosInstance } from "../../../component/utilities/axiosInstance";

export const sendMessageThunk = createAsyncThunk(
  "message/send",
  async ({ receiverId, message }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(`/message/send/${receiverId}`, {
        message,
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

export const getMessageThunk = createAsyncThunk(
  "message/get",
  async ({ receiverId }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `/message/get-messages/${receiverId}`,
      );
      // toast.success("Login Successfull")
      console.log("response",response);

      return response.data;
    } catch (error) {
      console.log("error message",error)
      console.log(error?.response?.data?.errMessage);
      const errorOutput =
        error?.response?.data?.errMessage || "Something went wrong";

      toast.error(errorOutput);

      return rejectWithValue(errorOutput);
    }
  },
);
