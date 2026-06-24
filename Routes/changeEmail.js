import changeEmailController from "../Controllers/changeEmailController.js"
import {Router} from "express"

const changeEmailRouter = Router({mergeParams: true})

changeEmailRouter.put("/", changeEmailController)

export default changeEmailRouter