import { asyncHandler } from "../utilities/asyncHandler.utility.js";
import { errorHandler } from "../utilities/errorHandler.utlity.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = asyncHandler(async (req, res, next) => {
  const token =
    req.cookies.token || req.headers["authorization"]?.replace("Bearer ","");
// console.log("token",token)
// console.log("Cookies:", req.cookies);
// console.log("Authorization:", req.headers.authorization);
  if (!token) {
    return next(new errorHandler("Invalid token", 400));
  }
  const tokenData = jwt.verify(token, process.env.JWT_SECRET);
  req.user = tokenData;
  next();
});


// export const isAuthenticated = asyncHandler(async (req, res, next) => {
//   console.log("Cookies:", req.cookies);
//   console.log("Authorization:", req.headers.authorization);

//   const token =
//     req.cookies.token ||
//     req.headers.authorization?.split(" ")[1];

//   console.log("Token:", token);

//   if (!token) {
//     return next(new errorHandler("Invalid token", 400));
//   }

//   const tokenData = jwt.verify(token, process.env.JWT_SECRET);

//   req.user = tokenData;
//   next();
// });