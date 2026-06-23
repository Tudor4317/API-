import {Router} from "express"
import { postSignUp } from "../Controllers/signupController.js"
import { getSignUp } from "../Controllers/signupController.js"
const signupRouter = Router()

signupRouter.get("/",getSignUp)
signupRouter.post("/", postSignUp)

export default signupRouter