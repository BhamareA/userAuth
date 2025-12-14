import express from "express";
import userRegister from "../controller/signupController.js";
import loginController, { refreshTokenController } from "../controller/loginController.js";
import getusercontroller from "../controller/usercontroller.js";
import authenticatToken from "../middleware/authMiddleware.js";
const userroute= express.Router();

userroute.post('/register', userRegister)
userroute.post('/login',loginController)
userroute.post('/refresh-token',refreshTokenController)
userroute.get('/getuser',authenticatToken,getusercontroller)

export default userroute;