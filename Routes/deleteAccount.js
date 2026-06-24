
import { Router } from "express";
import deleteAccountController from "../Controllers/deleteAccountController.js"
import changeEmailController from "../Controllers/changeEmailController.js"
import changePasswordController from "../Controllers/changePasswordController.js";

const deleteAccountRouter = Router({mergeParams: true})

deleteAccountRouter.delete("/delete-account",deleteAccountController)



export default deleteAccountRouter
