import { Router } from "express";
import {getAccountController} from "../Controllers/getAccountController.js";
import {deleteAccountController} from "../Controllers/deleteAccountController.js";


const accountInformationRouter = Router()


accountInformationRouter.get("/", getAccountController)
accountInformationRouter.delete("/",deleteAccountController)

export default accountInformationRouter