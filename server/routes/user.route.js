import express from "express";
import {getProfile, login,register } from "../controllers/user.controller.js";
import { isAuthenticated } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/register",register);
router.post("/login",login);
router.get("/get-profile",isAuthenticated,getProfile)

export default router;