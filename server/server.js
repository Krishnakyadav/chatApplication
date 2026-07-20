import dotenv from "dotenv";
dotenv.config();

import { connectDB } from "./db/connecioin1.db.js";
connectDB();
import cookieParser from "cookie-parser"

import express, { json } from "express";

const app = express();

app.use(express.json())  // midleware
app.use(cookieParser())


const PORT = process.env.PORT || 5000;
console.log(PORT);

 
// routes
import userRouter from "./routes/user.route.js";
app.use("/api/v1/user", userRouter);

// middleware
import { errorMiddleware } from "./middlewares/error.middleware.js";
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Your server started at Port${PORT}`);
});
