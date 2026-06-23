import { Router } from "express";
import getLoginController from "../Controllers/loginController.js";
import passport from "passport";

const loginRouter = Router()



loginRouter.get("/",getLoginController)
loginRouter.post("/",passport.authenticate('local', {successRedirect:"/login-success",failureRedirect:"/login-failure"}))
export default loginRouter