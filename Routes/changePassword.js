import changePasswordController from "../Controllers/changePasswordController.js"
import {Router} from "express"

const changePasswordRouter = Router()

changePasswordRouter.put("/",changePasswordController)

export default changePasswordRouter