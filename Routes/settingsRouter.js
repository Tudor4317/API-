import { getSetting } from "../Controllers/settingController.js";
import { postSetting } from "../Controllers/settingController.js";
import { Router } from "express";
import deleteAccountController from "../Controllers/deleteAccount.js"
import changeEmailController from "../Controllers/changeEmail.js"
import changePasswordController from "../Controllers/changePassword.js";

const settingsRouter = Router()

settingsRouter.get("/",getSetting)
settingsRouter.post("/",postSetting)
settingsRouter.get("/delete-account",deleteAccountController)
settingsRouter.post("/change-email",changeEmailController)
settingsRouter.post("/change-password",changePasswordController)


export default settingsRouter
