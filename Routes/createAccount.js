import {Router} from "express"
import { postSignUp } from "../Controllers/createAccountController.js"
const createAccountRouter = Router({mergeParams: true})


createAccountRouter.post("/", postSignUp)

export default createAccountRouter