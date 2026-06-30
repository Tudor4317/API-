import { Router } from "express";
import {getAccountController} from "../Controllers/getAccountController.js";
import {deleteAccountController} from "../Controllers/deleteAccountController.js";


const accountManageRouter = Router()


accountManageRouter.get("/", getAccountController)
accountManageRouter.delete("/",deleteAccountController)

export default accountManageRouter