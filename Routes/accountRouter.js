import { Router } from "express";
import {getAccountController} from "../Controllers/accountController.js";
import {deleteAccountController} from "../Controllers/accountController.js";
const accountRouter = Router()


accountRouter.get("/", getAccountController)
accountRouter.delete("/",deleteAccountController)

export default accountRouter