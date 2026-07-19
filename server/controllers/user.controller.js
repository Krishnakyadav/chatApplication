import User from "../models/user.model.js";
import { asyncHandler } from "../utilities/asyncHandler.utility.js";
import { errorHandler } from "../utilities/errorHandler.utlity.js";

export const register = asyncHandler((req, res, next) => {
  const { fullName, username, password, gender } = req.body;
  if (!fullName || !username || !password || !gender) {
  return next(new errorHandler("All field are required",400))
}
  res.send("hi Register");
});



export const login = (req, res, next) => {
  res.send("Hello i am login route");
};
