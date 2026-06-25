import {Router} from "express"
import deleteAccountController from "../Controllers/deleteAccountController.js"
import changeEmailController from "../Controllers/changeEmailController.js"
import changePasswordController from "../Controllers/changePasswordController.js";

import { postSignUp } from "../Controllers/createAccountController.js"
const AccountRouter = Router({mergeParams: true})


AccountRouter.post("/", postSignUp)
AccountRouter.delete("/",deleteAccountController)



export default AccountRouter