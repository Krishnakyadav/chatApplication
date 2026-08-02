import { app, server } from "./socket/socket.js";
import { connectDB } from "./db/connecioin1.db.js";
connectDB();
import cookieParser from "cookie-parser";
import cors from "cors";

import express, { json } from "express";

app.use(
  cors({
    origin: [process.env.CLIENT_URL],
    credentials: true,
  }),
);
app.use(express.json()); // midleware
app.use(cookieParser());

const PORT = process.env.PORT || 5000;
console.log(PORT);

// routes
import userRoute from "./routes/user.route.js";
import messageRoute from "./routes/message.route.js";
app.use("/api/v1/user", userRoute);
app.use("/api/v1/message", messageRoute);

// middleware
import { errorMiddleware } from "./middlewares/error.middleware.js";
app.use(errorMiddleware);

server.listen(PORT, () => {
  console.log(`Your server started at Port${PORT}`);
});
