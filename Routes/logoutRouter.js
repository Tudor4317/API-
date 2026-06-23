import {Router} from "express"
import logoutContorller from "../Controllers/logoutController"

const logoutRouter = Router();

logoutRouter.get("/",logoutContorller)

export default logoutRouter