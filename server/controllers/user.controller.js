import User from "../models/user.model.js";
import { asyncHandler } from "../utilities/asyncHandler.utility.js";
import { errorHandler } from "../utilities/errorHandler.utlity.js";
import bcrypt from "bcryptjs";

export const register = asyncHandler(async (req, res, next) => {
  const { fullName, username, password, gender } = req.body;
  if (!fullName || !username || !password || !gender) {
    return next(new errorHandler("All field are required", 400));
  }

  const user = await User.findOne({ username });
  if (user) {
    return next(new errorHandler("User already exists", 400));
  }

  const hashedPassword = await bcrypt.hash(password, 10); // password hide

  const style = gender === "male" ? "adventurer" : "adventurer-neutral";
  const avatar = `https://api.dicebear.com/9.x/${style}/svg?seed=${username}`;

  const newUser = await User.create({
    username,
    fullName,
    password: hashedPassword,
    gender,
    avatar,
  });

  res.status(200).json({
    sucess: true,
    responseData: {
      newUser,
    },
  });
  res.send("hi Register");
});

export const login = asyncHandler(async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return next(
      new errorHandler("Please enter a valid username or password", 400),
    );
  }

  const user = await User.findOne({ username });
  if (!user) {
    return next(
      new errorHandler("Please enter a valid username or password", 400),
    );
  }

  const isValidPassword = await bcrypt.compare(password, user.password); // Check password compare password or user.password
  if (isValidPassword) {
    return next(new errorHandler("Please enter a valid username or password"));
  }

  res.status(200).json({
    sucess: true,
    responseData: {
      user,
    },
  });
});
