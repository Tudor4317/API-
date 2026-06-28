import { Router } from "express";
import { createAccountController } from "../Controllers/createAccountController.js";
import {getAccountController} from "../Controllers/getAccountController.js";
import {deleteAccountController} from "../Controllers/deleteAccountController.js";


const accountCreationRouter = Router()

accountCreationRouter.post("/", createAccountController)



export default accountCreationRouter