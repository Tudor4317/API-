import { accountLogInController } from "../Controllers/accountLogInController.js";
import { Router } from "express";

const accountLogInRouter = Router()
accountLogInRouter.post("/",accountLogInController)

export default accountLogInRouter
